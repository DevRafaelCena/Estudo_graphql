const {ApolloServer,gql} = require('apollo-server')
const moment = require('moment')

const typeDefs = gql`

    scalar Date

    type User{
        id: ID!
        name: String!
        email: String
        age: Int
        salary:Float
        vip: Boolean
    }

    # pontos de entrada da api
    type Query {
        hello: String
        hora: Date
        user:User
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
        },
        user(){
            return{
                id:1,
                name: "ana da web",
                email: 'ana@gmail.com',
                age: 30,
                salary: 2.345,
                vip:false
            }
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
