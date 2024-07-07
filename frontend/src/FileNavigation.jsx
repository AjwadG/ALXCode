import { FaFile } from "react-icons/fa";
function FileNavigation() {
    return (
    <div className="w-full flex h-8 bg-second">
            <ul className="w-full flex items-center">
                <li className="flex items-center justify-between text-gray-400 bg-zinc-800 h-full p-3 min-w-28"><span className="flex items-center  text-sm"><FaFile className="text-yellow-300 mr-1"/> style.css</span> <span className="cursor-pointer">x</span></li>
                <li className="active flex items-center justify-between text-gray-400 bg-zinc-900 h-full p-3 min-w-28"><span className="flex items-center  text-sm"><FaFile className="text-yellow-300 mr-1"/> App.js</span> <span className="cursor-pointer">x</span></li>
            </ul>

        </div>
    );
}

export default FileNavigation;