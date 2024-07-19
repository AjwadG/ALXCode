package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"

	"github.com/gofiber/fiber/v2"
)

// HandleReadFile handles the GET /readFile endpoint.
// It reads the contents of a file based on the provided path.
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleReadFile(c *fiber.Ctx) error {
	path := c.Query("path")
	if path == "" {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: "path is required",
		})
	}
	output := utills.OneCommand("cat", path)
	return c.JSON(output)
}
