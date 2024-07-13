import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaTrash } from "react-icons/fa";
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

  const dragFunctionality = folder.parent
    ? {
        draggable: true,
        onDragStart: () => DND.handleDragStart(folder),
      }
    : { draggable: false };

  return (
    <div>
      <div
        className="pl-5 p-1 flex items-center cursor-pointer text-slate-500 text-sm bg-transform"
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
        <span className="ml-auto">
          <FaTrash
            className="text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100"
            onClick={handleDelete}
          />
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
              />
            ) : (
              <File
                key={item.id}
                file={item}
                setNavFiles={setNavFiles}
                onDelete={onDelete}
                DND={DND}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Folder;
