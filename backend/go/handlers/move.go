package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"

	"github.com/gofiber/fiber/v2"
)

// HandleMove handles the PUT /move endpoint.
// It moves a file or directory to a new location.
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleMove(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.OldPath == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "oldPath is required",
		})
	}
	if body.NewPath == "" {
		return c.Status(400).JSON(types.ErrorReturn{
			Error: "newPath is required",
		})
	}
	output := utills.OneCommand("mv", body.OldPath, body.NewPath)
	return c.JSON(output)
}
