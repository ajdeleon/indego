import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const Box = ({ text }) => <div style={{fontSize: 8, border: '1px solid black', width: 10, height: 10}}>{text}</div>

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 39.9526, lng: -75.1652},
    zoom: 14
  }

  renderStations() {
    return this.props.stations.map(station => {
      return <Box lng={station.geometry.coordinates[0]} lat={station.geometry.coordinates[1]} text={station.properties.name} key={station.properties.name} />
    })
  }

  render() {
    console.log(this.props)
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD1sEpEAo5y9HleN0pnyJF-vUv0NSiwTfs' }}
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
