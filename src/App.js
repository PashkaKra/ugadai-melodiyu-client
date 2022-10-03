import {useState} from 'react';
import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import Menu from './pages/Menu';
import Round1 from './pages/Round1';
//import Round2 from './pages/Round2';
import Round3 from './pages/Round3';
import Playercard from './components/Playercard/Playercard';
import './App.css';

import r1_note1 from './sounds/round1/kat1note1.mp3';
import r1_note2 from './sounds/round1/kat1note2.mp3';
import r1_note3 from './sounds/round1/kat1note3.mp3';                                                                                          
import r1_note4 from './sounds/round1/kat1note4.mp3';
import r1_note5 from './sounds/round1/kat2note1.mp3';
import r1_note6 from './sounds/round1/kat2note2.mp3';
import r1_note7 from './sounds/round1/kat2note3.mp3';
import r1_note8 from './sounds/round1/kat2note4.mp3';
import r1_note9 from './sounds/round1/kat3note1.mp3';
import r1_note10 from './sounds/round1/kat3note2.mp3';
import r1_note11 from './sounds/round1/kat3note3.mp3';
import r1_note12 from './sounds/round1/kat3note4.mp3';
import r1_note13 from './sounds/round1/kat4note1.mp3';
import r1_note14 from './sounds/round1/kat4note2.mp3';
import r1_note15 from './sounds/round1/kat4note3.mp3';
import r1_note16 from './sounds/round1/kat4note4.mp3';

import r2_note1 from './sounds/round2/kat1note1.mp3';
import r2_note2 from './sounds/round2/kat1note2.mp3';
import r2_note3 from './sounds/round2/kat1note3.mp3';
import r2_note4 from './sounds/round2/kat1note4.mp3';
import r2_note5 from './sounds/round2/kat2note1.mp3';
import r2_note6 from './sounds/round2/kat2note2.mp3';
import r2_note7 from './sounds/round2/kat2note3.mp3';
import r2_note8 from './sounds/round2/kat2note4.mp3';
import r2_note9 from './sounds/round2/kat3note1.mp3';
import r2_note10 from './sounds/round2/kat3note2.mp3';
import r2_note11 from './sounds/round2/kat3note3.mp3';
import r2_note12 from './sounds/round2/kat3note4.mp3';
import r2_note13 from './sounds/round2/kat4note1.mp3';
import r2_note14 from './sounds/round2/kat4note2.mp3';
import r2_note15 from './sounds/round2/kat4note3.mp3';
import r2_note16 from './sounds/round2/kat4note4.mp3';


const App = () => {
    const [pull, setPull] = useState(0);
    const PlayerName = ["Игрок1", "Игрок2", "Игрок3"];
    const point1 = [20, 25, 30, 50, 0]; 
    const point2 = [25, 50, 75, 100, 0];
    const category1 = ["Музыка школьных дискотек", "Наши 2000-е", "Саундтреки из сериалов", "Мировые хиты"];
    const category2 = ["Зарубежный поп", "Зарубежный рок", "Русский поп", "Русский рок"];
    const notesRound1 = [r1_note1, r1_note2, r1_note3, r1_note4, r1_note5, r1_note6, r1_note7, r1_note8,
        r1_note9, r1_note10, r1_note11, r1_note12, r1_note13, r1_note14, r1_note15, r1_note16];
    const notesRound2 = [r2_note1, r2_note2, r2_note3, r2_note4, r2_note5, r2_note6, r2_note7, r2_note8,
        r2_note9, r2_note10, r2_note11, r2_note12, r2_note13, r2_note14, r2_note15, r2_note16];
    return (
        <div>
             <header>
                <div>
                    <Link to="/" className="HeaderLink"><img src={logo} alt="logo"/></Link>
                    <div className="title"><h1>Угадай мелодию</h1></div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/round1" element={<Round1 round="1" note={notesRound1} category={category1} onChange={(i) => setPull(point1[i])}/>}/>
                <Route path="/round2" element={<Round1 round="2" note={notesRound2} category={category2} onChange={(i) => setPull(point2[i])}/>}/>
                <Route path="/round3" element={<Round3/>}/>
            </Routes>
            <div className="Playercard">                                                            
                <Playercard pull={pull} PlayerName={PlayerName[0]}/>                                        
                <Playercard pull={pull} PlayerName={PlayerName[1]}/>                                        
                <Playercard pull={pull} PlayerName={PlayerName[2]}/>                                        
            </div>
        </div>
    );
}

export default App;
