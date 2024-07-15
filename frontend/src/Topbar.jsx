import { GiMoebiusTriangle } from "react-icons/gi";
import alxLogo from "./assets/alx-logo-white.png"


const logoStyle = {
    width: "55px",
}

const InputStyle = {
    width: "500px",
    backgroundColor: "transparent",
    border: "1px solid #4f5966",
    outline: "none",
    color: "white",
    padding: "6px",
    fontSize: "12px",
    borderRadius: "5px",

}

const RunButton = {
    color: "green",
}
function TopBar() {
    return (
        <div className="w-full h-12 flex-container items-center justify-between bg-main  py-5 px-1">
            <img src={alxLogo} style={logoStyle} className=""/>
            <input type="text" className="" style={InputStyle} placeholder="Find File"/>
            <div className="cursor-pointer"><GiMoebiusTriangle title='run' className="text-2xl mr-4 text-green-500 cursor-pointer opacity-25 hover:opacity-100" /></div>
        </div>
    )
}

export default TopBar;