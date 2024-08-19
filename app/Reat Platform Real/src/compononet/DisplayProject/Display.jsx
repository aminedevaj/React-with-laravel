import React, { useState } from 'react'
import './Display.css'


import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Display = (props) => {

  const [imageIndex, setImageIndex] = useState(null)
  const changeslidde = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(project.img.length - 1)
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === project.img.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1)
      }
    }


  }
  
  const { project } = props;
  const defaultProps = {
    center: {
      lat: project.longitude,
      lng: project.latitude
    },
    zoom: 11
  };
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <div className="slider">
            {imageIndex !== null && (

              <div className="fullSlider">
                <div className="arrow">
                  <img src="/arrow.png" alt="" onClick={() => changeslidde('left')} />
                </div>
                <div className="imgContainer">
                  <img src={project.img[imageIndex]} />
                </div>
                <div className="arrow">
                  <img src="/arrow.png" className='right' alt="" onClick={() => changeslidde('right')} />
                </div>
                <div className="close" onClick={() => setImageIndex(null)}>X</div>

              </div>
            )}
            <div className="bigimages">
              <img src={project.img[0]} alt="" onClick={() => setImageIndex(0)} />
            </div>
            <div className="smallimages">
              {project.img.slice(1).map((image, index) => (
                <img src={image} key={index} onClick={() => setImageIndex(index + 1)} />
              ))}
            </div>

          </div>



          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{project.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" style={{ width: '16px', height: '16px' }} />
                  <span>{project.address}</span>
                </div>
                <div className="price">{project.price}$</div>


              </div>
              <div className="user">
                <img src="/owner1.png" alt="" />
                <span>{project.Owner}</span>

              </div>

            </div>


          </div>
          <div className="bottom">
            {
              project.desc
            }
          </div>

        </div>
        <div className="button">
          <div className="Save">
            <img src="/save.png" alt="" />
          <button className='save'>Save</button>
          </div>
          <div className="Message">
            <img src="/chat.png" alt="" />
            <button className='chat'>Send Message</button>
          </div>

        </div>

      </div>

      <div className="features">
        <div className="wrapper">

          <p className="title">General</p>
          <div className="listVertical">
            <div className="features">
              <img src="/utility.png" alt="" />
              <div className="text">
                <span>Utilities</span>
                <p>Renter Is Possible</p>
              </div>
            </div>
            <div className="features">
              <img src="/pet.png" alt="" />
              <div className="text">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="features">
              <img src="/fee.png" alt="" />
              <div className="text">
                <span>Property Frees</span>
                <p>Must have 3x the rent in total </p>
              </div>
            </div>


          </div>
          <p className="title">Sizes</p>
          <div className="listhor">
            <div className="size">
              <img src="/bath.png" alt="" />
              <div className="featurestext">
                <span>{project.bathRoom} Bath</span>

              </div>
            </div>



            <div className="size">
              <img src="/size.png" alt="" />
              <div className="featurestext">
                <span>{project.surface} m2</span>

              </div>
            </div>

            <div className="size">
              <img src="/bed.png" alt="" />
              <div className="featurestext">
                <span>{project.bedRooms} Bed</span>

              </div>

            </div>



          </div>

          <p className="title">Nearby Places</p>
          <div className="listhori">
            <div className="size">
              <img src="/school.png" alt="" />
              <div className="featurestext">
                <span>School</span>
                <span>  </span>
                <span>{project.school}  m Away</span>
              </div>
            </div>



            <div className="size">
              <img src="/bus.png" alt="" />
              <div className="featurestext">
                <span>Bus stop</span>
                <span>  </span>
                <span>{project.bus} m Away</span>
              </div>
            </div>

            <div className="size">
              <img src="/restaurant.png" alt="" />
              <div className="featurestext">
                <span>Restaurant</span>
                <span>  </span>
                <span>{project.restaurant} m Away</span>
              </div>

            </div>



          </div>
          <div className="mapContainer">
            <p className="title">Location</p>
            <div className="itemMap">
            <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={project.latitude}
          lng={project.longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

           
            </div>
        

           
            
            

















          </div>





        </div>

      </div>
    </div>




  )
}

export default Display