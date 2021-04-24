import { gql } from 'graphql-request'

export const GET_EPISODE_PAGE = gql`
  query GET_EPISODE_PAGE($id: ID!) {
    episode(id: $id) {
      slug
      title
      thumbnail
      members {
        name
        avatar
      }
      publishedAt
      description
      file {
        url
        duration
      }
    }
  }
`
