import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import apolloClient from './config/apolloClient'
import router from './config/router'

export const App = () => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </>
  )
}
