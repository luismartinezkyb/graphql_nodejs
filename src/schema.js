import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from "./resolvers.js";
const typeDefs = `
  type Query{
    hello: String,
    greet(name: String!): String
    tasks: [Task]
  }

  type Task {
    id: ID,
    title: String!,
    description: String!,
    number: Int,
  }
  input TaskInput {
    title: String!,
    description: String!,
    number: Int,
  }
  type Mutation {
    createTask(task: TaskInput): Task,
    upadateTask(taskId: String,task: TaskInput ): Task
  }
`;


export default makeExecutableSchema({
  typeDefs,
  resolvers,
})

