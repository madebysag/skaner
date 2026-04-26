import { NavMenu, NavLink } from "@/src/components/Nav"
import { Icon } from "@/src/components/Utils"
import { SearchMenu } from "@/src/components/SearchMenu"

export const Header = ({ username, storeName} : {username: string, storeName: string}) => {
    return <header className="">
        <div className="border-b border-b-[hsl(0,0,75)] px-10 flex items-center justify-between">
            <div className="py-4 flex items-baseline">
                <h3 className="text-lg font-bold px-4 tracking-widest">
                    S K A N E R
                </h3>
                <span className="px-4">
                     ● &nbsp; { username } at <span className="text-[hsl(0,0,25)]">{storeName}</span>
                </span>

            </div>

            <NavMenu>
                <NavLink> <Icon name="settings" extension="svg" /> &nbsp; Settings </NavLink>
                <NavLink> ● &nbsp; Logout</NavLink>
            </NavMenu>
        </div>

        <SearchMenu />

    </header>
}