
export const NavMenu = ({ children } : {children: React.ReactNode}) => {
    return <nav className="flex">
        { children }
    </nav>
}

export const NavLink = ({ children } : {children: React.ReactNode}) => {
    return <a className="flex px-4 hover:opacity-85 cursor-pointer">
        { children }
    </a>
}