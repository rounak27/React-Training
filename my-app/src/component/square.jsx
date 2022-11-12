import { useState } from "react";

export default function Square(props){
 const [value,setValue]=useState(null);
  
    return( <button className="square" onClick={props.onClick}>
    {props.value}
  </button>);
}