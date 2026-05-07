import {graphql} from "@gql";

const activateModelMutation = graphql(`
  mutation activateModel($modelId: String!, $rangeType: ModelRangeType!, $days: ModelActivationDays!) {
      activateModel(input: {modelId: $modelId, rangeType: $rangeType, days: $days}) {
          model {
              id
          }
      }
  }
`)

export default activateModelMutation