import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
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

    const audplay = (ref, i, q) => {
        //if(!state[i]){
        if((img_note[q] == note_img) || (img_note[q] == red_note_img)){
            ref.current.play();
            //setState(true);
            props.onChange(i);
            setColorNote([...img_note.slice(0, q), green_note_img, ...img_note.slice(q + 1)]);
        }
        else{
            ref.current.pause();
            //setState(false);
            props.onChange(4);
            setColorNote([...img_note.slice(0, q), red_note_img, ...img_note.slice(q + 1)]);
        }
    }

    return(
        <div className="NoteTable">
            <Link to="/">home</Link>
            <Link to="/round2">next round</Link>
            <div>
                <div className="category"><h2>{props.category[0]}</h2></div>
                <div className="notewrapper">
                    <img src={img_note[0]} onClick={() => audplay(noteRef1, 0, 0)} alt="note" className="note1"/>
                    <img src={img_note[1]} onClick={() => audplay(noteRef2, 1, 1)} alt="note" className="note2"/>
                    <img src={img_note[2]} onClick={() => audplay(noteRef3, 2, 2)} alt="note" className="note1"/>
                    <img src={img_note[3]} onClick={() => audplay(noteRef4, 3, 3)} alt="note" className="note2"/>
                </div>
            </div>

            <div>
                <div className="category"><h2>{props.category[1]}</h2></div>
                <div className="notewrapper">
                    <img src={img_note[4]} onClick={() => audplay(noteRef5, 0, 4)} alt="note" className="note1"/>                
                    <img src={img_note[5]} onClick={() => audplay(noteRef6, 1, 5)} alt="note" className="note2"/>                
                    <img src={img_note[6]} onClick={() => audplay(noteRef7, 2, 6)} alt="note" className="note1"/>                
                    <img src={img_note[7]} onClick={() => audplay(noteRef8, 3, 7)} alt="note" className="note2"/>                
                </div>
            </div>

            <div>
                <div className="category"><h2>{props.category[2]}</h2></div>
                <div className="notewrapper">
                    <img src={img_note[8]} onClick={() => audplay(noteRef9, 0, 8)} alt="note" className="note1"/>                
                    <img src={img_note[9]} onClick={() => audplay(noteRef10, 1, 9)} alt="note" className="note2"/>                
                    <img src={img_note[10]} onClick={() => audplay(noteRef11, 2, 10)} alt="note" className="note1"/>                
                    <img src={img_note[11]} onClick={() => audplay(noteRef12, 3, 11)} alt="note" className="note2"/>                
                </div>
            </div>
                                                                                                                                 
            <div>
                <div className="category"><h2>{props.category[3]}</h2></div>
                <div className="notewrapper">
                    <img src={img_note[12]} onClick={() => audplay(noteRef13, 0, 12)} alt="note" className="note1"/>                
                    <img src={img_note[13]} onClick={() => audplay(noteRef14, 1, 13)} alt="note" className="note2"/>                
                    <img src={img_note[14]} onClick={() => audplay(noteRef15, 2, 14)} alt="note" className="note1"/>                
                    <img src={img_note[15]} onClick={() => audplay(noteRef16, 3, 15)} alt="note" className="note2"/>                
                </div>
            </div>

            <audio ref={noteRef1} src={props.note[0]}/>
            <audio ref={noteRef2} src={props.note[1]}/>
            <audio ref={noteRef3} src={props.note[2]}/>                                                                                  
            <audio ref={noteRef4} src={props.note[3]}/>
            <audio ref={noteRef5} src={props.note[4]}/>                                                                                  
            <audio ref={noteRef6} src={props.note[5]}/>                                                                                  
            <audio ref={noteRef7} src={props.note[6]}/>                                                                                  
            <audio ref={noteRef8} src={props.note[7]}/>
            <audio ref={noteRef9} src={props.note[8]}/>                                                                                  
            <audio ref={noteRef10} src={props.note[9]}/>                                                                                  
            <audio ref={noteRef11} src={props.note[10]}/>                                                                                  
            <audio ref={noteRef12} src={props.note[11]}/>                                                                                  
            <audio ref={noteRef13} src={props.note[12]}/>                                                                                  
            <audio ref={noteRef14} src={props.note[13]}/>                                                                                  
            <audio ref={noteRef15} src={props.note[14]}/>                                                                                  
            <audio ref={noteRef16} src={props.note[15]}/>
        </div>
    );
}

export default Round1;
