import {useState, useEffect, useRef} from 'react';
import { SOUNDS_R3, DESCRIPTS_R3 } from '../preferences/PrefRound3';
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
    const DESCRIPTS = [DESCRIPTS_R3.DESCRIPT_1, DESCRIPTS_R3.DESCRIPT_2, DESCRIPTS_R3.DESCRIPT_3,
        DESCRIPTS_R3.DESCRIPT_4, DESCRIPTS_R3.DESCRIPT_5, DESCRIPTS_R3.DESCRIPT_6];

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
        <div className="mainbox">
            <div className="nRound">
                <div className="number">{props.round}</div>
                <div>Раунд</div>
            </div>
            
            <div className="NoteTable">
                <div className="MelodyTitle">{DESCRIPTS[desCount]}</div> 
                <div className="flexbox">
                    <div className="notewrapper">
                        <img src={img_note[0]} onClick={() => audplay(0)} alt="note" className="note1"/>                
                        <img src={img_note[1]} onClick={() => audplay(1)} alt="note" className="note2"/>                
                        <img src={img_note[2]} onClick={() => audplay(2)} alt="note" className="note1"/>                
                        <img src={img_note[3]} onClick={() => audplay(3)} alt="note" className="note2"/>
                        <img src={img_note[4]} onClick={() => audplay(4)} alt="note" className="note1"/>
                        <div className="linebox1">
                            <div className="linebox2">
                                <div className="linebox"><hr/><hr/><hr/><hr/></div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
                <audio ref={noteRef[0]} src={SOUNDS_R3.SOUND_1}/>                                                                                                                                                      
                <audio ref={noteRef[1]} src={SOUNDS_R3.SOUND_2}/>                                                                                                                                                      
                <audio ref={noteRef[2]} src={SOUNDS_R3.SOUND_3}/>                                                                                                                                                      
                <audio ref={noteRef[3]} src={SOUNDS_R3.SOUND_4}/>                                                                                                                                                      
                <audio ref={noteRef[4]} src={SOUNDS_R3.SOUND_5}/>                                                                                                                                                       
        </div>
    );
}

export default Round3;
