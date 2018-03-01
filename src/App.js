import React, { Component } from 'react'
import axios from 'axios'


//import BikeStationList from './components/BikeStationsList'
//import BikeStationsListGraphQL from './components/BikeStationsListGraphQL'
import GoogleMap from './components/GoogleMap'

class App extends Component {
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
      <div>
        {/* <BikeStationList /> */}
        {/* <BikeStationsListGraphQL /> */}
        <div style={{height: 600, width: 600}}> 
          <GoogleMap stations={this.state.stationData}/>
        </div>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
      </div>
  )
}
}

export default App