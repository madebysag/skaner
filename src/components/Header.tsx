import { NavMenuMobile, NavMenu } from "@/src/components/Nav"
import { SearchMenu } from "@/src/components/SearchMenu"

export const Header = ({ username, storeName} : {username: string, storeName: string}) => {
    return <header className="sticky top-0 bg-[hsl(0,0,97)]">
        <div className="border-b border-b-[hsl(0,0,75)] px-10 flex items-center justify-between">
            <div className="py-4 flex md:flex-row flex-col items-baseline ">
                <h3 className="text-lg font-bold px-4 tracking-widest">
                    S K A N E R
                </h3>
                <span className="px-4">
                     ● &nbsp; { username } at <span className="text-[hsl(0,0,25)]">{storeName}</span>
                </span>

            </div>

            <NavMenu />

            <NavMenuMobile  />
        </div>

        <SearchMenu />

    </header>
}