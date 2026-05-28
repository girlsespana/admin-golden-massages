import {graphql} from "@gql";

const deleteModelMutation = graphql(`
  mutation deleteModel($modelId: String!) {
      deleteModel(input: {modelId: $modelId}) {
          success
      }
  }
`)

export default deleteModelMutation;