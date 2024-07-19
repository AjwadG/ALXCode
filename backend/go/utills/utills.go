package utills

// Package utills contains utility functions

import (
	"ALXCode/types" // Package types contains types
	"os/exec"       // Package os/exec is used to run commands
)

// Contains checks if an array contains any of the filters
// Parameters:
//   - array: []string - array to search in
//   - filters: []string - filters to search for
//
// Returns:
//   - bool: true if array contains any of the filters, false otherwise
func Contains(array []string, filters []string) bool {
	for _, a := range array {
		for _, b := range filters {
			if a == b {
				return true
			}
		}
	}
	return false
}

// OneCommand runs a command with arguments and returns the output
// Parameters:
//   - command: string - command to run
//   - args: ...string - arguments for the command
//
// Returns:
//   - types.ComnadReturn: structure containing the output and error of the command
func OneCommand(command string, args ...string) types.ComnadReturn {
	cmd := exec.Command(command, args...)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return types.ComnadReturn{
			Succeed: false,
			Output:  string(output),
			Error:   err.Error(),
		}
	}
	return types.ComnadReturn{
		Succeed: true,
		Output:  string(output),
		Error:   "",
	}
}
