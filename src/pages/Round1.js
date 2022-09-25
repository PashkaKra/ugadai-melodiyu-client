import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import React from 'react'; 
import './Table.css';
//import round1 from '../settings'
//import Playercard from '../components/Playercard/Playercard';
import note_img from './note.svg';
import red_note_img from './rednote.svg';
import green_note_img from './greennote.svg';
//import playerphoto1 from '../components/Playercard/player1.jpg';
//import playerphoto2 from '../components/Playercard/player2.jpg';
//import playerphoto3 from '../components/Playercard/player3.jpg';
import note1 from '../sounds/round1/kat1note1.mp3';
import note2 from '../sounds/round1/kat1note2.mp3';
import note3 from '../sounds/round1/kat1note3.mp3';
import note4 from '../sounds/round1/kat1note4.mp3';
import note5 from '../sounds/round1/kat2note1.mp3';
import note6 from '../sounds/round1/kat2note2.mp3';
import note7 from '../sounds/round1/kat2note3.mp3';
import note8 from '../sounds/round1/kat2note4.mp3';
import note9 from '../sounds/round1/kat3note1.mp3';
import note10 from '../sounds/round1/kat3note2.mp3';
import note11 from '../sounds/round1/kat3note3.mp3';
import note12 from '../sounds/round1/kat3note4.mp3';
import note13 from '../sounds/round1/kat4note1.mp3';
import note14 from '../sounds/round1/kat4note2.mp3';
import note15 from '../sounds/round1/kat4note3.mp3';
import note16 from '../sounds/round1/kat4note4.mp3';


const Round1 = ({onChange}) => {
    const [state, setState] = useState(false);
    const [img_note, setColorNote] = useState([
        note_img, note_img, note_img, note_img,
        note_img, note_img, note_img, note_img,
        note_img, note_img, note_img, note_img,
        note_img, note_img, note_img, note_img
    ]);
    const noteRef1 = useRef();
    const noteRef2 = useRef();
    const noteRef3 = useRef();
    const noteRef4 = useRef();
    const noteRef5 = useRef();
    const noteRef6 = useRef();
    const noteRef7 = useRef();
    const noteRef8 = useRef();
    const noteRef9 = useRef();
    const noteRef10 = useRef();
    const noteRef11 = useRef();
    const noteRef12 = useRef();
    const noteRef13 = useRef();
    const noteRef14 = useRef();
    const noteRef15 = useRef();
    const noteRef16 = useRef();
    let point = [20, 25, 30, 50];
    const category = ["Музыка школьных дискотек", "Наши 2000-е", "Саундтреки из сериалов", "Мировые хиты"];

    const audplay = (ref, i, q) => {
        if(!state){            
            ref.current.play();
            setState(true);
            onChange(point[i]);
            setColorNote([...img_note.slice(0, q), green_note_img, ...img_note.slice(q + 1)]);
        }
        else{
            ref.current.pause();
            setState(false);
            onChange(0);
            setColorNote([...img_note.slice(0, q), red_note_img, ...img_note.slice(q + 1)]);
        }
    }

    return(
        <div className="NoteTable">
            <Link to="/">playerphoto1</Link>
            <Link to="/round2">next round</Link>
            <div>
                <h2 className="category">{category[0]}</h2>
                <img src={img_note[0]} onClick={() => audplay(noteRef1, 0, 0)} alt="note" width="50px" height="100px"/>
                <img src={img_note[1]} onClick={() => audplay(noteRef2, 1, 1)} alt="note" width="50px" height="100px"/>
                <img src={img_note[2]} onClick={() => audplay(noteRef3, 2, 2)} alt="note" width="50px" height="100px"/>
                <img src={img_note[3]} onClick={() => audplay(noteRef4, 3, 3)} alt="note" width="50px" height="100px"/>
            </div>

            <div>
                <h2 className="category">{category[1]}</h2>
                <img src={img_note[4]} onClick={() => audplay(noteRef5, 0, 4)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[5]} onClick={() => audplay(noteRef6, 1, 5)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[6]} onClick={() => audplay(noteRef7, 2, 6)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[7]} onClick={() => audplay(noteRef8, 3, 7)} alt="note" width="50px" height="100px"/>                
            </div>

            <div>
                <h2 className="category">{category[2]}</h2>
                <img src={img_note[8]} onClick={() => audplay(noteRef9, 0, 8)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[9]} onClick={() => audplay(noteRef10, 1, 9)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[10]} onClick={() => audplay(noteRef11, 2, 10)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[11]} onClick={() => audplay(noteRef12, 3, 11)} alt="note" width="50px" height="100px"/>                
            </div>                                                                                                               
                                                                                                                                 
            <div>
                <h2 className="category">{category[3]}</h2>
                <img src={img_note[12]} onClick={() => audplay(noteRef13, 0, 12)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[13]} onClick={() => audplay(noteRef14, 1, 13)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[14]} onClick={() => audplay(noteRef15, 2, 14)} alt="note" width="50px" height="100px"/>                
                <img src={img_note[15]} onClick={() => audplay(noteRef16, 3, 15)} alt="note" width="50px" height="100px"/>                
            </div> 

            <audio ref={noteRef1} src={note1}/>
            <audio ref={noteRef2} src={note2}/>
            <audio ref={noteRef3} src={note3}/>                                                                                  
            <audio ref={noteRef4} src={note4}/>
            <audio ref={noteRef5} src={note5}/>                                                                                  
            <audio ref={noteRef6} src={note6}/>                                                                                  
            <audio ref={noteRef7} src={note7}/>                                                                                  
            <audio ref={noteRef8} src={note8}/>
            <audio ref={noteRef9} src={note9}/>                                                                                  
            <audio ref={noteRef10} src={note10}/>                                                                                  
            <audio ref={noteRef11} src={note11}/>                                                                                  
            <audio ref={noteRef12} src={note12}/>                                                                                  
            <audio ref={noteRef13} src={note13}/>                                                                                  
            <audio ref={noteRef14} src={note14}/>                                                                                  
            <audio ref={noteRef15} src={note15}/>                                                                                  
            <audio ref={noteRef16} src={note16}/>
        </div>
    );
}

export default Round1;
