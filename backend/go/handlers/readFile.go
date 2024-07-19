package handlers

import (
	"ALXCode/types"
	"ALXCode/utills"
	"github.com/gofiber/fiber/v2"
)

func HandleReadFile(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return err
	}
	if body.Path == "" {
		return c.Status(400).JSON(&types.ErrorReturn{
			Error: "path is required",
		})
	}
	output := utills.OneCommand("cat", body.Path)
	return c.JSON(output)
}
