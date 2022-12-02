import"../App.css"
export default function EmojiItem(props){
           const code=props.symbol.codePointAt(0).toString(16);
           const srcImage=`//cdn.jsdelivr.net/emojione/assets/png/${code}.png`
           const title=props.title
            return(
                <>
                  < div
      className = "component-emoji-result-row copy-to-clipboard"
      >
        <img  src={srcImage}/>
        <span className="title">{title}</span>
        <span className="info">Click to copy emoji</span>
      </ div>
                </>
            )

}