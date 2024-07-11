package main

import (
	"fmt"
	"io/fs"
	"log"
	"os"
	"os/exec"
	"strings"
	"sync"

	"github.com/gofiber/fiber/v2"
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

func main() {
	fmt.Println("Hello, World!")
	app := fiber.New()

	app.Static("/scripts", "./static/public/scripts")
	app.Static("/style", "./static/public/style")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/index.html")
	})
	app.Get("/doc", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/doc.html")
	})

	app.Route("/api", func(api fiber.Router) {

		api.Get("/getTree", HandleGetTree)
		api.Get("/readFile", HandleReadFile)
		api.Put("/move", HandleMove)
		api.Put("/rename", HandleRename)
		api.Delete("/delete", HandleDelete)
		api.Post("/create", HandleCreate)
		api.Post("/save", HandleSave)

	})

	log.Fatal(app.Listen(":3000"))
}

type ComnadReturn struct {
	Succeed bool   `json:"succeed"`
	Output  string `json:"output"`
	Error   string `json:"error"`
}
type ErrorReturn struct {
	Error string `json:"error"`
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

	fmt.Println(newPath)
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

type idCounter struct {
	id      int
	idMutex sync.Mutex
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
	output, err := cmd.Output()
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
