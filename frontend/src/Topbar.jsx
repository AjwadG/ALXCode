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
function TopBar() {
    return (
        <div className="w-full h-12 flex-container items-center bg-main border-b-2 border-slate-800 py-5 px-1">
            <img src={alxLogo} style={logoStyle} className="i-left"/>
            <input type="text" className="i-center" style={InputStyle} placeholder="Find File"/>
        </div>
    )
}

export default TopBar;