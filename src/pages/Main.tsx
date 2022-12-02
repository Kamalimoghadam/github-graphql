import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { GET_ISSUES } from '../graphql/queries/github'
import Layout from './Layout'

export const Main = () => {
  const { loading, error, data } = useQuery(GET_ISSUES, {
    variables: { name: 'react', owner: 'facebook', last: 5, states: 'OPEN' },
  })

  useEffect(() => {
    console.log(loading)
    console.log(error)
    console.log(data)
  }, [loading, error, data])

  return (
    <Layout>
      <h1>Main rendered successfully</h1>
    </Layout>
  )
}

export default Main
