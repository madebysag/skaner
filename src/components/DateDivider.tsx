export const HorizontalDivider = () => {
    return <hr className="" />
}

export const DateDivider = ({ date } : {date: string}) => {
    return <div className="">
        { date }
        <HorizontalDivider />
    </div>
}