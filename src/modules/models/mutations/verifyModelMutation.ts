import {graphql} from "@gql";

const verifyModelMutation = graphql(`
  mutation verifyModel($modelId: String!) {
      verifiedModel(input: {modelId: $modelId}){
          model {
              id
          }
      }
  }
`)

export default verifyModelMutation;