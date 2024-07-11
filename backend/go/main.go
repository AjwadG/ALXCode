package main

import (
	"fmt"
	"io/fs"
	"log"
	"os"
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
	Path string `json:"path"`
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

	app.Get("/api/getTree", func(c *fiber.Ctx) error {
		body := new(Body)
		if err := c.BodyParser(body); err != nil {
			fmt.Println(err)
			return err
		}
		fileInfo, err := os.Stat(body.Path)
		if err != nil {
			fmt.Println(err)
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
	})
	log.Fatal(app.Listen(":3000"))
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
