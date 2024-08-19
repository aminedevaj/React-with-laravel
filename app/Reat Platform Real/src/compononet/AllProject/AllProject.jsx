import React from 'react'
import './AllProject.css'
import { fakedata } from '../../services/services'
import ItemCol from '../Item/ItemCol'
const AllProject = () => {
  return (
    <div className="Project">
        <h1>All Real <span>Estate</span></h1>
  
        <div className="collections">
            {
                fakedata.map((item,index)=>(
                    <ItemCol item={item} key={index} />
                ))
            }

        </div>


    </div>
   
  )
}

export default AllProject