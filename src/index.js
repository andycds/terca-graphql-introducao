import { createSchema, createYoga } from "graphql-yoga"
import { createServer } from 'node:http'

const schema = createSchema({
    typeDefs: `
        type Query {
            hello: String!
            name: String!
            id: ID!
            location: String!
            age: Int!
            ofAge: Boolean!
            salary: Float
            effectiveJava: Livro!
        }
        type Livro {
            id: ID!
            titulo: String!
            genero: String!
            edicao: Int
            preco: Float
        }
    `,
    resolvers: {
        Query: {
            hello() {
                return 'Hello, GraphQL';
            },
            name() {
                return "Um nome aqui";
            },
            id: () => "uma chave qualquer aqui",
            location: () => "Rua B, 1",
            age: () => 1,
            ofAge: () => true,
            salary: () => 400,
            effectiveJava() {
                return {
                    id: '123456',
                    titulo: null, //'Effective Java',
                    genero: 'Técnico',
                    edicao: 3,
                    preco: 43.9
                }
            }
        }
    }
})

const yoga = createYoga({
    schema
})

const server = createServer(yoga)
const porta = 4000
server.listen(porta, () => {
    console.info(`Servidor disponível em http://localhost:${porta}`)
})