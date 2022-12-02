import"../App.css"
import EmojiItem from "./Emojiitem";
export default function EmojiList(props){
    const data=props.data;
    console.log(data)
    
    return(
        <div>
            {
                data.map(n=>{
                    return(
                       <EmojiItem symbol={n.symbol} title={n.title}/>
                    )
                })
            }
                  <div className="componenet-emoji-results"></div>
        </div>
    )
}