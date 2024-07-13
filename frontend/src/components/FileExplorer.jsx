import { useState } from "react";
import Folder from "./Folder";

const initialStructure = {
  id: 1,
  name: "root",
  isFolder: true,
  children: [
    {
      id: 2,
      name: "src",
      isFolder: true,
      children: [
        {
          id: 4,
          name: "index.js",
          isFolder: false,
          content: "console.log('Hello from index!')",
        },
        {
          id: 7,
          name: "components",
          isFolder: true,
          children: [
            {
              id: 8,
              name: "FileExplorer.jsx",
              isFolder: false,
              content: "console.log('Hello from FileExplorer!')",
            },
            {
              id: 9,
              name: "Folder.jsx",
              isFolder: false,
              content: "console.log('Hello from Folder!')",
            },
          ],
        },
        {
          id: 6,
          name: "App.js",
          isFolder: false,
          content: "console.log('Hello from App!')",
        },
      ],
    },
    {
      id: 3,
      name: "public",
      isFolder: true,
      children: [
        {
          id: 5,
          name: "index.html",
          isFolder: false,
          content: "<h1>Hello World!</h1>",
        },
      ],
    },
  ],
};

initialStructure.children = initialStructure.children.map((node) => {
  node.parent = initialStructure;
  if (node.isFolder) {
    node.children = node.children.map((child) => {
      child.parent = node;
      if (child.isFolder) {
        child.children = child.children.map((grandchild) => {
          grandchild.parent = child;
          if (grandchild.isFolder) {
            grandchild.children = grandchild.children.map((greatgrandchild) => {
              greatgrandchild.parent = grandchild;
              return greatgrandchild;
            });
          }
          return grandchild;
        });
      }
      return child;
    });
  }
  return node;
});

function FileExplorer({ setNavFiles }) {
  const [structure, setStructure] = useState(initialStructure);
  const [fileInEdit, setFileInEdit] = useState(null);

  const [draggedFile, setDraggedFile] = useState(null);

  function checkTree(nodeToCheck, targetParent) {
    if (!targetParent.isFolder) return true;
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
    static handleFileEdit(newName) {
      if (fileInEdit) {
        fileInEdit.name = newName;
        setStructure(structure);
        setFileInEdit(null);
        setNavFiles(null, null, true);
      }
    }

    static handleDoubleClick(file) {
      setFileInEdit(file);
    }
    static handleDragStart(file) {
      setDraggedFile(file);
    }

    static handleDrop(targetFolder) {
      if (
        draggedFile &&
        targetFolder !== draggedFile.parent &&
        targetFolder.isFolder &&
        checkTree(targetFolder, draggedFile)
      ) {
        draggedFile.parent.children = draggedFile.parent.children.filter(
          (child) => child.id !== draggedFile.id
        );
        draggedFile.parent = targetFolder;
        targetFolder.children.push(draggedFile);
        setStructure(structure);
        setDraggedFile(null);
      }
    }

    static handleDragOver(e) {
      e.preventDefault();
    }
  }

  const deleteFile = (file) => {
    const deleteRecursively = (folder) => {
      if (!folder.isFolder) return;

      folder.children = folder.children.filter((child) => child.id !== file.id);
      folder.children.forEach(deleteRecursively);
    };

    const newStructure = { ...structure };
    deleteRecursively(newStructure);
    setStructure(newStructure);
  };

const createFile = (folderId) => {
    const newFile = {
      id: Date.now(),
      name: `New File`,
      isFolder: false,
      content: "",
    };

    const addFileToFolder = (folder, folderId) => {
      if (folder.id === folderId) {
        return {
          ...folder,
          children: [...folder.children, newFile],
        };
      }
      return {
        ...folder,
        children: folder.children.map((child) => {
          if (child.isFolder) {
            return addFileToFolder(child, folderId);
          }
          return child;
        }),
      };
    };

    setStructure((prevStructure) => addFileToFolder(prevStructure, folderId));
  };


  const deleteItem = (item) => {
    const deleteRecursively = (folder) => {
      if (!folder.isFolder) return;

      folder.children = folder.children.filter((child) => child.id !== item.id);
      folder.children.forEach(deleteRecursively);
    };

    const newStructure = { ...structure };
    deleteRecursively(newStructure);
    setStructure(newStructure);
    setNavFiles(item);
  };

  return (
    <div className="pt-4">
      <Folder
        folder={structure}
        setNavFiles={setNavFiles}
        onDelete={deleteItem}
        DND={DND}
        onCreateFile={createFile}
      />
    </div>
  );
}

export default FileExplorer;
