import express from 'express'
import graphqlHTTP from 'express-graphql'

const app = express()
import schema from './src/graphql/schema/schema'

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(5000)
console.log('Server started on port 5000')