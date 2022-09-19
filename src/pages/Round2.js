import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import React from 'react'; 
import note_img from './note.svg';
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


const Round2 = ({onChange}) => {
    const [state, setState] = useState(false);
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
    let point = [25, 50, 75, 100];
    const category = ["Музыка школьных дискотек", "Наши 2000-е", "Саундтреки из сериалов", "Мировые хиты"];
    
    const audplay = (ref, i) => {
        if(!state){            
            ref.current.play();
            setState(true);
            onChange(point[i]);
        }
        else{
            ref.current.pause();
            setState(false);
            onChange(0);
        }
    }

    return(
        <div>
            <Link to="/">playerphoto1</Link>
            <Link to="/round2">next round</Link>
            <div>
                {category[0]}
                <img src={note_img} onClick={() => audplay(noteRef1, 0)} alt="note" width="50px" height="100px"/>
                <img src={note_img} onClick={() => audplay(noteRef2, 1)} alt="note" width="50px" height="100px"/>
                <img src={note_img} onClick={() => audplay(noteRef3, 2)} alt="note" width="50px" height="100px"/>
                <img src={note_img} onClick={() => audplay(noteRef4, 3)} alt="note" width="50px" height="100px"/>
            </div>

            <div>
                {category[1]}
                <img src={note_img} onClick={() => audplay(noteRef5, 0)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef6, 1)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef7, 2)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef8, 3)} alt="note" width="50px" height="100px"/>                
            </div>

            <div>
                {category[2]}
                <img src={note_img} onClick={() => audplay(noteRef9, 0)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef10, 1)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef11, 2)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef12, 3)} alt="note" width="50px" height="100px"/>                
            </div>                                                                                                               
                                                                                                                                 
            <div>
                {category[3]}
                <img src={note_img} onClick={() => audplay(noteRef13, 0)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef14, 1)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef15, 2)} alt="note" width="50px" height="100px"/>                
                <img src={note_img} onClick={() => audplay(noteRef16, 3)} alt="note" width="50px" height="100px"/>                
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

export default Round2;
