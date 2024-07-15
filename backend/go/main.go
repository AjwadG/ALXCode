package main

import (
	"fmt"
	"io/fs"
	"log"
	"os"
	"os/exec"
	"strings"
	"sync"
	"sync/atomic"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/websocket/v2"
	"github.com/joho/godotenv"
)

type Todo struct {
	ID    int    `json:"id,omitempty"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
	Body  string `json:"body"`
}

type Body struct {
	Path     string `json:"path"`
	OldPath  string `json:"oldPath"`
	NewPath  string `json:"newPath"`
	NewName  string `json:"newName"`
	FileName string `json:"fileName"`
	IsDir    bool   `json:"isDir"`
	FilePath string `json:"filePath"`
	Content  string `json:"content"`
}

type FileType struct {
	Id     int        `json:"id"`
	Path   string     `json:"path"`
	Name   string     `json:"name"`
	Parent string     `json:"parent"`
	Dir    bool       `json:"dir"`
	Childs []FileType `json:"childs"`
}

type TerminalSession struct {
	ID    int64
	Dir   string
	CmdCh chan string
	OutCh chan string
}

type ComnadReturn struct {
	Succeed bool   `json:"succeed"`
	Output  string `json:"output"`
	Error   string `json:"error"`
}
type ErrorReturn struct {
	Error string `json:"error"`
}

type idCounter struct {
	id      int
	idMutex sync.Mutex
}

var sessionCounter int64

func main() {
	fmt.Println("Hello, World!")

	PORT := "3000"

	if err := godotenv.Load(".env"); err == nil {
		if port := os.Getenv("PORT"); port != "" {
			PORT = port
		}
	}
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	app.Get("/ws", websocket.New(handleWebSocket))

	app.Static("/scripts", "./static/public/scripts")
	app.Static("/style", "./static/public/style")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/index.html")
	})
	app.Get("/doc", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/doc.html")
	})

	app.Route("/api", func(api fiber.Router) {

		api.Put("/getTree", HandleGetTree)
		api.Put("/readFile", HandleReadFile)
		api.Put("/move", HandleMove)
		api.Put("/rename", HandleRename)
		api.Delete("/delete", HandleDelete)
		api.Post("/create", HandleCreate)
		api.Post("/save", HandleSave)
		api.Put("/run", HandleRun)

	})

	log.Fatal(app.Listen(":" + PORT))
}

func newTerminalSession() *TerminalSession {
	id := atomic.AddInt64(&sessionCounter, 1)
	return &TerminalSession{
		ID:    id,
		Dir:   "./",
		CmdCh: make(chan string),
		OutCh: make(chan string),
	}
}

func (ts *TerminalSession) runShell() {
	for cmdStr := range ts.CmdCh {
		if strings.HasPrefix(cmdStr, "cd ") {
			cmdStr += " && pwd"
		}
		cmd := exec.Command("bash", "-c", cmdStr)
		cmd.Dir = ts.Dir

		output, err := cmd.CombinedOutput()

		if strings.HasPrefix(cmdStr, "cd ") {
			if err == nil {
				ts.Dir = strings.Trim(string(output), "\n")
				ts.OutCh <- "Changed directory to " + ts.Dir + "\n"
				continue
			}
		}

		if err != nil {
			if string(output) != "" {
				ts.OutCh <- string(output)
			} else {
				ts.OutCh <- "Error: " + err.Error()
			}
		} else {
			ts.OutCh <- string(output)
		}
	}
}

func handleWebSocket(conn *websocket.Conn) {
	session := newTerminalSession()
	filters := []string{"vi", "sudo", "vim", "nano", "clear", "exit"}

	go session.runShell()

	defer func() {
		conn.Close()
		close(session.CmdCh)
	}()
	fmt.Println("new session", session.ID)

	for {
		mt, msg, err := conn.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			break
		}

		command := string(msg)
		var output string

		if contains(strings.Fields(command), filters) {
			output = "command not allowed\n"
		} else {
			session.CmdCh <- command

			output = <-session.OutCh
		}

		err = conn.WriteMessage(mt, []byte(output))
		if err != nil {
			log.Println("write:", err)
			break
		}
	}
}

func contains(array []string, filters []string) bool {
	for _, a := range array {
		for _, b := range filters {
			if a == b {
				return true
			}
		}
	}
	return false
}

func HandleRun(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		return c.Status(400).JSON(&ErrorReturn{
			Error: "path is required",
		})
	}
	fileName := strings.Split(body.Path, "/")[len(strings.Split(body.Path, "/"))-1]
	fileExtension := strings.Split(fileName, ".")[len(strings.Split(fileName, "."))-1]

	if fileExtension == "js" || fileExtension == "jsx" {
		outPut := OneCommand("node", body.Path)
		return c.JSON(outPut)
	}

	if fileExtension == "py" {
		outPut := OneCommand("python", body.Path)
		return c.JSON(outPut)
	}

	if fileExtension == "go" {
		outPut := OneCommand("go", "run", body.Path)
		return c.JSON(outPut)
	}

	if fileExtension == "c" || fileExtension == "cpp" {
		outPut := OneCommand("gcc", body.Path, "-o", fileName[:len(fileName)-2])
		if !outPut.Succeed {
			return c.Status(400).JSON(outPut)
		}
		outPut = OneCommand(fileName[:len(fileName)-2])
		os.Remove(fileName[:len(fileName)-2])
		return c.JSON(outPut)
	}

	outPut := OneCommand("chmod", "+x", body.Path)
	if !outPut.Succeed {
		return c.Status(400).JSON(outPut)
	}
	outPut = OneCommand(body.Path)
	return c.JSON(outPut)
}

func HandleSave(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.FilePath == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "filePath is required",
		})
	}
	err := os.WriteFile(body.FilePath, []byte(body.Content), 0644)
	if err != nil {
		return c.Status(400).JSON(ComnadReturn{
			Succeed: false,
			Output:  err.Error(),
			Error:   err.Error(),
		})
	}
	return c.JSON(ComnadReturn{
		Succeed: true,
		Output:  "Saved",
	})
}

func HandleCreate(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "path is required",
		})
	}
	if body.FileName == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "fileName is required",
		})
	}
	filePath := body.Path + "/" + body.FileName

	var output ComnadReturn
	if body.IsDir {
		output = OneCommand("mkdir", filePath)
	} else {
		output = OneCommand("touch", filePath)
	}
	return c.JSON(output)
}

func HandleDelete(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "path is required",
		})
	}

	output := OneCommand("rm", "-r", body.Path)
	return c.JSON(output)
}

func HandleRename(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}

	if body.OldPath == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "oldPath is required",
		})
	}

	if body.NewName == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "newName is required",
		})
	}
	newPath := strings.Join(strings.Split(body.OldPath, "/")[:len(strings.
		Split(body.OldPath, "/"))-1], "/") + "/" + body.NewName

	output := OneCommand("mv", body.OldPath, newPath)
	return c.JSON(output)
}

func HandleMove(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.OldPath == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "oldPath is required",
		})
	}
	if body.NewPath == "" {
		return c.Status(400).JSON(ErrorReturn{
			Error: "newPath is required",
		})
	}
	output := OneCommand("mv", body.OldPath, body.NewPath)
	return c.JSON(output)
}

func HandleReadFile(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		return c.Status(400).JSON(&ErrorReturn{
			Error: "path is required",
		})
	}
	output := OneCommand("cat", body.Path)
	return c.JSON(output)
}

func HandleGetTree(c *fiber.Ctx) error {
	body := new(Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		fmt.Println(body.Path, "error body", body)
		return c.Status(400).JSON(&ErrorReturn{
			Error: "path is required",
		})
	}

	fileInfo, err := os.Stat(body.Path)
	if err != nil {
		return err
	}
	splitedPath := strings.Split(body.Path, "/")
	var parent string
	if len(splitedPath) <= 1 {
		parent = "/"
	} else {
		parent = strings.Join(splitedPath[:len(splitedPath)-1], "/")
	}
	tree := &FileType{
		Dir:    fileInfo.IsDir(),
		Id:     0,
		Path:   body.Path,
		Name:   fileInfo.Name(),
		Parent: parent,
		Childs: []FileType{},
	}

	if !tree.Dir {
		return c.JSON(tree)
	}
	subdirs, err := os.ReadDir(tree.Path)
	if err != nil {
		fmt.Println(err)
		return err
	}
	var wg sync.WaitGroup

	wg.Add(1)
	getTree(subdirs, tree, &idCounter{id: 0}, &wg)
	wg.Wait()
	return c.JSON(tree)
}

func (i *idCounter) GetId() int {
	i.idMutex.Lock()
	defer i.idMutex.Unlock()
	i.id++
	return i.id
}

func getTree(files []fs.DirEntry, parent *FileType, id *idCounter, prevWG *sync.WaitGroup) {
	var wg sync.WaitGroup

	var childNodes []FileType

	for _, file := range files {
		node := FileType{
			Dir:    file.IsDir(),
			Id:     id.GetId(),
			Path:   parent.Path + "/" + file.Name(),
			Name:   file.Name(),
			Parent: parent.Path,
			Childs: []FileType{},
		}
		childNodes = append(childNodes, node)
	}

	parent.Childs = append(parent.Childs, childNodes...)

	for i := range childNodes {
		if childNodes[i].Dir {
			subdirs, err := os.ReadDir(childNodes[i].Path)
			if err != nil {
				continue
			}
			wg.Add(1)
			go getTree(subdirs, &parent.Childs[i], id, &wg)
		}
	}
	wg.Wait()
	prevWG.Done()
}

func OneCommand(command string, args ...string) ComnadReturn {
	cmd := exec.Command(command, args...)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return ComnadReturn{
			Succeed: false,
			Output:  string(output),
			Error:   err.Error(),
		}
	}
	return ComnadReturn{
		Succeed: true,
		Output:  string(output),
		Error:   "",
	}
}
