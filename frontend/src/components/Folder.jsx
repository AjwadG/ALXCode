import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaTrash, FaPlus } from "react-icons/fa";
import { VscNewFile, VscNewFolder } from "react-icons/vsc";
import File from "./File";
import "./Explorer.css";

function Folder({ folder, setNavFiles, onDelete, DND }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(folder);
  };

  const handleCreateFile = (e) => {
    e.stopPropagation();
    DND.newFileCreation(folder, false);
  };

  const handleCreateFolder = (e) => {
    e.stopPropagation();
    DND.newFileCreation(folder, true);
  };

  const dragFunctionality = folder.parent
    ? {
        draggable: true,
        onDragStart: () => DND.handleDragStart(folder),
      }
    : { draggable: false };

  function GetName() {
    if (DND.getFileInEdit() === folder) {
      return "";
    }
    const fileCreation = DND.getFileCreation();
    if (fileCreation.file === folder) {
      return fileCreation.isDir ? "" : "";
    }
    return folder.name;
  }

  return (
    <div>
      <div
        className="pl-5 p-1 flex items-center gap-2 cursor-pointer text-slate-500 text-sm bg-transform w-full"
        onClick={() => DND.getFileInEdit() !== folder && toggleOpen()}
        {...dragFunctionality}
        onDoubleClick={() => DND.handleDoubleClick(folder)}
        onDrop={() => DND.handleDrop(folder)}
        onDragOver={DND.handleDragOver}
      >
        {isOpen ? (
          <FaFolderOpen className="text-sm mr-1 text-amber-300" />
        ) : (
          <FaFolder className="mr-1 text-amber-300" />
        )}{" "}
        {DND.getFileInEdit() === folder && !DND.getFileCreation().file && (
          <input
            className="border-none outline-none bg-main-transparent text-slate-500"
            type="text"
            defaultValue={folder.name}
            autoFocus
            onBlur={(e) => DND.handleFileEdit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                DND.handleFileEdit(e.target.value);
              }
            }}
          />
        )}
        {DND.getFileInEdit() !== folder && GetName()}
        {DND.getFileCreation().file === folder && (
          <input
            className="border-none outline-none bg-main-transparent text-slate-500"
            type="text"
            autoFocus
            onBlur={(e) => DND.handleFileCreation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                DND.handleFileCreation(e.target.value);
              }
            }}
          />
        )}
        <span className="ml-auto flex flex-row-reverse items-center gap-2">
          <FaTrash
            className="text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100"
            onClick={handleDelete}
          />
          <VscNewFile
            className="text-green-500 cursor-pointer text-xs opacity-25 hover:opacity-100"
            onClick={handleCreateFile}
          />
          <VscNewFolder
            className="text-blue-500 cursor-pointer text-xs opacity-25 hover:opacity-100"
            onClick={handleCreateFolder}
          />
        </span>
      </div>
      {isOpen && (
        <div className="folder-contents pl-5">
          {folder.childs.map((item) =>
            item.dir && item.match ? (
              <Folder
                key={item.id}
                folder={item}
                setNavFiles={setNavFiles}
                onDelete={onDelete}
                DND={DND}
              />
            ) : (
              item.match && (
                <File
                  key={item.id}
                  file={item}
                  setNavFiles={setNavFiles}
                  onDelete={onDelete}
                  DND={DND}
                />
              )
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Folder;
