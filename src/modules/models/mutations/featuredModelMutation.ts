import {graphql} from "@gql";

const featuredModelMutation = graphql(`
  mutation featuredModel($input: FeaturedModelInput!) {
      featuredModel(input: $input){
          model {
              id
          }
      }
  }
`)

export default featuredModelMutation;