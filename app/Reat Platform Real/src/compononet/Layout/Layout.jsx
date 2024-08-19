import React from 'react'
import Home from '../Home/Home'
import Prop from '../Home/Prop'
import AllProject from '../AllProject/AllProject'
import About from '../About/About'
import Cart from '../Cart/Cart'

const Layout = () => {
  return (
    <div className="layout">
        <Home/>
        <br />
        <Prop/>
        <br />
        <AllProject/>
        <br />
        <br />
        <Cart/>

        <br />
        <About/>
    </div>
    
  )
}

export default Layout