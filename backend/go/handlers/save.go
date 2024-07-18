package handlers

import (
	"os"

	"ALXCode/types"
	"github.com/gofiber/fiber/v2"
)

func HandleSave(c *fiber.Ctx) error {
	body := new(types.Body)
	if err := c.BodyParser(body); err != nil {
		return err
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
