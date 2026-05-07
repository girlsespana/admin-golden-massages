import { graphql } from '@gql'

const MeQuery = graphql(`
  query Me {
    me {
      id
      name
      email
      website
      isActive
      type
      modelsQty
      activeWomanModels
      activeTransModels
      verifiedModels
      phoneNumbers{
        edges {
          node {
            id
            phone
            type
          }
        }
      }
      city{
        id
        name
      }
    }
  }
`)

export default MeQuery;