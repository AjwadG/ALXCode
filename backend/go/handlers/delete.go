package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"

	"github.com/gofiber/fiber/v2"
)

// HandleDelete handles the DELETE /delete endpoint.
//
//	deletes a file or directory based on the provided path
//
// Parameters:
//   - c: *fiber.Ctx - the context of the request
//
// Returns:
//   - error: the error if any occurred
func HandleDelete(c *fiber.Ctx) error {
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

	output := utills.OneCommand("rm", "-r", body.Path)
	return c.JSON(output)
}
