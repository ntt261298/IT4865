import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { saveToken, saveRole } from '../../utils/localStorage';


const handleLogout = (props) => {
  saveToken('');
  saveRole('');
  props.history.push('/login');
}

function Header(props) {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">Convenient store</Link>
            </div>
            <div className="header-menu">
                <button type="button" className="btn-logout" onClick={() => handleLogout(props)}>Logout</button>
            </div>
        </div>
    );
}

export default withRouter(Header);