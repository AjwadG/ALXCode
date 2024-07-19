package handlers

import (
	"strings"

	"ALXCode/types"
	"ALXCode/utills"

	"github.com/gofiber/fiber/v2"
)

// HandleRename handles the PUT /rename endpoint.
// It renames a file or directory based on the provided old path and new name.
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleRename(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: err.Error(),
		})
	}

	if body.OldPath == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "oldPath is required",
		})
	}

	if body.NewName == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "newName is required",
		})
	}
	newPath := strings.Join(strings.Split(body.OldPath, "/")[:len(strings.
		Split(body.OldPath, "/"))-1], "/") + "/" + body.NewName

	output := utills.OneCommand("mv", body.OldPath, newPath)
	return c.JSON(output)
}
