
function Header() {
    return (
        <div className="header">
            <div className="flex items-center gap-1">
                <img src="/paste-app-icon.png" className="w-12"/>
                <p className="font-medium text-xl">Paste 4.0</p>
            </div>

            <button className="bg-blue rounded-4xl text-white px-4 mr-4 h-8 font-medium">
                Try for free
            </button>
        </div>
    )
}

export default Header
