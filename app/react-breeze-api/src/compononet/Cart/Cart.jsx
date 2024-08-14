import React from 'react'
import './Cart.css'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text} refrech map</div>;

const Cart = () => {
    const defaultProps = {
        center: {
          lat: 33.5731104,
          lng: -7.5898434
        },
        zoom: 5
      };
  return (
    <div className="ALLCart">

        <h1>Map Real <span>Estate</span></h1>
     
      
        <div className="Cart">
        <div style={{ }} className='maps'>
        <GoogleMapReact
  bootstrapURLKeys={{ key: "" }}
  defaultCenter={defaultProps.center}
  defaultZoom={defaultProps.zoom}
 
>
  <AnyReactComponent
    lat={33.5731104}
    lng={-7.5898434}
    text="My Marker"
   
  />
</GoogleMapReact>

    </div>
        
        
        </div>
    </div>
        
   
  )
}

export default Cart