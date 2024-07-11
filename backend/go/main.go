package main

import (
	"fmt"
	"io/fs"
	"log"
	"os"
	"os/exec"
	"strings"

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
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Get("/api/getTree", HandleGetTree)

	app.Get("/api/readFile", HandleReadFile)

	app.Put("/api/move", HandleMove)

	app.Put("/api/rename", HandleRename)

	app.Delete("/api/delete", HandleDelete)

	app.Post("/api/create", HandleCreate)

	app.Post("/api/save", HandleSave)

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
	id := 0
	getTree(subdirs, tree, &id)

	return c.JSON(tree)
}

func getTree(files []fs.DirEntry, parent *FileType, id *int) {
	for i, file := range files {
		*id++
		node := FileType{
			Dir:    file.IsDir(),
			Id:     *id,
			Path:   parent.Path + "/" + file.Name(),
			Name:   file.Name(),
			Parent: parent.Path,
			Childs: []FileType{},
		}
		parent.Childs = append(parent.Childs, node)
		if node.Dir {
			subdirs, err := os.ReadDir(node.Path)
			if err != nil {
				continue
			}
			getTree(subdirs, &parent.Childs[i], id)
		}
	}
}

func OneCommand(command string, args ...string) ComnadReturn {
	cmd := exec.Command(command, args...)
	fmt.Println(cmd.Args)
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
