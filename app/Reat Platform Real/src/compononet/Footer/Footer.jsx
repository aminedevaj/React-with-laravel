import React from 'react'
import './Footer.css'

// import lg from '../../assets/ttbg.png'

// import email from '../../assets/email-removebg-preview.png'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="top">
                <div className="top-left">
                    <h1>Real Estate <span>Maroc</span></h1>

                    <p>
                    is the perfect choice for anyone looking for a quality property in Tangier. With a passion for innovative architecture and unparalleled attention to detail, the company offers an exceptional living experience to all its clients.

                    </p>
                </div>
                <div className="top-right">
                    <div className="email">
                        {/* <img src={email} alt="" width={"50px"} /> */}
                        <input type="email" placeholder='Write your email' />
                    </div>
                    <div className="subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <p className="bottom-left">
                    &copy;2024 Real Estate Maroc . All right
                </p>
                <div className="bottom-right">
                    <p>Terms Of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>

            </div>



        </div>
    )
}

export default Footer