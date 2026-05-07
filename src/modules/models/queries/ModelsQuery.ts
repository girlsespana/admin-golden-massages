import {graphql} from "@gql";

const ModelsQuery = graphql(`
    query Models($first: Int, $after: String, $isActive: Boolean, $isVerified: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {
        models(first: $first, after: $after, isActive: $isActive, isVerified: $isVerified, id: $id, city: $cityId, name_Icontains: $name_Icontains) {
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
                    isVerified
                    isFeatured
                    activationDate
                    createdAt
                    updatedAt
                    user {
                        id
                        name
                        email
                    }
                    city{
                        id
                        name
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