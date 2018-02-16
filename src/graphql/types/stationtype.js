import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'

const StationType = new GraphQLObjectType({
  name: 'Station',
  description: 'Describes the fields required for each bike station',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: station => station.properties.name
    },
    address: {
      type: GraphQLString,
      resolve: station => station.properties.addressStreet
    },
    longitude: {
      type: GraphQLString,
      resolve: station => station.geometry.coordinates[0]
    },
    latitude: {
      type: GraphQLString,
      resolve: station => station.geometry.coordinates[1]
    },
    bikes: {
      type: GraphQLInt,
      resolve: station => station.properties.bikesAvailable
    },
    id: {
      type: GraphQLID,
      resolve: station => station.properties.kioskId
    }
  })
})

export default StationType