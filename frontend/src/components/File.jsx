import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";

const FileStyle = {
  fontSize: "12px",
};

function File({ file, setNavFiles, onDelete, DND }) {
  const handleDelete = (e) => {
    console.log(file);
    e.stopPropagation();
    onDelete(file);
  };

  return (
    <div
      className="file p-1 text-slate-500 cursor-pointer flex items-center bg-transform pl-10"
      style={FileStyle}
      draggable={true}
      onDoubleClick={() => DND.handleDoubleClick(file)}
      onDragStart={() => DND.handleDragStart(file)}
      onDrop={() => DND.handleDrop(file)}
      onDragOver={DND.handleDragOver}
      onClick={() => {
        setNavFiles(file, true);
      }}
    >
      <FaFile className="text-sky-500 mr-1 my-1" />
      {DND.getFileInEdit() === file && (
        <input
          type="text"
          defaultValue={file.name}
          autoFocus
          onBlur={(e) => DND.handleFileEdit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              DND.handleFileEdit(e.target.value);
            }
          }}
        />
      )}

      {DND.getFileInEdit() !== file && file.name}
      <span className="ml-auto">
        <FaTrash
          className="text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100"
          onClick={handleDelete}
        />
      </span>
    </div>
  );
}

export default File;
