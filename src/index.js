import express  from 'express';
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"

const app = express();
const PORT = 3000;


// SCHEMA DECLARATION
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

app.use('/api/', graphqlHTTP({
  graphiql: true,
  schema
}))

app.listen(PORT, ()=>console.log(`app listening on port ${PORT}`))