import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import axios from 'axios'
import StationType from './stationtype'

const URL = 'https://www.rideindego.com/stations/json/'

function getStations() {
  return axios.get(URL).then(res => res.data.features)
}

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: () => ({
    allStations: {
      type: new GraphQLList(StationType),
      resolve: root => getStations
    },
    station: {
      type: StationType,
      args: {
        id: { type: GraphQLInt}
      },
      resolve: (root, args) => getStations[args]
    }
  })
 })

 export default QueryType