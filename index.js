const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/type-defs')
const { resolvers} = require('./schema/resolvers')


const server = new ApolloServer({typeDefs, resolvers})
// typeDefs => define the types of the datas
// resolvers => are the functions dealings with the DB or API

server.listen().then(() => {
    console.log('Your API is running')
})