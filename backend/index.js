import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import { createServer } from "http";
import chell from "./comands.js";
import getTree from "./dir.js";
import OneCommand from "./oneCommand.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public"));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON" });
  }
  next();
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/doc", (req, res) => {
  res.render("doc.ejs");
});

app.get("/api/getTree", async (req, res) => {
  const { path } = req.body;

  if (!path) return res.status(400).json({ error: "path is required" });

  const tree = getTree(path);

  res.json(tree);
});

app.get("/api/readFile", async (req, res) => {
  const { path } = req.body;

  if (!path) return res.status(400).json({ error: "path is required" });

  const output = await OneCommand.execute(`cat ${path}`);

  res.json(output);
});

app.put("/api/move", (req, res) => {
  const { oldPath, newPath } = req.body;

  if (!oldPath) return res.status(400).json({ error: "oldPath is required" });
  if (!newPath) return res.status(400).json({ error: "newPath is required" });

  const output = OneCommand.execute(`mv ${oldPath} ${newPath}`);

  res.json(output);
});

app.put("/api/rename", async (req, res) => {
  const { oldPath, newName } = req.body;

  if (!oldPath) return res.status(400).json({ error: "oldPath is required" });
  if (!newName) return res.status(400).json({ error: "newName is required" });

  const newPath = oldPath.split("/").slice(0, -1).join("/") + "/" + newName;
  const output = await OneCommand.execute(`mv ${oldPath} ${newPath}`);

  res.json(output);
});

app.delete("/api/delete", async (req, res) => {
  const { path } = req.body;

  if (!path) return res.status(400).json({ error: "path is required" });

  const output = await OneCommand.execute(`rm -r ${path}`);

  res.json(output);
});

app.post("/api/create", async (req, res) => {
  const { path, isDir, fileName } = req.body;

  if (!path) return res.status(400).json({ error: "path is required" });
  if (!fileName) return res.status(400).json({ error: "fileName is required" });

  const comand = isDir
    ? `mkdir ${path}/${fileName}`
    : `touch ${path}/${fileName}`;

  const output = await OneCommand.execute(comand);

  res.json(output);
});

app.post("/api/save", async (req, res) => {
  const { filePath, content } = req.body;

  if (!filePath) return res.status(400).json({ error: "filePath is required" });
  if (!content) return res.status(400).json({ error: "content is required" });

  const output = await OneCommand.writeFile(filePath, content);

  res.json(output);
});

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

io.on("connection", (socket) => {
  const shell = new chell();
  socket.on("comand", async (comand, callback) => {
    const output = await shell.runComand(comand);
    callback(output);
  });
});
