package handlers

import (
	"os"
	"strings"

	"ALXCode/types"
	"ALXCode/utills"

	"github.com/gofiber/fiber/v2"
)

// HandleRun handles the Put /run endpoint.
// It runs a file based on the provided path.
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleRun(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: err.Error(),
		})
	}
	if body.Path == "" {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: "path is required",
		})
	}
	fileName := strings.Split(body.Path, "/")[len(strings.Split(body.Path, "/"))-1]
	fileExtension := strings.Split(fileName, ".")[len(strings.Split(fileName, "."))-1]

	if fileExtension == "js" || fileExtension == "jsx" {
		outPut := utills.OneCommand("node", body.Path)
		return c.JSON(outPut)
	}

	if fileExtension == "py" {
		outPut := utills.OneCommand("python3", body.Path)
		return c.JSON(outPut)
	}

	if fileExtension == "go" {
		outPut := utills.OneCommand("go", "run", body.Path)
		return c.JSON(outPut)
	}

	if fileExtension == "c" || fileExtension == "cpp" {
		outPut := utills.OneCommand("gcc", body.Path, "-o", fileName[:len(fileName)-2])
		if !outPut.Succeed {
			return c.Status(400).JSON(outPut)
		}
		outPut = utills.OneCommand(fileName[:len(fileName)-2])
		os.Remove(fileName[:len(fileName)-2])
		return c.JSON(outPut)
	}

	outPut := utills.OneCommand("chmod", "+x", body.Path)
	if !outPut.Succeed {
		return c.Status(400).JSON(outPut)
	}
	outPut = utills.OneCommand(body.Path)
	return c.JSON(outPut)
}
