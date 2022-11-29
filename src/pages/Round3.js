import {useState, useEffect, useRef} from 'react';
import note_img from './note.svg';
import red_note_img from './rednote.svg';
import green_note_img from './greennote.svg';
import yellow_note_img from './yellownote.svg';

import './Table.css';

const Round3 = (props) => {
    const [img_note, setColorNote] = useState([]);
    const [desCount, setDesCount] = useState(5);
    useEffect(() => {                        
        setColorNote([note_img, note_img, note_img, note_img, note_img]);
    }, [props.round]);

    const noteRef = [useRef(), useRef(), useRef(), useRef(), useRef()];

    const audplay = (i) => {   
        if((img_note[i] === red_note_img) || (img_note[i] === note_img)){
            setDesCount(i);
            setColorNote([...img_note.slice(0, i), yellow_note_img, ...img_note.slice(i + 1)]); 
        }
        else if(img_note[i] === yellow_note_img){                                                                                                                                                                    
            noteRef[i].current.play();                                                                                                                                                                      
            //props.onChange(i);                                                                                                                                                                                 
            setColorNote([...img_note.slice(0, i), green_note_img, ...img_note.slice(i + 1)]);                                                                                                                 
        }                                                                                                                                                                                                 
        else if(img_note[i] === green_note_img){
            noteRef[i].current.pause();
            //props.onChange(4);
            setDesCount(5);
            setColorNote([...img_note.slice(0, i), red_note_img, ...img_note.slice(i + 1)]);
        }                                                                                                                                                                                                      
    }

    return(
        <div>
            <div className="nRound">
                <div className="number">{props.round}</div>
                <div>Раунд</div>
            </div>
            
            <div className="NoteTable">
                <div className="MelodyTitle">{props.description[desCount]}</div> 
                <div className="notewrapper2">
                    <img src={img_note[0]} onClick={() => audplay(0)} alt="note" className="note1"/>                
                    <img src={img_note[1]} onClick={() => audplay(1)} alt="note" className="note2"/>                
                    <img src={img_note[2]} onClick={() => audplay(2)} alt="note" className="note1"/>                
                    <img src={img_note[3]} onClick={() => audplay(3)} alt="note" className="note2"/>
                    <img src={img_note[4]} onClick={() => audplay(4)} alt="note" className="note1"/>                
                </div>
            </div>
                <audio ref={noteRef[0]} src={props.note[0]}/>                                                                                                                                                      
                <audio ref={noteRef[1]} src={props.note[1]}/>                                                                                                                                                      
                <audio ref={noteRef[2]} src={props.note[2]}/>                                                                                                                                                      
                <audio ref={noteRef[3]} src={props.note[3]}/>                                                                                                                                                      
                <audio ref={noteRef[4]} src={props.note[4]}/>                                                                                                                                                       
        </div>
    );
}

export default Round3;
