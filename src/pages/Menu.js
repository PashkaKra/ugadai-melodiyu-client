import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <div>                                                                                   
            <div><Link to="/round1">Round1</Link></div>
            <div><Link to="/round2">Round2</Link></div>
            <div><Link to="/round3">Round3</Link></div>
        </div>

    );
}

export default Menu;
