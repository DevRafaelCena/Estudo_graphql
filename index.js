const {ApolloServer,gql} = require('apollo-server')

const typeDefs = gql`
    # pontos de entrada da api
    type Query {
        hello: String
    }

`

const resolvers = {

    Query:{
        hello(){
            return "Hello!!!"
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
