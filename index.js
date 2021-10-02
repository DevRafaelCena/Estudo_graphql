const {ApolloServer,gql} = require('apollo-server')
const moment = require('moment')

const users =[
    {
        id: 1,
        name: 'Rafael',
        email: 'rafael.cena@hotmail.com',
        age:30
    },
    {
        id: 2,
        name: 'Daniella',
        email: 'faniella@hotmail.com',
        age:30
    },
    {
        id: 3,
        name: 'Sofia',
        email: 'sofia.cena@hotmail.com',
        age:10
    }
]

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

    type Product{
        name: String!
        price:Float!
        discount:Float
        priceDiscount:Float
    }

    # pontos de entrada da api
    type Query {
        hello: String
        hora: Date
        user:User
        produtoDestaque: Product
        numbersMega:[Int]!
        users:[User]!
        findUser(id:ID): User
    }

`

const resolvers = {
    Product:{
        priceDiscount(product){
            if(product.discount){
                return product.price * (1 - product.discount)
            }else{
                return product.price
            }
        }
    },
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
        },
        produtoDestaque(){
            return {
                name: "Notebook",
                price: 4.512,
                discount: 0.5
            }

        },
        numbersMega(){
            return [4,8,13,27,33,54]
        },
        users(){
            return users
        },
        findUser(_,args){
            const selected = users.filter(u => u.id == args.id)
            return selected ? selected[0]:null

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
