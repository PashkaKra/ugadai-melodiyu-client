import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <div className="mainbox">                                                                                   
            <Link to="/round1" className="RoundLink"><div>1</div><div>Раунд</div></Link>
            <Link to="/round2" className="RoundLink"><div>2</div><div>Раунд</div></Link>
            <Link to="/round3" className="RoundLink"><div>3</div><div>Раунд</div></Link>
            <Link to="/round4" className="RoundLink"><div>4</div><div>Раунд</div></Link>
        </div>

    );
}

export default Menu;
