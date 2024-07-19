import { useState } from "react";
import Folder from "./Folder";
import { DND } from "./dnd";
import { BASE_URL, NOT_FOUND } from "./constants";
import { deleteItem } from "./api";

function FileExplorer({ setNavFiles, structure, setStructure }) {
  const [fileInEdit, setFileInEdit] = useState(null);
  const [fileInCreation, setFileInCreation] = useState(null);
  const [draggedFile, setDraggedFile] = useState(null);

  return (
    <div className="pt-4">
      <Folder
        folder={structure}
        setNavFiles={setNavFiles}
        onDelete={(item) =>
          deleteItem(item, structure, setStructure, setNavFiles)
        }
        DND={DND(
          fileInEdit,
          setFileInEdit,
          fileInCreation,
          setFileInCreation,
          draggedFile,
          setDraggedFile,
          setStructure,
          structure,
          setNavFiles
        )}
      />
    </div>
  );
}

export default FileExplorer;
