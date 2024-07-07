import React from "react";
import { FaFile } from "react-icons/fa";

const FileStyle = {
  fontSize: "12px",
};

function File({ file, setNavFiles }) {
  return (
    <div
      className="file p-1 text-slate-500 cursor-pointer flex items-center bg-transform pl-10"
      style={FileStyle}
      onClick={() => {
        setNavFiles(file, true);
      }}
    >
      <FaFile className="text-sky-500 mr-1 my-1" /> {file.name}
    </div>
  );
}

export default File;
