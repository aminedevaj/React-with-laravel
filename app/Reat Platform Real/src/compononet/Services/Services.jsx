import React from 'react'
// import {Ser} from '../../data/Fakedata'
import './Services.css'
import { Ser } from '../../services/services'
// import arrow from '../../assets/aee-removebg-preview.png'
const Services = () => {
  return (
    <div className="services" id='Services'>
        <div className="services-title">
            <h1>My <span>Services</span></h1>
        </div>
        <div className="services-container">
            {
                Ser.map((items,index)=>{
                    return <div className="services-forma" key={index}>

                        <h3>{items.id}</h3>
                        <h2>{items.name}</h2>
                        <p>{items.desc}</p>
                        <div className="read-more">
                            <p>Read More</p>
                            <img src={items.img} alt=""  width={"50px"} />
                        </div>


                    </div>
                }
                  
                )
            }

        </div>
    </div>
    
  )
}

export default Services