import style from "./css/History.module.css"

export const History = () => {
    return <div className="pt-8 pb-4 px-4">
        <Comment 
        date="2nd of November, 2026"
        author="James"
        comment="What is going onnnn"
        role="owner"
        />
        <Comment 
        date="2nd of November, 2026"
        author="James"
        comment="What is going onnnn"
        role="owner"
        />
        <Comment 
        date="2nd of November, 2026"
        author="James"
        comment="What is going onnnn"
        role="owner"
        />
        <Comment 
        date="2nd of November, 2026 - 10:53pm"
        author="James"
        comment="What is going onnnn loremzjhgdccccccccccccccccvkzncccd dsnbfc f sjfbdf sdfb;uesf fuahfh sufbf rebshfb ehrjbfbshf wrh rh rhbwlr lwbflerygfer wrgujf gpo tpo dschoo; safj IANMS Iman a man djek"
        role="owner"
        />
    </div>
}

export const Comment = ({date, author, comment, role = null} : {date: string, author : string, comment : string, role? : string | null}) => {
    return <div className={`${style.comment}`}>
        <div>
            {date} &nbsp; <span className="text-[hsl(0,0,75)]">●</span> &nbsp; by {author} {role ? `(${role})` : "" }
        </div>
        <div className="text-[hsl(0,0,25)]"> {comment} </div>
    </div>
}