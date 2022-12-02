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
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  //TODO: move token to env
  headers: {
    authorization: 'Bearer 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',
  },
})

export default config
