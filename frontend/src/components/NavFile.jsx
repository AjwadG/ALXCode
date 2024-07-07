import React from "react";
import { FaFile } from "react-icons/fa";

function NavFile({ file, setNavFiles, activeFile }) {
  const classNames =
    "flex items-center justify-between text-gray-400 h-full p-3 min-w-28 ".concat(
      activeFile ? "bg-zinc-800" : "bg-zinc-900"
    );
  return (
    <li className={classNames}>
      <span
        className="flex items-center cursor-pointer  text-sm"
        onClick={() => setNavFiles(file, true)}
      >
        <FaFile className="text-yellow-300 mr-1" /> {file.name}
      </span>{" "}
      <span onClick={() => setNavFiles(file)} className="cursor-pointer">
        x
      </span>
    </li>
  );
}

export default NavFile;
