import React from 'react'
import './Home.css'
import Search from '../Search/Search'
const Home = () => {
  return (
    <div className="home-page">
    <div className="textcontainer">
        <h1>Find Real Estate & Get Your Dream Place
            Estate &  <span>Get Your Dream Place
                </span>
        </h1>

        <br />
        
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni, sequi corporis explicabo qui vitae consequatur. Facilis, similique delectus odio possimus inventore necessitatibus, excepturi cupiditate, quos alias quibusdam eos perspiciatis.
        </p>
        <br />
        <Search/>


        <br />
       
       <div className="boxes">
        <div className="do">
            <h3>16+</h3>
            <h6>Years Of Experinces</h6>
        </div>
        <div className="do">
            <h3>200</h3>
            <h6>Awrad Gained</h6>
        </div>
        <div className="do">
            <h3>1200+</h3>
            <h6>Property Ready</h6>
        </div>


       </div>




        


    </div>
    <div className="imgcontainer">

<img src="/bg.png" alt="" className='shaape' />

    </div>
  
</div>
   
  )
}

export default Home