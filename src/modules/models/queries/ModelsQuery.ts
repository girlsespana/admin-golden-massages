import {graphql} from "@gql";

const ModelsQuery = graphql(`
    query Models($first: Int, $after: String, $isActive: Boolean, $id: String, $name_Icontains: String) {
        models(first: $first, after: $after, isActive: $isActive, id: $id, name_Icontains: $name_Icontains) {
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