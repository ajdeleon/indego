import React, { Component } from 'react'
import BikeStationCard from './BikeStationCard'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class BikeStationsListGraphQL extends Component {
  constructor(props) {
    super()
    this.state = { stationData : []}
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.loading && this.props.data.allStations) {
      this.setState({ stationData: this.props.data.allStations})
    }
  }

  render() {
    return (
      this.state.stationData.map( ({name, id, address, longitude, latitude, bikes }) => {
        return <BikeStationCard
        name={name}
        address={address}
        bikes={bikes}
        longitude={longitude}
        latitude={latitude}
        key={id}/>
      })
    )
  }
}

const StationsQuery = gql`
{
  allStations {
    name
    id
    address
    longitude
    latitude
    bikes
  }
}
`

export default graphql(StationsQuery)(BikeStationsListGraphQL)