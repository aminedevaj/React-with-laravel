import React from 'react'
import { type } from '../../services/services'
import Item from '../Item/Item'
import './Prop.css'
const Prop = () => {
    



  return (
    <div className='Propulaire' >
        <h1>Browse Homes In <span> Morroco City,</span></h1>
        <hr />

        <div className="propular-item">



        {
            type.map((item,index)=>(
                <Item key={index} item={item}/>
            ))
        }
        </div>




    </div>
  )
}

export default Prop