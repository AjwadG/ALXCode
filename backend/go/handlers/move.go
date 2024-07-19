package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"
	"github.com/gofiber/fiber/v2"
)

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
