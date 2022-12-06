import { gql } from '@apollo/client'

export const GET_ISSUES = gql`
  query getIssues(
    $name: String!
    $owner: String!
    $last: Int
    $states: [IssueState!]
  ) {
    repository(name: $name, owner: $owner) {
      issues(last: $last, states: $states) {
        totalCount
        edges {
          node {
            author {
              login
            }
            title
            url
            publishedAt
          }
        }
      }
    }
  }
`
