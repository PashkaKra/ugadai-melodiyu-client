import {useState} from 'react';
import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import Menu from './pages/Menu';
import Round1 from './pages/Round1';
import Round2 from './pages/Round2';
import Round3 from './pages/Round3';
import Playercard from './components/Playercard/Playercard';
import playerphoto1 from './components/Playercard/player1.jpg';
import playerphoto2 from './components/Playercard/player2.jpg';
import playerphoto3 from './components/Playercard/player3.jpg';
import './App.css';

const App = () => {
    const [pull, setPull] = useState(0);

    return (
        <div>
             <header>
                <img src={logo} alt="logo"/>
             </header>
            <div className="App">
                <Playercard img={playerphoto1} pull={pull}/>                                                        
                <Playercard img={playerphoto2} pull={pull}/>                                                        
                <Playercard img={playerphoto3} pull={pull}/>
            </div>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="/round1" element={<Round1 onChange={(coin) => setPull(coin)}/>}/>
                <Route path="/round2" element={<Round2 onChange={(coin) => setPull(coin)}/>}/>
                <Route path="/round3" element={<Round3/>}/>
            </Routes>
        </div>
    );
}

export default App;
