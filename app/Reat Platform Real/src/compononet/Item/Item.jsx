import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Item.css'
const Item = ({ item, id }) => {
  return (

    <>
     

      <div className="items">



        <Link to={`/ProjectCat/${item.type}`} className='Link'>



          <img src={item.Img} alt="" />
          <p>{item.type} <span> ({item.total})</span> </p>


        </Link>
      </div>
    </>

  )
}

export default Item