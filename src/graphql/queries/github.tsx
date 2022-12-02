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

export const GET_ISSUES2 = gql`
  query getIssues {
    repositoryOwner(login: "facebook") {
      repositories {
        totalCount
      }
      repository(name: "react") {
        description
        forks {
          totalCount
        }
        issues {
          totalCount
        }
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
        pullRequests {
          totalCount
        }
        labels(first: 10) {
          edges {
            node {
              name
            }
          }
        }
        milestones(first: 10) {
          edges {
            node {
              title
              issues
            }
          }
        }
      }
    }
  }
`
