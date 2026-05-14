import {graphql} from "@gql";

const ModelsQuery = graphql(`
    query Models($first: Int, $after: String, $isActive: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {
        models(first: $first, after: $after, isActive: $isActive, id: $id, city: $cityId, name_Icontains: $name_Icontains) {
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
            }
            edges {
                cursor
                node {
                    id
                    name
                    description
                    rangeType
                    isActive
                    activationDate
                    createdAt
                    updatedAt
                    user {
                        id
                        name
                        email
                    }
                    images {
                        id
                        imageUrl
                    }
                    
                }
            }
        }
    }

`)

export default ModelsQuery