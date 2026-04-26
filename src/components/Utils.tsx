import Image from "next/image"

export const Icon = (
    { name, extension } : { name : string, extension: string }
) => {
    // return <img src={`/images/` + name} alt={name + " icon"} loading="lazy" />
    return <Image 
    src={`/images/${name}.${extension}`} 
    alt={name + " icon"} 
    width={24}
    height={24}
    />
}

export const Button = (
    { children, type } : { 
        children : React.ReactNode,
        type : string
     }
) => {
    return <button className={type}>
        { children }
    </button>
}