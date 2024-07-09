import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaTrash } from "react-icons/fa";
import File from "./File";
import "./Explorer.css";

function Folder({ folder, setNavFiles, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(folder);
  };

  return (
    <div>
      <div
        className="pl-5 p-1 flex items-center cursor-pointer text-slate-500 text-sm bg-transform"
        onClick={toggleOpen}
      >
        {isOpen ? (
          <FaFolderOpen className="text-sm mr-1 text-amber-300" />
        ) : (
          <FaFolder className="mr-1 text-amber-300" />
        )}{" "}
        {folder.name}
        <span className="ml-auto">
          <FaTrash className="text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100" onClick={handleDelete}  />
        </span>
      </div>
      {isOpen && (
        <div className="folder-contents">
          {folder.children.map((item) =>
            item.isFolder ? (
              <Folder key={item.name} folder={item} setNavFiles={setNavFiles} onDelete={onDelete} />
            ) : (
              <File key={item.name} file={item} setNavFiles={setNavFiles} onDelete={onDelete} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Folder;
