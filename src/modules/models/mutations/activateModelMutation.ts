import {graphql} from "@gql";

const activateModelMutation = graphql(`
  mutation activateModel($modelId: String!) {
      activateModel(input: {modelId: $modelId}) {
          model {
              id
          }
      }
  }
`)

export default activateModelMutation