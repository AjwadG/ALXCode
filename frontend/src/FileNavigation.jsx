import { FaFile } from "react-icons/fa";
import NavFile from "./components/NavFile";

const CustomNavStyle = {
  width: "100%",
};
function FileNavigation({ navFiles, setNavFiles, activeFile }) {
  return (
    <div className="w-full flex h-10 bg-second">
      <ul
        className="flex items-center overflow-x-auto overflow-y-hidden"
        style={CustomNavStyle}
      >
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
