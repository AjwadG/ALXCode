import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import { createServer } from "http";
import runComand from "./comands.js";
import getTree from "./dir.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/api/getTree", (req, res) => {
  const { path } = req.body;
  const tree = getTree(path);
  res.json(tree);
});

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

io.on("connection", (socket) => {
  socket.on("comand", async (comand, callback) => {
    const output = await runComand(comand);
    callback(output);
  });
});
