//import logo from './logo.svg';
import {useEffect,useState} from 'react'
import './App.css';
//import Game from "./component/game.jsx";
//import Square from "./component/square.jsx";
function App() {
  const [notification,setNotification]=useState(0);
  useEffect(()=>{
    document.title="Rounak"
    if(notification>0)
    {
      document.title="You have "+notification+" notification"
    }
    
  });

  
  return (
    < div className ='App'>
      <button className='but' onClick={()=>{setNotification(notification+1)}}>Send Notification</button>
    </div>
  )
}
export default App;
