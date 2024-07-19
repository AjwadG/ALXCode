package handlers

import (
	"os/exec"
	"strings"
	"sync/atomic"

	"ALXCode/utills"

	"github.com/gofiber/websocket/v2"
)

var sessionCounter int64

type TerminalSession struct {
	ID    int64
	Dir   string
	CmdCh chan string
	OutCh chan string
}

func newTerminalSession() *TerminalSession {
	id := atomic.AddInt64(&sessionCounter, 1)
	return &TerminalSession{
		ID:    id,
		Dir:   "/home",
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

func HandleWebSocket(conn *websocket.Conn) {
	session := newTerminalSession()
	filters := []string{"vi", "sudo", "vim", "nano", "clear", "exit"}

	go session.runShell()

	defer func() {
		conn.Close()
		close(session.CmdCh)
	}()

	for {
		mt, msg, err := conn.ReadMessage()
		if err != nil {
			break
		}

		command := string(msg)
		var output string

		if utills.Contains(strings.Fields(command), filters) {
			output = "command not allowed\n"
		} else {
			session.CmdCh <- command

			output = <-session.OutCh
		}

		err = conn.WriteMessage(mt, []byte(output))
		if err != nil {
			break
		}
	}
}
