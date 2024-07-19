package handlers

import (
	"io/fs"
	"os"
	"strings"
	"sync"

	"ALXCode/types"

	"github.com/gofiber/fiber/v2"
)

// HandleGetTree handles the GET /getTree endpoint.
// It retrieves the directory tree starting from the specified path.
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleGetTree(c *fiber.Ctx) error {
	path := c.Query("path")
	if path == "" {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: "path is required",
		})
	}

	fileInfo, err := os.Stat(path)
	if err != nil {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: err.Error(),
		})
	}

	if !fileInfo.IsDir() {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: "path is not a directory",
		})
	}
	splitedPath := strings.Split(path, "/")
	var parent string
	if len(splitedPath) <= 1 {
		parent = "/"
	} else {
		parent = strings.Join(splitedPath[:len(splitedPath)-1], "/")
	}
	tree := &types.FileType{
		Dir:    fileInfo.IsDir(),
		Id:     0,
		Path:   path,
		Name:   fileInfo.Name(),
		Parent: parent,
		Childs: []types.FileType{},
	}

	if !tree.Dir {
		return c.JSON(tree)
	}
	subdirs, err := os.ReadDir(tree.Path)
	if err != nil {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: err.Error(),
		})
	}
	var wg sync.WaitGroup

	wg.Add(1)
	getTree(subdirs, tree, &types.IdCounter{Id: 0}, &wg)
	wg.Wait()
	return c.JSON(tree)
}

// getTree retrieves the directory tree starting from the specified path.
// It is a recursive function that calls itself for each subdirectory found.
// Parameters:
//   - files: []fs.DirEntry - the list of files and directories in the current path
//   - parent: *types.FileType - the parent node of the current path
//   - id: *types.IdCounter - the counter for generating unique IDs
//   - prevWG: *sync.WaitGroup - the wait group for synchronizing the function
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
