import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <Link className="link" to="/">Real Housewives Quote Wiki</Link> 
          <Link className="link" to="/housewives">All Quotes</Link> 
        </nav>
    )
}

export default Nav;