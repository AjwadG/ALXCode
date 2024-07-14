function Footer({ handleToggleTerminal, isTerminalVisible, handleToggleOutput, isOutputVisible }) {
    return (
        <div className="h-6 absolute bottom-0 left-0 w-full bg-sky-500 text-white">
            <ul className="flex items-center h-full gap-6 text-xs px-2 text-black">
                <li className="cursor-pointer" onClick={handleToggleTerminal} >{isTerminalVisible ? 'Hide Terminal' : 'Show Terminal'}</li>

                <li className="cursor-pointer" onClick={handleToggleOutput} >{isOutputVisible ? 'Hide Output' : 'Show Output'}</li>
            </ul>
        </div>
    )
}

export default Footer;