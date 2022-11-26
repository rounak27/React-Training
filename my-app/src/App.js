//import logo from './logo.svg';
import {useEffect,useState} from 'react'
import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Weather from './Components/weather';
import AnimeQuotes from './Components/AnimeQuotes';
import Main from './Components/main';
//import Game from "./component/game.jsx";
//import Square from "./component/square.jsx";
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to ='/'>Weather</Link></li>
          <li><Link to ='/anime'>AnimeQuotes</Link></li>
        </ul>
      </nav>
      <Routes >
        <Route path="/" element={<Weather/>}>
        <Route path="/main" element={<Main />}/>
        </Route>
        <Route path="/anime" element={<AnimeQuotes/>}/>
      </Routes>
    </div>
  )
}
export default App;
