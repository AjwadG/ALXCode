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

// main function to start the application
func main() {
	// Print welcome message
	fmt.Println("Welcome to ALXCode!")

	PORT := "3000"

	// Load environment variables from .env file
	if err := godotenv.Load(".env"); err == nil {
		// Check if PORT environment variable is set
		if port := os.Getenv("PORT"); port != "" {
			PORT = port
		}
	}

	app := fiber.New()

	// Add CORS middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	// WebSocket endpoint
	app.Get("/ws", websocket.New(handlers.HandleWebSocket))

	// Serve static files
	app.Static("/scripts", "./static/public/scripts")
	app.Static("/style", "./static/public/style")
	app.Static("/images", "./static/public/images")

	// Home page route
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/index.html")
	})

	// Documentation page route
	app.Get("/doc", func(c *fiber.Ctx) error {
		return c.SendFile("./static/views/doc.html")
	})

	// API routes
	app.Route("/api", func(api fiber.Router) {
		api.Get("/getTree", handlers.HandleGetTree)
		api.Get("/readFile", handlers.HandleReadFile)
		api.Put("/move", handlers.HandleMove)
		api.Put("/rename", handlers.HandleRename)
		api.Delete("/delete", handlers.HandleDelete)
		api.Post("/create", handlers.HandleCreate)
		api.Post("/save", handlers.HandleSave)
		api.Put("/run", handlers.HandleRun)
	})

	// Default route redirect
	app.Get("/*", func(c *fiber.Ctx) error {
		return c.Redirect("/")
	})

	log.Fatal(app.Listen(":" + PORT))
}
