import React from 'react'

//import BikeStationList from './components/BikeStationsList'
//import BikeStationsListGraphQL from './components/BikeStationsListGraphQL'
import MyMapComponent from './components/GoogleMap'

const App = () => {
  return (

    <div>
      {/* <BikeStationList /> */}
      {/* <BikeStationsListGraphQL /> */}
      <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
    </div>
  )
}

export default App