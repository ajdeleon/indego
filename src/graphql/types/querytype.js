import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import axios from 'axios'
import StationType from './stationtype'

const URL = 'https://www.rideindego.com/stations/json/'

async function getAllStations() {
  const res = await axios.get(URL)
  const data = res.data.features
  return data
}

async function getStationByID(id) {
  const res = await axios.get(URL)
  const data = res.data.features
  const station = data.find(sta => {
    return sta.properties.kioskId === id
  })
  return station
}

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: () => ({
    allStations: {
      type: new GraphQLList(StationType),
      resolve: root => getAllStations()
    },
    station: {
      type: StationType,
      args: {
        id: { type: GraphQLInt}
      },
      resolve: (root, args) => getStationByID(args.id)
    }
  })
 })

 export default QueryType