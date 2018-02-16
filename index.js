var express = require('express')
var graphqlHTTP = require('express-graphql')

var app = express()
var schema = require('./src/graphql/schema/schema')

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(5000)