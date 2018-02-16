var { GraphQLSchema } = require('graphql')
import QueryType from '../types/querytype'

module.exports = new GraphQLSchema({
  query: QueryType
})

