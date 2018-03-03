import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import IndegoPin from './IndegoPin'
import keys from '../keys'

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 39.9526, lng: -75.1652},
    zoom: 14
  }

  renderStations() {
    return this.props.stations.map(station => {
      return <IndegoPin lng={station.geometry.coordinates[0]} lat={station.geometry.coordinates[1]} key={station.properties.name} />
    })
  }

  render() {
    console.log(this.props)
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: keys.GOOGLE_MAPS_KEY, v: '3.31' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      {this.renderStations()}
        {/* <Box
          lat={39.95378}
          lng={-75.16374}
          text={'Kreyser Avrora'}
        /> */}

      </GoogleMapReact>
    )
  }
}

export default GoogleMap
