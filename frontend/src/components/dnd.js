import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "./constants";

export const DND = (
  fileInEdit,
  setFileInEdit,
  fileInCreation,
  setFileInCreation,
  draggedFile,
  setDraggedFile,
  setStructure,
  structure,
  setNavFiles
) => {
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

  return {
    getFileCreation() {
      if (fileInCreation) {
        return fileInCreation;
      }
      return {};
    },
    newFileCreation(file, isDir) {
      setFileInCreation({ file, isDir });
    },

    async handleFileCreation(newName) {
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
            match: true,
          });
          if (response.data.succeed) {
            parent.childs.push({
              id: Date.now(),
              name: newName,
              path: parent.path + "/" + newName,
              dir: isDir,
              parent: parent,
              childs: [],
              match: true,
            });
          } else {
            toast.error(response.data.output);
          }
        } catch (error) {
          toast.error(err.response.data.error);
        }
      }
      setStructure(structure);
      setFileInCreation(null);
    },
    getFileInEdit() {
      return fileInEdit;
    },
    async handleFileEdit(newName) {
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
            this.fixChilds(fileInEdit);
          } else {
            toast.error(response.data.output);
          }
        } catch (error) {
          toast.error(err.response.data.error);
        }
        setNavFiles(null, null, true);
      }
      setFileInEdit(null);
    },

    handleDoubleClick(file) {
      setFileInEdit(file);
    },
    handleDragStart(file) {
      setDraggedFile(file);
    },

    fixChilds(parent) {
      const parentPath = parent.path;
      parent.childs = parent.childs.map((child) => {
        child.path = parentPath + "/" + child.name;
        if (child.dir) {
          this.fixChilds(child);
        }
        return child;
      });
    },

    async handleDrop(targetFolder) {
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
            this.fixChilds(draggedFile);
            targetFolder.childs.push(draggedFile);
            setStructure(structure);
          } else {
            toast.error(response.data.output);
          }
        } catch (error) {
          toast.error(err.response.data.error);
        }
        setDraggedFile(null);
      }
    },

    handleDragOver(e) {
      e.preventDefault();
    },
  };
};
