import {gql} from '@apollo/client'

const editModelMutation = gql`
  mutation editModel($input: EditModelInput!) {
    editModel(input: $input) {
      model {
        id
        name
        age
        height
        weight
        metrics
        description
        gender
        hairColor
        eyesColor
        nationality
        boobs
        tattoos
        smoker
        piercings
        party
        languages
        services
        images {
          id
          imageUrl
        }
        videos {
          id
          videoUrl
        }
      }
    }
  }
`

export default editModelMutation
