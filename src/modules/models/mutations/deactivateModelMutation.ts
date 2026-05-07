import {graphql} from "@gql";

const deactivateModelMutation = graphql(`
  mutation deactivateModel($modelId: String!){
      deactivateModel(input: {modelId: $modelId}) {
          model {
              id
          }
      }
  } 
`)

export default deactivateModelMutation