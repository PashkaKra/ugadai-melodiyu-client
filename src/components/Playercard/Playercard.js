import {useState} from 'react';
import './Playercard.css';

const Playercard = (props) => {
    const [point, setPoint] = useState(0);
    const addPoint = () => {
        setPoint(point+props.pull);
        console.log(props.pull);
        //givePoint(0);
    }
    return(
        <div className="playercard">
            <img src={props.img} onClick={addPoint} alt="player1" width="200px" height="150px"/>
            <div>{point}</div>
        </div>
    );
}

export default Playercard;
