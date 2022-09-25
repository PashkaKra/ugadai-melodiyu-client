import {useState} from 'react';
import './Playercard.css';
import logo from './logo.svg';

const Playercard = (props) => {
    const [point, setPoint] = useState(0);
    const addPoint = () => {
        setPoint(point+props.pull);
        //console.log(props.pull);
        //givePoint(0);
    }
    return(
        <div className="wrappercard" onClick={addPoint}>
            <div>
                <img src={logo} alt="logotip" className="playerlogo"/>
                <h2 className="kush">{point}</h2>
                <h2 className="player">{props.PlayerName}</h2>
            </div>
        </div>
    );
}

export default Playercard;
