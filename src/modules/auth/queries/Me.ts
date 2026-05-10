import { graphql } from '@gql'

const MeQuery = graphql(`
  query Me {
    me {
      id
      name
      email
      isActive
      phoneNumbers{
        edges {
          node {
            id
            phone
            type
          }
        }
      }
    }
  }
`)

export default MeQuery;