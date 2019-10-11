import ApolloClient from 'apollo-boost'

const apolloClient2 = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
})

export const apolloClient = apolloClient2