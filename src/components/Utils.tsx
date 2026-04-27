import Image from "next/image"

export const Icon = (
    { name, extension, height = 24 } : { name : string, extension: string, height? : number }
) => {
    // return <img src={`/images/` + name} alt={name + " icon"} loading="lazy" />
    return <Image 
    src={`/images/${name}.${extension}`} 
    alt={name + " icon"} 
    width={0}
    height={0}
    style={{width: "auto", height: `${height}px`}}
    />
}

export const Button = (
    { children, type = "secondary" } : { 
        children : React.ReactNode,
        type? : string
    }) => {
    const otherClasses = type == "secondary" ? "underline underline-offset-2" : "bg-white rounded-xl border border-[hsl(0,0,75)]"

    return  <button className={`flex items-center decoration-[hsl(0,0,75)] hover:opacity-85 cursor-pointer px-6 py-2 ${otherClasses}`}>
        { children }
    </button>
}

export const HorizontalDivider = () => {
    return <div className="py-1 w-full"><hr className="border border-[hsl(0,0,75)] w-full" /></div>
}