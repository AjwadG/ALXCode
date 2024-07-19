package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"
	"github.com/gofiber/fiber/v2"
)

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
