import { gql } from 'apollo-server-express'
import search from '../search.js'
import { topics } from '../data.js'
import data from '../data.js'

const fileSystemHost = 'http:localhost:5000'

export const typeDefs = gql`
    extend type Query {
        articles(q: String!, t:String, page: Int, pageSize: Int): [Article] 
        articlesCursor(q: String!, t:String, pageSize: Int!, cursor: ID!): [Article] 
        topics: [String]
    }    

    type Article {
        id: ID!
        text: String!
        topics: [String]
        image: String
        timeStamp: String!       
    }
`
const getAllResults = (args) => {
    if (Object.keys(args).length === 0)
        throw Error('Query text not found.')
    const q = args.q || ''
    const t = args.t || ''
    let result = search(q, t, fileSystemHost)
    return result
}

export const resolvers = {
    Query: {
        articles: async (obj, args, context, info) => {
            let articles = getAllResults(args)
            const { page, pageSize } = args
            articles = articles.slice((page - 1) * pageSize, page * pageSize);
            return articles
        },
        articlesCursor: async (obj, args, context, info) => {
            let articles = getAllResults(args)
            const { pageSize, cursor } = args
            const cursorIndex = articles.findIndex(obj => obj.id == cursor)
            if (cursorIndex == -1)
                throw Error("Cursor not found.")
            articles = articles.slice(cursorIndex, cursorIndex + pageSize);
            return articles
        },
        topics: async (obj, args, context, info) => {
            return data.topics
        },
    }
}
