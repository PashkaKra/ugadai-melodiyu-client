import {useState} from 'react';
import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import Menu from './pages/Menu';
import Round1 from './pages/Round1';
import Round3 from './pages/Round3';
import Round4 from './pages/Round4';
import Playercard from './components/Playercard/Playercard';
import { PLAYER_NAMES } from './preferences/PrefCom';
import './App.css';

const App = () => {
    const [pull, setPull] = useState(0);
    const point1 = [20, 25, 30, 50, 0]; 
    const point2 = [25, 50, 75, 100, 0];
    const bool = true;
    return (
        <div className="gridbox">
             <header className="head">
                    <Link to="/" className="HeaderLink"><img src={logo} alt="logo"/></Link>
                    <div className="title"><h1>Угадай мелодию</h1></div>
            </header>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/round1" element={<Round1 round="1" onChange={(i) => setPull(point1[i])}/>}/>
                <Route path="/round2" element={<Round1 round="2" onChange={(i) => setPull(point2[i])}/>}/>
                <Route path="/round3" element={<Round3 round="3"/>}/>
                <Route path="/round4" element={<Round4 round="4"/>}/>
            </Routes>
            {(bool &&
            <div className="Playercard">                                                            
                <Playercard pull={pull} PlayerName={PLAYER_NAMES.PLAYER_1}/>                                        
                <Playercard pull={pull} PlayerName={PLAYER_NAMES.PLAYER_2}/>                                        
                <Playercard pull={pull} PlayerName={PLAYER_NAMES.PLAYER_3}/>                                      
            </div>)}
        </div>
    );
}

export default App;
