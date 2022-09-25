import {useState} from 'react';
import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import Menu from './pages/Menu';
import Round1 from './pages/Round1';
import Round2 from './pages/Round2';
import Round3 from './pages/Round3';
import Playercard from './components/Playercard/Playercard';
import './App.css';

const App = () => {
    const [pull, setPull] = useState(0);
    const PlayerName = ["Игрок1", "Игрок2", "Игрок3"];

    return (
        <div>
             <header>
                <div>
                    <Link to="/" className="HeaderLink"><img src={logo} alt="logo"/></Link>
                    <h1>Угадай мелодию</h1>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/round1" element={<Round1 onChange={(coin) => setPull(coin)}/>}/>
                <Route path="/round2" element={<Round2 onChange={(coin) => setPull(coin)}/>}/>
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
