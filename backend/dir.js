import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileType {
  constructor(path, dir, id) {
    this.id = id;
    this.path = path;
    this.name = path.split("/").pop();
    this.parent = path.split("/").slice(0, -1).join("/");
    this.dir = dir;
  }
}

class Dir extends FileType {
  constructor(path, id) {
    super(path, true, id);
    this.childs = [];
  }

  addChiled(child) {
    this.childs.push(child);
  }
}

class File extends FileType {
  constructor(path, id) {
    super(path, false, id);
  }
}

function buildTree(parent, id) {
  const path = parent.path;
  const files = fs.readdirSync(path, { withFileTypes: true });
  for (const node of files) {
    if (node.isDirectory()) {
      const dir = new Dir(path + "/" + node.name, id[0]++);
      buildTree(dir, id);
      parent.addChiled(dir);
    } else {
      const file = new File(path + "/" + node.name, id[0]++);
      parent.addChiled(file);
    }
  }
}

function getTree(path) {
  if (!path) path = __dirname + "/public";
  const id = [1];
  try {
    const stats = fs.statSync(path);

    if (stats.isDirectory()) {
      const dir = new Dir(path, id[0]++);
      buildTree(dir, id);
      return dir;
    }
    return new File(path, id[0]++);
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}

export default getTree;
