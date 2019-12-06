import React from 'react';
import { Link } from 'react-router-dom';

function Header() {  
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">Convenient store</Link>
            </div>
            <div className="header-menu">
                <button type="button" className="btn-logout">Logout</button>
            </div>
        </div>
    );
}

export default Header;