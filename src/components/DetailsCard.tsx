import { Icon, Button } from "@/src/components/Utils";
import { History } from "@/src/components/History";

export const Details = ({name, imei, battery, storage, storageUnit = "GB", color = "#ffffff"} : {
        name: string,
        imei: number,
        battery: number | null,
        storage: number | null,
        storageUnit?: string,
        color?: string
    }) => {
    return <div className="flex">
        <div 
        className="border border-[hsl(0,0,75)] rounded-lg"
        style={{
            width: "30px",
            height: "56px",
            border: "1px solid hsl(0,0,75)",
            backgroundColor: color
        }}
        ></div>
        <div className="px-2">
            <div className="flex items-center">
                <span className="text-sm px-1.5 text-[hsl(0,0,25)]" >{name}</span> <span className="text-[hsl(0,0,75)]">●</span>
                <span className="text-sm px-1.5 flex items-center"><Icon name="battery" extension="svg" /> &nbsp; {battery}%</span> <span className="text-[hsl(0,0,75)]">●</span>
                <span className="text-sm px-1.5 flex items-center"><Icon name="storage" extension="svg" /> &nbsp; {storage + " " + storageUnit}</span>
            </div>
            <div className="text-lg">{imei}</div>
        </div>
    </div>
}

export const DetailsCard = ({children} : {
        children: React.ReactNode
    }) => {
    return <div className="w-full rounded-4xl bg-white border border-[hsl(0,0,75)] p-4 my-4">

        {children}
        
        <div className="flex items-baseline justify-between w-full">
            <Button type="secondary" > Show Comments &nbsp; <Icon height={8} name="down_caret" extension="svg" /></Button>
            <Button type="secondary" > <Icon height={18} name="plus" extension="svg" /> &nbsp; Add Comment</Button>
        </div>
        
        <History />
        
    </div>
}