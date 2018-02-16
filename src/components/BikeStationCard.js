import React from 'react'

const BikeStationCard = ({ stationName, address, bikes, coordinates }) => {
  return (
    <div style={{ border: "2px solid black", paddingLeft: "15px" }}>
      <h1>{stationName}</h1>
      <p>
        {address}
      </p>
      <p>There are currently {bikes} bikes available at this station.</p>
      <p>The geolocation of this station is:</p>
      <p>lon: {coordinates[0]} lat: {coordinates[1]}</p>
    </div>
  )
}

export default BikeStationCard