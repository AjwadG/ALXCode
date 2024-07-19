package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"

	"github.com/gofiber/fiber/v2"
)

// HandleCreate handles the POST /create endpoint.
// creates a file or directory based on the provided path
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleCreate(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: err.Error(),
		})
	}
	if body.Path == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "path is required",
		})
	}
	if body.FileName == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "fileName is required",
		})
	}
	filePath := body.Path + "/" + body.FileName

	var output types.ComnadReturn
	if body.IsDir {
		output = utills.OneCommand("mkdir", filePath)
	} else {
		output = utills.OneCommand("touch", filePath)
	}
	return c.JSON(output)
}
