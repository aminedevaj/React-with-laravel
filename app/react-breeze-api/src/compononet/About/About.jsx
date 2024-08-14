import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="About" id='About'>
            <div className="about-titl">
                <h1>About  <span>Me</span></h1>

            </div>
            <div className="about-section">
                <div className="left">
                    <img src="https://i.pinimg.com/564x/00/1d/01/001d0116a922a5f86b75e45d7baddaad.jpg" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        Welcome to  Real Estate Project <span>Maroc</span> , where dreams find homes. Our platform is dedicated to helping you discover your perfect property with ease and confidence. Whether you're searching for your first home,
                        </p>
                        <p>
                        a lucrative investment, or the ideal rental property, we provide a seamless experience tailored to your needs. With a curated selection of listings, expert insights, and advanced search tools, we make navigating the real estate market simple and straightforward. At Real Estate Project <span>Maroc</span>, we believe in transparency, trust, and putting our clients first, ensuring every step of your journey is supported by our knowledgeable team. Explore your possibilities with us and find your future today.
                        </p>
                    </div>
                    <button className='con'>
                      

                    Contact Us
                    </button>
                    
                </div>
            </div>
           

        </div>

    )
}
export default About;