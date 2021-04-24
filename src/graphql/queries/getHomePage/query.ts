import { gql } from 'graphql-request'

export const GET_HOME_PAGE = gql`
  query GET_HOME_PAGE {
    episodes(limit: 12, sort: "publishedAt:desc") {
      id
      slug
      title
      thumbnail
      members {
        name
      }
      publishedAt
      file {
        url
        duration
      }
    }
  }
`
