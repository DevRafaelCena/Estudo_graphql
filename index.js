const {ApolloServer,gql} = require('apollo-server')
const moment = require('moment')

const typeDefs = gql`
    # pontos de entrada da api
    type Query {
        hello: String
        hora: String
    }

`

const resolvers = {

    Query:{
        hello(){
            return "Hello!!!"
        },
        hora(){
            horario = moment().format("HH:MM:ss")

            return horario
        }
    }

}


const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
})

server.listen().then(({url}) => {
    console.log((`Executando em ${url}`))
})
