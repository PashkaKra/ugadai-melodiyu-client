import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import './Playercard.css';
import logo from './logo.svg';
import krest from '../../kres.svg';

const Playercard = (props) => {
    const [point, setPoint] = useState(0);
    const [point3, setPoint3] = useState(0);
    const [looseFlag, setLooseFlag] = useState(false);
    const location = useLocation().pathname;
    let count;

    const subPoint = () => {
        if(location !== "/round3"){
            if(point > 0){
                setPoint(point-props.pull);
            }
        }
        else{
            if(point3 > 0){
                setPoint3(point3 - 1);
            }      
        }
    }

    const addPoint = () => {
        if(location !== "/round3"){
            setPoint(point+props.pull);
        }
        else{
            setPoint3(point3 + 1);
        }
    }
    
    if(location !== "/round3"){
        count = point;
    }
    else{
        count = point3;
    }

    const looseFunck = () => setLooseFlag(true);
    return(
        <div className="wrappercard">  
            {looseFlag && <img src={krest} alt="krest" className="loskrest"/>}
            <div>
                <img src={logo} alt="logotip" className="playerlogo"/>
                <div className="kush">
                    <div onClick={subPoint} className="changeCountBox">-</div>
                    <h2 className="countBox">{count}</h2>
                    <div onClick={addPoint} className="changeCountBox">+</div>
                </div>
                
                <h2 className="player" onClick={looseFunck}>{props.PlayerName}</h2>
            </div>
        </div>
    );
}

export default Playercard;
