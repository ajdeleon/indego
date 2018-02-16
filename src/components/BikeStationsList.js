import React, { Component } from 'react'
import BikeStationCard from './BikeStationCard'
import axios from 'axios'


class BikeStationsList extends Component {
  constructor(props) {
    super()

    this.state = { stationData : []}
  }

  async componentDidMount() {
    const res = await axios.get('https://www.rideindego.com/stations/json/')
    const stationData = res.data.features
    this.setState({ stationData })
  }

  render() {
    return (
      this.state.stationData.map(({properties: {name}, properties: {addressStreet}, properties: {bikesAvailable}, geometry: {coordinates} }) => {
        return <BikeStationCard
        stationName={name}
        address={addressStreet}
        bikes={bikesAvailable}
        coordinates={coordinates}
        key={name}/>
      })
    )
  }
}

export default BikeStationsList