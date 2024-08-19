import React from 'react'
import './ItemCol.css'
import { Link } from 'react-router-dom'
const ItemCol = ({ item }) => {
    return (
        <div className="col">
            
       

            
            <Link to={`/product/${item.id}`} className='Link'>
                <img src={item.img[0]} alt="" className='itemc' />
                <h4>{item.title}</h4>
                <br />

                <div className="info">
                    <img src="./bed.png" alt="" style={{ width: '20px' }} />
                    <p>{item.bedRooms}: Rooms</p>
                    <img src="./bath.png" alt="" style={{ width: '20px' }} />
                    <p>{item.bathRoom}: Bath</p>
                    <img src="./size.png" alt="" style={{ width: '20px' }} />
                    <p>{item.surface}: Surface</p>



                </div>
                <div className="owner">
                    <img src="https://cdn-icons-png.flaticon.com/512/1654/1654220.png" alt="" style={{ width: '20px' }} />

                    Owner:<span>{item.Owner}</span>
                </div>



            </Link>
            
        </div>

    )
}

export default ItemCol