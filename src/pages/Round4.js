import {useState, useEffect, useRef} from 'react';
import { SOUNDS_R4 } from '../preferences/PrefRound4';
import note_img from './note.svg';
import red_note_img from './rednote.svg';
import green_note_img from './greennote.svg';
import yellow_note_img from './yellownote.svg';

const Round4 = (props) => {
    const [time, setTime] = useState(70);
    const [isCounting, setIsCounting] = useState(false);
    const [counter, setCounter] = useState(0);
    const [img_note, setColorNote] = useState([]);

    useEffect(() => {
            if(isCounting && (time > 0)){
              const interval = setInterval(() => {setTime(time - 1)}, 1000);
              return () => {clearInterval(interval);};
            }
    }, [isCounting, time]);

    useEffect(() => {
      if(isCounting){
        const promisPlay = new Promise((resolve, reject) => {
          noteRef[counter].current.play();
          const timer = setTimeout(() => {
            setCounter(counter + 1);
            resolve();
          }, 10000);
          //return () => {clearTimeout(timer);};
        });
        //return () => {clearTimeout(timer);};
      }
    }, [isCounting, counter]);

    useEffect(() => {
        setColorNote([note_img, note_img, note_img, note_img, note_img, note_img, note_img]);
    }, [props.round]);

    const noteRef = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const buttonPlay = (i) => {
        if(isCounting){
          if(i === 7) setIsCounting(false);
          else{
            noteRef[counter].current.pause();
            setCounter(i);
          }
        }
        else{
            setIsCounting(true);
        }
    }
    return(
        <div className="mainbox">
            <div className="nRound">
                <div className="number">{props.round}</div>
                <div>Раунд</div>
            </div>

            <div className="NoteTable">
                <div className="TimerCounter">{time}</div>
                <div className="flexbox">
                  <div className="notewrapper">
                      <img src={img_note[0]} onClick={() => buttonPlay(0)} alt="note" className="note1"/>
                      <img src={img_note[1]} onClick={() => buttonPlay(1)} alt="note" className="note2"/>
                      <img src={img_note[2]} onClick={() => buttonPlay(2)} alt="note" className="note1"/>
                      <img src={img_note[3]} onClick={() => buttonPlay(3)} alt="note" className="note2"/>
                      <img src={img_note[4]} onClick={() => buttonPlay(4)} alt="note" className="note1"/>
                      <img src={img_note[5]} onClick={() => buttonPlay(5)} alt="note" className="note2"/>
                      <img src={img_note[6]} onClick={() => buttonPlay(6)} alt="note" className="note1"/>
                      <div className="linebox1">
                          <div className="linebox2">
                              <div className="linebox"><hr/><hr/><hr/><hr/></div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>

            <audio ref={noteRef[0]} src={SOUNDS_R4.SOUND_1}/>
            <audio ref={noteRef[1]} src={SOUNDS_R4.SOUND_2}/>
            <audio ref={noteRef[2]} src={SOUNDS_R4.SOUND_3}/>
            <audio ref={noteRef[3]} src={SOUNDS_R4.SOUND_4}/>
            <audio ref={noteRef[4]} src={SOUNDS_R4.SOUND_5}/>
            <audio ref={noteRef[5]} src={SOUNDS_R4.SOUND_6}/>
            <audio ref={noteRef[6]} src={SOUNDS_R4.SOUND_7}/>
        </div>
    );
}

export default Round4;
