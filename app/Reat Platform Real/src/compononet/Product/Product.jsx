import React, { useContext } from 'react'
import { StateContext } from '../../Context/StateContext'
import { useParams } from 'react-router-dom';

import Display from '../DisplayProject/Display';

const Product = () => {

    const {fakedata}=useContext(StateContext);
    const {id}=useParams();
    const project=fakedata.find((e)=>e.id===Number(id))
  return (
    <div>
        <Display project={project} />
    </div>
  )
}

export default Product