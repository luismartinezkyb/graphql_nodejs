export const resolvers = {
  Query: {
    hello: ()=>{
      return 'Hola Mundo'
    },
    greet(root, {name}){
      console.log(name);
      return 'Hola '+name;
    }
  }
}