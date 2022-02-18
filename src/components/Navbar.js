import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {

    const [isMobile, setMobile] = useState(false);

    return (
        <nav className='navbar'>
            <img src='/images/logo.svg' />
            <div className={isMobile ? 'nav-links-mobile': 'nav-links'} onClick={() => setMobile(false)}>
                <ul>
                    <Link to='/' className = 'home'><li>Home</li></Link>
                    <Link to='/' className = 'about'><li>About</li></Link>
                    <Link to='/' className = 'contact'><li>Contact</li></Link>
                    <Link to='/' className = 'blog'><li>Blog</li></Link>
                    <Link to='/' className = 'careers'><li>Careers</li></Link>
                </ul>

                <Link to='/' className = 'invite'><li>Request Invite</li></Link>

            </div>
            <button className='mobile-menu-icon' 
            onClick={() => setMobile(!isMobile)}>{isMobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}</button>
        </nav>
    );
}

export default Navbar;