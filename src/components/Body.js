import React from 'react';

function Body(props) {
    return (
        <div className='body'>
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your account into financial hub. Control your finances like never before</p>
            <div className='card'>
                <div className='card-body'>
                    <img src='/images/icon-online.svg'/>
                    <h3>Online Banking</h3>
                    <p>Our web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>

                <div className='card-body'>
                    <img src='/images/icon-budgeting.svg'/>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly where your money goes each month. Receive  notifications when you're close to hitting your limits.</p>
                </div>

                <div className='card-body'>
                    <img src='/images/icon-onboarding.svg'/>
                    <h3>Fast Onboarding</h3>
                    <p>We dont do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>

                <div className='card-body'>
                    <img src='/images/icon-api.svg'/>
                    <h3 className='h3'>Open Api</h3>
                    <p>Manages your savings, investments, pension from one accounts. Tracking your money has never been easier.</p>
                </div>
            </div>
        </div>
    );
}

export default Body;