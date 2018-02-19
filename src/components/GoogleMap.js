import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 39.9526, lng: -75.1652 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 39.9526, lng: -75.1652 }} />}
  </GoogleMap>
  ))

export default MyMapComponent

