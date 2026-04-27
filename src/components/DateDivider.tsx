import { HorizontalDivider } from "@/src/components/Utils"

export const DateDivider = ({ date } : {date: string}) => {
    return <div className="w-full flex items-baseline justify-stretch">
        <div className="px-4 w-1/2">{ date }</div>
        <HorizontalDivider />
    </div>
}