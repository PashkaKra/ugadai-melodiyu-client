import {useState, useEffect, useRef} from 'react';
import note_img from './note.svg';
import red_note_img from './rednote.svg';
import green_note_img from './greennote.svg';
import yellow_note_img from './yellownote.svg';

const Round4 = (props) => {
    const [time, setTime] = useState(70);
    const [isCounting, setIsCounting] = useState(false);
    const [counter, setCounter] = useState(0);
    const [img_note, setColorNote] = useState([]);
    /*const promisPlay = new Promise((resolve, reject) => {
      noteRef[0].current.play();
      setTimeout(() => {}, 10000);
      resolve();
    });*/
    useEffect(() => {
            if(isCounting && (time > 0)){
              const interval = setInterval(() => {setTime(time - 1)}, 1000);
            //const interval = setInterval(() => {if(isCounting) setTime(time + 1)}, 1000);
            //let i = 0;

/*              const promisPlay = new Promise((resolve, reject) => {
                noteRef[counter].current.play();
                setTimeout(() => {
                  setCounter(counter + 1);
                  resolve();
                }, 11000);
              });*/

            //promisPlay.then(() => noteRef[counter].current.play());

            /*if(time<10) noteRef[0].current.play();
            else if((10<=time)&&(time<20)) noteRef[1].current.play();
            else if((20<=time)&&(time<30)) noteRef[2].current.play();
            else if((30<=time)&&(time<40)) noteRef[3].current.play();
            else if((40<=time)&&(time<50)) noteRef[4].current.play();
            else if((50<=time)&&(time<60)) noteRef[5].current.play();
            else if((60<=time)&&(time<70)) noteRef[6].current.play();*/
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

    //const buttonPlay = () => isCounting ? setIsCounting(false) : setIsCounting(true);
    const buttonPlay = (i) => {
        if(isCounting){
          if(i === 7) setIsCounting(false);
          else{
            noteRef[counter].current.pause();
            setCounter(i);
            //noteRef[counter].current.play();
          }
        }
        else{
            //noteRef[2].current.play();
            //console.log(time);
            setIsCounting(true);
        }
    }
    //props.note.play();
    return(
        <div>
            <div className="nRound">
                <div className="number">{props.round}</div>
                <div>Раунд</div>
            </div>
            {/*<div onClick={() => buttonPlay(7)}>play</div>*/}

            <div className="NoteTable">
                <div className="TimerCounter">{time}</div>
                {/*<div>{counter}</div>*/}
                <div className="notewrapper2">
                    <img src={img_note[0]} onClick={() => buttonPlay(0)} alt="note" className="note1"/>
                    <img src={img_note[1]} onClick={() => buttonPlay(1)} alt="note" className="note2"/>
                    <img src={img_note[2]} onClick={() => buttonPlay(2)} alt="note" className="note1"/>
                    <img src={img_note[3]} onClick={() => buttonPlay(3)} alt="note" className="note2"/>
                    <img src={img_note[4]} onClick={() => buttonPlay(4)} alt="note" className="note1"/>
                    <img src={img_note[5]} onClick={() => buttonPlay(5)} alt="note" className="note2"/>
                    <img src={img_note[6]} onClick={() => buttonPlay(6)} alt="note" className="note1"/>
                </div>
            </div>

            <audio ref={noteRef[0]} src={props.note[0]}/>
            <audio ref={noteRef[1]} src={props.note[1]}/>
            <audio ref={noteRef[2]} src={props.note[2]}/>
            <audio ref={noteRef[3]} src={props.note[3]}/>
            <audio ref={noteRef[4]} src={props.note[4]}/>
            <audio ref={noteRef[5]} src={props.note[5]}/>
            <audio ref={noteRef[6]} src={props.note[6]}/>
        </div>
    );
}

export default Round4;
