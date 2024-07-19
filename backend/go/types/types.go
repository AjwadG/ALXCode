package types

import "sync"

// IdCounter represents a counter for generating unique IDs
type IdCounter struct {
	Id      int
	IdMutex sync.Mutex
}

// GetId increments the ID counter and returns the new ID
func (i *IdCounter) GetId() int {
	i.IdMutex.Lock()
	defer i.IdMutex.Unlock()
	i.Id++
	return i.Id
}

// Body represents the structure for body content
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

// FileType represents the structure for file types
type FileType struct {
	Id     int        `json:"id"`
	Path   string     `json:"path"`
	Name   string     `json:"name"`
	Parent string     `json:"parent"`
	Dir    bool       `json:"dir"`
	Childs []FileType `json:"childs"`
}

// ComnadReturn represents the return structure for commands
type ComnadReturn struct {
	Succeed bool   `json:"succeed"`
	Output  string `json:"output"`
	Error   string `json:"error"`
}

// ErrorReturn represents the return structure for errors
type ErrorReturn struct {
	Error string `json:"error"`
}
