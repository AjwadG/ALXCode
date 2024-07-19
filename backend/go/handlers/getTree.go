package handlers

import (
	"fmt"
	"io/fs"
	"os"
	"strings"
	"sync"

	"ALXCode/types"
	"github.com/gofiber/fiber/v2"
)

func HandleGetTree(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		fmt.Println(body.Path, "error body", body)
		return c.Status(400).JSON(&types.ErrorReturn{
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
	tree := &types.FileType{
		Dir:    fileInfo.IsDir(),
		Id:     0,
		Path:   body.Path,
		Name:   fileInfo.Name(),
		Parent: parent,
		Childs: []types.FileType{},
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
	getTree(subdirs, tree, &types.IdCounter{Id: 0}, &wg)
	wg.Wait()
	return c.JSON(tree)
}

func getTree(files []fs.DirEntry, parent *types.FileType, id *types.IdCounter, prevWG *sync.WaitGroup) {
	var wg sync.WaitGroup

	var childNodes []types.FileType

	for _, file := range files {
		node := types.FileType{
			Dir:    file.IsDir(),
			Id:     id.GetId(),
			Path:   parent.Path + "/" + file.Name(),
			Name:   file.Name(),
			Parent: parent.Path,
			Childs: []types.FileType{},
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
