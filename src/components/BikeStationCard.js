import React from 'react'

const BikeStationCard = ({ name, address, bikes, longitude, latitude }) => {
  return (
    <div style={{ border: "2px solid black", paddingLeft: "15px" }}>
      <h1>{name}</h1>
      <p>
        {address}
      </p>
      <p>There are currently {bikes} bikes available at this station.</p>
      <p>The geolocation of this station is:</p>
      <p>lon: {longitude} lat: {latitude}</p>
    </div>
  )
}

export default BikeStationCard