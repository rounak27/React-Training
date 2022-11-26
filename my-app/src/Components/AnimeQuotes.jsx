import { useEffect } from "react"

import React, { useState} from "react";

export default function AnimeQuotes(){
    const[data,setData]=useState(null);
    useEffect(()=>{
        fetch("http://animechan.vercel.app/api/random").then(function(response){
           return(response.json())

        }).then(function(data){console.log(data)});
        {setData(data)}
    })
    return (
        <div>
            <h1>Anime Quotes</h1>
           {data}
        </div>
    )
}