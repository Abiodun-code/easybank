import React from 'react';
import {Link} from 'react-router-dom';


function Header(props) {
    return (
        <div className='header'>
            <div className='header-shift'>
                <div className='left'>
                    <h2>Next generation digital banking</h2>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more</p>
                    <Link to='/' className = 'invite'><li>Request Invite</li></Link>
                </div>
                <div className='right'>
                    <img src='/images/image-mockups.png' />
                </div>

                <div className='left-mobile'>
                    <img src='/images/image-mockups.png' />
                </div>
                <div className='right-mobile'>
                    <h2>Next generation digital banking</h2>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more</p>
                    <Link to='/' className = 'invite'><li>Request Invite</li></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;