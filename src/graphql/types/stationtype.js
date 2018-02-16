import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const StationType = new GraphQLObjectType({
  name: 'Station',
  description: 'Describes the fields required for each bike station',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: station => properties.name
    },
    address: {
      type: GraphQLString,
      resolve: station => properties.addressStreet
    },
    longitude: {
      type: GraphQLInt,
      resolve: station => geometry.coordinates[0]
    },
    latitude: {
      type: GraphQLInt,
      resolve: station => geometry.coordinates[1]
    },
    bikes: {
      type: GraphQLInt,
      resolve: station => properties.bikesAvailable
    }
  })
})

export default StationType