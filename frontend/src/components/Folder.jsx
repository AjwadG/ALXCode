import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaTrash, FaPlus } from "react-icons/fa";
import { VscNewFile, VscNewFolder } from "react-icons/vsc";
import File from "./File";
import "./Explorer.css";

function Folder({ folder, setNavFiles, onDelete, DND, onCreateFile, onCreateFolder }) {
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
    onCreateFile(folder.id);
  };

  const handleCreateFolder = (e) => {
    e.stopPropagation();
    onCreateFolder(folder.id);
  }

  const dragFunctionality = folder.parent
    ? {
        draggable: true,
        onDragStart: () => DND.handleDragStart(folder),
      }
    : { draggable: false };

  return (
    <div>
      <div
        className="pl-5 p-1 flex items-center gap-2 cursor-pointer text-slate-500 text-sm bg-transform"
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
        {DND.getFileInEdit() === folder && (
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
        {DND.getFileInEdit() !== folder && folder.name}
        <span className="ml-auto flex flex-row-reverse items-center gap-2">
          <FaTrash
            className="text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100"
            onClick={handleDelete}
          />
        <VscNewFile className="text-green-500 cursor-pointer text-xs opacity-25 hover:opacity-100" onClick={handleCreateFile}/>
        <VscNewFolder className="text-blue-500 cursor-pointer text-xs opacity-25 hover:opacity-100" onClick={handleCreateFolder}/>
        </span>
      </div>
      {isOpen && (
        <div className="folder-contents pl-5">
          {folder.children.map((item) =>
            item.isFolder ? (
              <Folder
                key={item.id}
                folder={item}
                setNavFiles={setNavFiles}
                onDelete={onDelete}
                DND={DND}
                onCreateFile={onCreateFile}
                onCreateFolder={onCreateFolder}
              />
            ) : (
              <File
                key={item.id}
                file={item}
                setNavFiles={setNavFiles}
                onDelete={onDelete}
                DND={DND}
                onCreateFile={onCreateFile}
                onCreateFolder={onCreateFolder}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Folder;
