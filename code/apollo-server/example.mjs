import GraphQLServer from './index.mjs'

const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: '三国演义',
    author: '施耐庵',
  },
  {
    title: '西游记',
    author: '罗贯中',
  },
]

const resolvers = {
  Query: {
    books: () => {
      return books
    }
  }
}

const app = new GraphQLServer({ typeDefs, resolvers })

app.listen(4000)