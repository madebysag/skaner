import { BlurBackground, Icon } from "@/src/components/Utils"
import style from "./css/Nav.module.css"

export const NavLink = ({ children, addClass = "" } : {children: React.ReactNode, addClass? : string}) => {
    return <a className={`flex px-4 hover:opacity-85 cursor-pointer ${addClass}`}>
        { children }
    </a>
}

export const NavMenu = () => {
    return <nav className="md:flex hidden">
        <NavLink> <Icon name="settings" extension="svg" /> &nbsp; Settings </NavLink>
        <NavLink> ● &nbsp; Logout</NavLink>
    </nav>
}

export const NavMenuMobile = ({active = false} : {active? : boolean}) => {
    return <nav 
    className={`md:hidden flex bg-white cursor-pointer hover:opacity-80 ${style.nav_mobile}`}
    style={{

    }}
    >
        <Icon name="hamburger" height={12} extension="svg" />
        <BlurBackground active={active}/>

        <div className={`flex flex-col items-center bg-white ${style.nav_mobile_menu} ${active ? style.nav_mobile_menu_active : ""}`}>
            
            <button className="p-2 hover:opacity-80"><Icon name="cancel" height={24} extension="svg" /></button>
            <NavLink addClass="flex items-center py-2"> <Icon name="settings" extension="svg" height={24} /> &nbsp; Settings </NavLink>
            <NavLink addClass="flex items-center py-2"> <span>● &nbsp;</span> Logout</NavLink>
        </div>
    </nav>
}
