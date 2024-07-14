import { useState } from "react";
import Folder from "./Folder";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
const curretnPath = "/home/ajwadg/ajwad/alx/ALXCode"; // edit this
const initialStructure = await getStructure(curretnPath);

async function getStructure(path) {
  let structure;
  try {
    const response = await axios.put(`${BASE_URL}/api/getTree`, {
      path,
    });
    structure = response.data;
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

    structure.childs = structure.childs.map((node) => {
      node.parent = structure;
      if (node.dir) {
        node.childs = buildChilds(node);
      }
      return node;
    });
  } catch (error) {
    structure = {
      id: 0,
      name: "NOT FOUND",
      dir: true,
      childs: [],
    };
    console.error(error);
  }
  return structure;
}

// {
//   id: 1,
//   name: "root",
//   dir: true,
//   childs: [
//     {
//       id: 2,
//       name: "src",
//       dir: true,
//       childs: [
//         {
//           id: 4,
//           name: "index.js",
//           dir: false,
//           content: "console.log('Hello from index!')",
//         },
//         {
//           id: 7,
//           name: "components",
//           dir: true,
//           childs: [
//             {
//               id: 8,
//               name: "FileExplorer.jsx",
//               dir: false,
//               content: "console.log('Hello from FileExplorer!')",
//             },
//             {
//               id: 9,
//               name: "Folder.jsx",
//               dir: false,
//               content: "console.log('Hello from Folder!')",
//             },
//           ],
//         },
//         {
//           id: 6,
//           name: "App.js",
//           dir: false,
//           content: "console.log('Hello from App!')",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "public",
//       dir: true,
//       childs: [
//         {
//           id: 5,
//           name: "index.html",
//           dir: false,
//           content: "<h1>Hello World!</h1>",
//         },
//       ],
//     },
//   ],
// };

function FileExplorer({ setNavFiles }) {
  const [structure, setStructure] = useState(initialStructure);
  const [fileInEdit, setFileInEdit] = useState(null);

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

  const deleteFile = (file) => {
    const deleteRecursively = (folder) => {
      if (!folder.dir) return;

      folder.childs = folder.childs.filter((child) => child.id !== file.id);
      folder.childs.forEach(deleteRecursively);
    };

    const newStructure = { ...structure };
    deleteRecursively(newStructure);
    setStructure(newStructure);
  };

  const createFile = (folderId) => {
    const newFile = {
      id: Date.now(),
      name: `New File`,
      dir: false,
      content: "",
    };
    const addFileToFolder = (folder, folderId) => {
      if (folder.id === folderId) {
        return {
          ...folder,
          childs: [newFile, ...folder.childs],
        };
      }
      return {
        ...folder,
        childs: folder.childs.map((child) => {
          if (child.dir) {
            return addFileToFolder(child, folderId);
          }
          return child;
        }),
      };
    };

    setStructure((prevStructure) => addFileToFolder(prevStructure, folderId));
  };

  const createFolder = (folderId) => {
    const newFolder = {
      id: Date.now(),
      name: `New Folder`,
      dir: true,
      childs: [],
    };

    const addFolderToFolder = (folder, folderId) => {
      if (folder.id === folderId) {
        return {
          ...folder,
          childs: [newFolder, ...folder.childs],
        };
      }
      return {
        ...folder,
        childs: folder.childs.map((child) => {
          if (child.dir) {
            return addFolderToFolder(child, folderId);
          }
          return child;
        }),
      };
    };

    setStructure((prevStructure) => addFolderToFolder(prevStructure, folderId));
  };

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

  return (
    <div className="pt-4">
      <Folder
        folder={structure}
        setNavFiles={setNavFiles}
        onDelete={deleteItem}
        DND={DND}
        onCreateFile={createFile}
        onCreateFolder={createFolder}
      />
    </div>
  );
}

export default FileExplorer;
