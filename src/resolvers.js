import { tasks } from "./sample.js";

export const resolvers = {
  Query: {
    hello: ()=>{
      return 'Hola Mundo'
    },
    greet(root, {name}, ctx){//Esta parte puede devolver lo que se le mande en la query de greet, etc
      console.log(ctx);
      return 'Hola '+name;
    },
    tasks: ()=>{
      return tasks
    },
    
  },
  Mutation: {
    createTask(_, {task}){
      console.log(task);
      const taskCreated = {
        id: tasks.length+1,
        ...task
      }
      tasks.push(taskCreated)
      return taskCreated;
    }
  }
}
