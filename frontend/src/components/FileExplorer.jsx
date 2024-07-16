import { useState, useEffect } from "react";
import Folder from "./Folder";
import axios from "axios";
import { useQuery } from "react-query";

const BASE_URL = "http://localhost:3000";
const curretnPath = "/home/ajwadg/ajwad/alx/ALXCode"; // edit this

function buildStructure(rootNode) {
  function buildChilds(parent) {
    parent.childs = parent.childs.map((child) => {
      child.parent = parent;
      if (child.dir) {
        child.childs = buildChilds(child);
      }
      return child;
    });
    return parent.childs;
  }

  rootNode.childs = rootNode.childs.map((node) => {
    node.parent = rootNode;
    if (node.dir) {
      node.childs = buildChilds(node);
    }
    return node;
  });

  return rootNode;
}

function FileExplorer({ setNavFiles, searchQuery }) {
  const [structure, setStructure] = useState({});
  const [fileInEdit, setFileInEdit] = useState(null);
  const [filteredStructure, setFilteredStructure] = useState({});
  const [fileInCreation, setFileInCreation] = useState(null);

  useQuery("structure", () => {
    fetch(`${BASE_URL}/api/getTree`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: curretnPath,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const fileStructure = buildStructure(data);
        setStructure(fileStructure);
        setFilteredStructure(fileStructure);
      });
  });

  const [draggedFile, setDraggedFile] = useState(null);

  function checkTree(nodeToCheck, targetParent) {
    if (!targetParent.dir) return true;
    let parent = nodeToCheck.parent;

    while (parent) {
      if (parent.id === targetParent.id) {
        return false;
      }
      parent = parent.parent;
    }
    return true;
  }

  class DND {
    static getFileCreation() {
      if (fileInCreation) {
        return fileInCreation;
      }
      return {};
    }
    static newFileCreation(file, isDir) {
      setFileInCreation({ file, isDir });
    }

    static async handleFileCreation(newName) {
      const { file: parent, isDir } = fileInCreation;
      if (
        parent &&
        newName !== "" &&
        parent.childs.filter((child) => child.name === newName).length === 0
      ) {
        try {
          const response = await axios.post(`${BASE_URL}/api/create`, {
            path: parent.path,
            fileName: newName,
            isDir: isDir,
          });
          if (response.data.succeed) {
            parent.childs.push({
              id: Date.now(),
              name: newName,
              path: parent.path + "/" + newName,
              dir: isDir,
              parent: parent,
              childs: [],
            });
          } else {
            alert(response.data.output);
          }
        } catch (error) {
          console.error(error);
        }
        setStructure(structure);
      }
      setFileInCreation(null);
    }
    static getFileInEdit() {
      return fileInEdit;
    }
    static async handleFileEdit(newName) {
      if (
        fileInEdit &&
        newName !== "" &&
        fileInEdit.name !== newName &&
        fileInEdit.parent &&
        fileInEdit.parent.childs.filter(
          (child) => child.name === newName && child.id !== fileInEdit.id
        ).length === 0
      ) {
        try {
          const response = await axios.put(`${BASE_URL}/api/rename`, {
            oldPath: fileInEdit.path,
            newName: newName,
          });
          if (response.data.succeed) {
            fileInEdit.name = newName;
            fileInEdit.path = fileInEdit.parent.path + "/" + newName;
            DND.fixChilds(fileInEdit);
          } else {
            alert(response.data.output);
          }
        } catch (error) {
          console.error(error);
        }
        setNavFiles(null, null, true);
      }
      setFileInEdit(null);
    }

    static handleDoubleClick(file) {
      setFileInEdit(file);
    }
    static handleDragStart(file) {
      setDraggedFile(file);
    }

    static fixChilds(parent) {
      const parentPath = parent.path;
      parent.childs = parent.childs.map((child) => {
        child.path = parentPath + "/" + child.name;
        if (child.dir) {
          DND.fixChilds(child);
        }
        return child;
      });
    }

    static async handleDrop(targetFolder) {
      if (
        draggedFile &&
        targetFolder !== draggedFile.parent &&
        targetFolder.dir &&
        checkTree(targetFolder, draggedFile)
      ) {
        try {
          const response = await axios.put(`${BASE_URL}/api/move`, {
            oldPath: draggedFile.path,
            newPath: targetFolder.path,
          });
          if (response.data.succeed) {
            draggedFile.parent.childs = draggedFile.parent.childs.filter(
              (child) => child.id !== draggedFile.id
            );
            draggedFile.parent = targetFolder;
            draggedFile.path = targetFolder.path + "/" + draggedFile.name;
            DND.fixChilds(draggedFile);
            targetFolder.childs.push(draggedFile);
            setStructure(structure);
          } else {
            alert(response.data.output);
          }
        } catch (error) {
          console.error(error);
        }
        setDraggedFile(null);
      }
    }

    static handleDragOver(e) {
      e.preventDefault();
    }
  }

  const deleteItem = async (item) => {
    const deleteRecursively = (folder) => {
      if (!folder.dir) return;

      folder.childs = folder.childs.filter((child) => child.id !== item.id);
      folder.childs.forEach(deleteRecursively);
    };
    try {
      const response = await axios.delete(`${BASE_URL}/api/delete`, {
        data: { path: item.path },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.succeed) {
        const newStructure = { ...structure };
        deleteRecursively(newStructure);
        setStructure(newStructure);
        setNavFiles(item);
      } else {
        alert(response.data.output);
      }
    } catch (error) {
      console.error(error);
      console.error(error.response.data);
    }
  };
  useEffect(() => {
    const filterStructure = (node, query) => {
      if (node.name.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }

      if (node.dir) {
        node.childs = node.childs.filter((child) =>
          filterStructure(child, query)
        );
        return node.childs.length > 0;
      }

      return false;
    };

    if (searchQuery.trim() === "") {
      setFilteredStructure(structure); // Reset to original structure
    } else {
      const newFilteredStructure = { ...structure };
      filterStructure(newFilteredStructure, searchQuery);
      setFilteredStructure(newFilteredStructure);
    }
  }, [searchQuery, structure]);

  return (
    <div className="pt-4">
      <Folder
        folder={filteredStructure}
        setNavFiles={setNavFiles}
        onDelete={deleteItem}
        DND={DND}
      />
    </div>
  );
}

export default FileExplorer;
