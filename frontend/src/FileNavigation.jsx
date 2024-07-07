import { FaFile } from "react-icons/fa";
import NavFile from "./components/NavFile";

function FileNavigation({ navFiles, setNavFiles, activeFile }) {
  return (
    <div className="w-full flex h-8 bg-second">
      <ul className="w-full flex items-center">
        {navFiles.map((file) => (
          <NavFile
            key={file.id}
            file={file}
            setNavFiles={setNavFiles}
            activeFile={activeFile === file}
          />
        ))}
      </ul>
    </div>
  );
}

export default FileNavigation;
