import React from "react";
import { FaFile } from "react-icons/fa";

function NavFile({ file, setNavFiles, activeFile }) {
  const classNames = `flex items-center justify-between text-gray-400 h-full p-3 w-auto gap-3 ${
    activeFile ? "bg-zinc-800" : "bg-zinc-900"
  }`;

  return (
    <li className={classNames}>
      <p
        className="flex items-center cursor-pointer text-xs"
        onClick={() => setNavFiles(file, true)}
      >
        <FaFile className="text-yellow-300 mr-1" /> {file.name}
      </p>
      <p onClick={() => setNavFiles(file)} className="cursor-pointer">
        x
      </p>
    </li>
  );
}

export default NavFile;
