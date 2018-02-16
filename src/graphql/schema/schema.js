import { GraphQLSchema } from 'graphql'
import QueryType from '../types/querytype'

export default new GraphQLSchema({
  query: QueryType
})

