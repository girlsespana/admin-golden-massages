import { gql } from '@apollo/client'

const createModelMutation = gql`
  mutation createModel($input: CreateModelInput!) {
    createModel(input: $input) {
      model {
        id
      }
    }
  }
`

export default createModelMutation
