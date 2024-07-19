package handlers

import (
	"os"

	"ALXCode/types"

	"github.com/gofiber/fiber/v2"
)

// HandleSave handles the POST /save endpoint.
// It saves the content of a file to the specified path.
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleSave(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: err.Error(),
		})
	}
	if body.FilePath == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "filePath is required",
		})
	}
	err := os.WriteFile(body.FilePath, []byte(body.Content), 0644)
	if err != nil {
		return c.Status(400).JSON(types.ComnadReturn{
			Succeed: false,
			Output:  err.Error(),
			Error:   err.Error(),
		})
	}
	return c.JSON(types.ComnadReturn{
		Succeed: true,
		Output:  "Saved",
	})
}
