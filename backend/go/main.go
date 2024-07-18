package main

import (
	"fmt"
	"log"
	"os"

	"ALXCode/handlers"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/websocket/v2"
	"github.com/joho/godotenv"
)

func main() {
	fmt.Println("Welcome to ALXCode!")

	PORT := "3000"

	if err := godotenv.Load(".env"); err == nil {
		if port := os.Getenv("PORT"); port != "" {
			PORT = port
		}
	}
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	app.Get("/ws", websocket.New(handlers.HandleWebSocket))

	app.Static("/scripts", "./static/public/scripts")
	app.Static("/style", "./static/public/style")
	app.Static("/images", "./static/public/images")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/index.html")
	})
	app.Get("/doc", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/doc.html")
	})

	app.Route("/api", func(api fiber.Router) {

		api.Put("/getTree", handlers.HandleGetTree)
		api.Put("/readFile", handlers.HandleReadFile)
		api.Put("/move", handlers.HandleMove)
		api.Put("/rename", handlers.HandleRename)
		api.Delete("/delete", handlers.HandleDelete)
		api.Post("/create", handlers.HandleCreate)
		api.Post("/save", handlers.HandleSave)
		api.Put("/run", handlers.HandleRun)

	})

	log.Fatal(app.Listen(":" + PORT))
}
