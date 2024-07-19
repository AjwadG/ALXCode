package utills

import (
    "os/exec"
    "ALXCode/types"
)

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
