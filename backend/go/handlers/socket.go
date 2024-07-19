package handlers

import (
	"os/exec"
	"strings"
	"sync/atomic"

	"ALXCode/utills"

	"github.com/gofiber/websocket/v2"
)

var sessionCounter int64

// TerminalSession represents a terminal session
//
// Fields:
//   - ID: int64 - the ID of the session
//   - Dir: string - the current working directory
//   - CmdCh: chan string - the channel for receiving commands
//   - OutCh: chan string - the channel for sending output
type TerminalSession struct {
	ID    int64
	Dir   string
	CmdCh chan string
	OutCh chan string
}

// newTerminalSession creates a new TerminalSession with a unique ID and initializes the channels.
// Returns a pointer to the new TerminalSession.
func newTerminalSession() *TerminalSession {
	id := atomic.AddInt64(&sessionCounter, 1)
	return &TerminalSession{
		ID:    id,
		Dir:   "/home",
		CmdCh: make(chan string),
		OutCh: make(chan string),
	}
}

// runShell runs the shell for the terminal session.
// It reads commands from the CmdCh channel, executes them, and sends the output to the OutCh channel.
// If the command is a "cd" command, it updates the current directory and sends a message about the change.
// Parameters:
//   - ts: *TerminalSession - the terminal session
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

// HandleWebSocket handles the WebSocket connection for the terminal session.
// It creates a new terminal session, runs the shell, and handles the WebSocket
// messages.
// Parameters:
//   - conn: *websocket.Conn - the WebSocket connection
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
