import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const config = new ApolloClient({
  uri: process.env.GITHUB_GQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
})

export default config
