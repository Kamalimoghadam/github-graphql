import { ApolloClient, InMemoryCache } from '@apollo/client'

export const config = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization:
      'Authorization: Bearer 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',
  },
})

export default config
