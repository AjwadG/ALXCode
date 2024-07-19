package types

import "sync"

type IdCounter struct {
	Id      int
	IdMutex sync.Mutex
}

func (i *IdCounter) GetId() int {
	i.IdMutex.Lock()
	defer i.IdMutex.Unlock()
	i.Id++
	return i.Id
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


type ComnadReturn struct {
	Succeed bool   `json:"succeed"`
	Output  string `json:"output"`
	Error   string `json:"error"`
}
type ErrorReturn struct {
	Error string `json:"error"`
}
