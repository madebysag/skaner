import { Icon, Button } from "@/src/components/Utils";
import { History } from "@/src/components/History";

export const Details = ({name, imei, battery, storage, storageUnit = "GB"} : {
        name: string,
        imei: number,
        battery: number | null,
        storage: number | null,
        storageUnit: string,
    }) => {
    return <div className="details">
        <div className="color"></div>
        <div>
            <div>
                <span className="">{name}</span>
                <span><Icon name="battery_health" /> {battery}%</span>
                <span><Icon name="storage" /> {storage + storageUnit}</span>
            </div>
            <div>{imei}</div>
        </div>
    </div>
}

export const DetailsCard = ({children} : {
        children: React.ReactNode
    }) => {
    return <div className="card">
        {children}
        <div>
            <Button type="secondary" > Show Comments <Icon name="down_arrow" /></Button>
            <Button type="secondary" > <Icon name="plus" /> Add Comment</Button>
        </div>
        <History />
    </div>
}