import { Icon, Button } from "@/src/components/Utils";
import style from "./css/SearchMenu.module.css";

export const SearchMenu = () => {
    
    return <div 
        className={`max-w-md bg-[hsl(0,0,97)s] flex items-center justify-between mx-auto py-2 ${style.fading_shadow}`}
        >
        <Button>Search and Filter</Button>
        <Button type="primary" >
            <Icon name="plus" extension="svg" height={18} />
            &nbsp;
            Add Record
        </Button>

    </div>
}