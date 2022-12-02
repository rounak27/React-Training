import { useState } from "react"
import EmojiList from "./Components/Emojilist";
import Header from "./Components/Header";
import SearchBar from "./Components/Searchbaar";
import filterEmoji from "./filterEmoji";
export default function App(){
  const initialEmojis=filterEmoji('',20);
  const [filteredEmojis,setFilteredEmojis]=useState(initialEmojis)
  return (
    
  <div>
  <Header/>
  <SearchBar setEmoji={setFilteredEmojis}/>
  <EmojiList data={filteredEmojis}/>
  </div>
  );
}