import {useState, useEffect, useRef} from 'react';
import React from 'react'; 
import './Table.css';
//import round1 from '../settings'
//import Playercard from '../components/Playercard/Playercard';
import note_img from './note.svg';
import red_note_img from './rednote.svg';
import green_note_img from './greennote.svg';


const Round1 = (props) => {
    //const [state, setState] = useState([]);
    const [img_note, setColorNote] = useState([]);
    useEffect(() => {
        setColorNote([                                                                                              
            note_img, note_img, note_img, note_img,
            note_img, note_img, note_img, note_img,
            note_img, note_img, note_img, note_img,
            note_img, note_img, note_img, note_img
        ]);
        /*setState([
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false
        ]);*/
    }, [props.round]);  
    
    const noteRef = [
        useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef(),
        useRef(), useRef(), useRef(), useRef()
    ];
    /*const noteRef1 = useRef();
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
    const noteRef16 = useRef();*/

    const audplay = (i, q) => {
        //if(!state[i]){
        if(img_note[q] !== green_note_img){
            noteRef[q].current.play();
            //setState(true);
            props.onChange(i);
            setColorNote([...img_note.slice(0, q), green_note_img, ...img_note.slice(q + 1)]);
        }
        else{
            //const bufNote = img_note.filter(note => note === green_note_img);
            //bufNote.forEach(
            noteRef[q].current.pause();
            //setState(false);
            props.onChange(4);
            setColorNote([...img_note.slice(0, q), red_note_img, ...img_note.slice(q + 1)]);
        }
    }

    return(
        <div>
            <div className="nRound">
                <div className="number">{props.round}</div>
                <div>Раунд</div>
            </div>
            <div className="NoteTable">
                <div>
                    <div className="category"><h2>{props.category[0]}</h2></div>
                    <div className="notewrapper">
                        <img src={img_note[0]} onClick={() => audplay(0, 0)} alt="note" className="note1"/>
                        <img src={img_note[1]} onClick={() => audplay(1, 1)} alt="note" className="note2"/>
                        <img src={img_note[2]} onClick={() => audplay(2, 2)} alt="note" className="note1"/>
                        <img src={img_note[3]} onClick={() => audplay(3, 3)} alt="note" className="note2"/>
                    </div>
                </div>

                <div>
                    <div className="category"><h2>{props.category[1]}</h2></div>
                    <div className="notewrapper">
                        <img src={img_note[4]} onClick={() => audplay(0, 4)} alt="note" className="note1"/>                
                        <img src={img_note[5]} onClick={() => audplay(1, 5)} alt="note" className="note2"/>                
                        <img src={img_note[6]} onClick={() => audplay(2, 6)} alt="note" className="note1"/>                
                        <img src={img_note[7]} onClick={() => audplay(3, 7)} alt="note" className="note2"/>                
                    </div>
                </div>

                <div>
                    <div className="category"><h2>{props.category[2]}</h2></div>
                    <div className="notewrapper">
                        <img src={img_note[8]} onClick={() => audplay(0, 8)} alt="note" className="note1"/>                
                        <img src={img_note[9]} onClick={() => audplay(1, 9)} alt="note" className="note2"/>                
                        <img src={img_note[10]} onClick={() => audplay(2, 10)} alt="note" className="note1"/>                
                        <img src={img_note[11]} onClick={() => audplay(3, 11)} alt="note" className="note2"/>                
                    </div>
                </div>
                                                                                                                                 
                <div>
                    <div className="category"><h2>{props.category[3]}</h2></div>
                    <div className="notewrapper">
                        <img src={img_note[12]} onClick={() => audplay(0, 12)} alt="note" className="note1"/>                
                        <img src={img_note[13]} onClick={() => audplay(1, 13)} alt="note" className="note2"/>                
                        <img src={img_note[14]} onClick={() => audplay(2, 14)} alt="note" className="note1"/>                
                        <img src={img_note[15]} onClick={() => audplay(3, 15)} alt="note" className="note2"/>                
                    </div>
                </div>

                <audio ref={noteRef[0]} src={props.note[0]}/>
                <audio ref={noteRef[1]} src={props.note[1]}/>
                <audio ref={noteRef[2]} src={props.note[2]}/>                                                                                  
                <audio ref={noteRef[3]} src={props.note[3]}/>
                <audio ref={noteRef[4]} src={props.note[4]}/>                                                                                  
                <audio ref={noteRef[5]} src={props.note[5]}/>                                                                                  
                <audio ref={noteRef[6]} src={props.note[6]}/>                                                                                  
                <audio ref={noteRef[7]} src={props.note[7]}/>
                <audio ref={noteRef[8]} src={props.note[8]}/>                                                                                  
                <audio ref={noteRef[9]} src={props.note[9]}/>                                                                                  
                <audio ref={noteRef[10]} src={props.note[10]}/>                                                                                  
                <audio ref={noteRef[11]} src={props.note[11]}/>                                                                                  
                <audio ref={noteRef[12]} src={props.note[12]}/>                                                                                  
                <audio ref={noteRef[13]} src={props.note[13]}/>                                                                                  
                <audio ref={noteRef[14]} src={props.note[14]}/>                                                                                  
                <audio ref={noteRef[15]} src={props.note[15]}/>
            </div>
        </div>
    );
}

export default Round1;
