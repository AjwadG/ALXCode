import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaFile } from 'react-icons/fa';
import File from './File';
import "./Explorer.css";

function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="pl-5 p-1 flex items-center cursor-pointer text-slate-500 text-sm bg-transform" onClick={toggleOpen}>
        {isOpen ? <FaFolderOpen className='text-sm mr-1 text-amber-300' /> : <FaFolder className='mr-1 text-amber-300' />} {folder.name}
      </div>
      {isOpen && (
        <div className="folder-contents">
          {folder.children.map((item) =>
            item.isFolder ? (
              <Folder key={item.name} folder={item} />
            ) : (
              <File key={item.name} file={item} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Folder;
