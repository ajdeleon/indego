import React from 'react'
import indegoPin from '../assets/indego_pin.png'

const pinStyle = {
  position: 'absolute',
  width: '47px',
  height: '60px',
  left: '-24px',
  top: '-30px'
}

const IndegoPin = () => {
  return (
    <div>
    <img src={indegoPin} style={pinStyle} alt="Indego Station"/>
    </div>
  )
}

export default IndegoPin