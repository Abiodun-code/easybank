import React from 'react';

function Article(props) {
    return (
        <div className='article'>
            <h2>Latests Articles</h2>
            <div className='card'>
                <div className='card-bodys'>
                    <img src='/images/image-currency.jpg' className='card-image'/>
                    <p className='small'>By Claire Robinson</p>
                    <h3>Receive money in any currency with no fees</h3>
                    <p>The world is becoming smaller we're becoming more mobile. so why should you be forced to only receive money in a single...</p>
                </div>
                <div className='card-bodys'>
                    <img src='/images/image-restaurant.jpg' className='card-image'/>
                    <p className='small'>By Wilson Hutton</p>
                    <h3>Treat yourself without worrying about money</h3>
                    <p>Our simple budgeting features allows you to seperate out your spending and set realistic limits each month. That means you...</p>
                </div>
                <div className='card-bodys'>
                    <img src='/images/image-plane.jpg' className='card-image'/>
                    <p className='small'>By Wilson Hutton</p>
                    <h3>Take your Easybank Card wherever you go</h3>
                    <p>We want you to enjoy your travels. This is why we dont charge any fees on purchases while you're abroad. We'll even show you...</p>
                </div>
                <div className='card-bodys'>
                    <img src='/images/image-confetti.jpg' className='card-image'/>
                    <p className='small'>By Claire Robinson</p>
                    <h3>Our Invite-only Beta accounts are now life!</h3>
                    <p>Our web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
            </div>

        </div>
    );
}

export default Article;