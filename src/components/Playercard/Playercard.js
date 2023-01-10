import {useState} from 'react';
import './Playercard.css';
import logo from './logo.svg';

const Playercard = (props) => {
    const [point, setPoint] = useState(0);
    const [looseFlag, setLooseFlag] = useState(false);
    const addPoint = () => {
        setPoint(point+props.pull);
    }
    const looseFunck = () => setLooseFlag(true);
    return(
        <div className="wrappercard">
            <div>
                <img src={logo} alt="logotip" className="playerlogo"/>
                <h2 className="kush" onClick={addPoint}>{point}</h2>
                <h2 className="player" onClick={looseFunck}>{props.PlayerName}</h2>
            </div>
            {looseFlag && <div className="loosebox"></div>}
        </div>
    );
}

export default Playercard;
