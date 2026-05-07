import { graphql } from '@gql'

const ModelQuery = graphql(`
    query Model($id:ID!) {
        model(id:$id){
            id
            gender
            name
            height
            metrics
            weight
            age
            hairColor
            eyesColor
            nationality
            boobs
            smoker
            piercings
            tattoos
            party
            gender
            languages
            rangeType
            description
            isActive
            isVerified
            isFeatured
            services
            nonVisibleServices
            attributes
            activationDate
            expirationDate
            featuredDate
            featuredExpirationDate
            subscriptions {
                id
                rangeType
                startDate
                daysPurchased
                endDate
                isActive
                createdAt
            }
            city{
                id
                name
            }
            images {
                id
                imageUrl
            }
            verificationImages {
                imageUrl
                id
            }
            videos {
                id
                videoUrl
            }
            user {
                name
                phoneNumbers {
                    edges {
                        node {
                            id
                            phone
                            type
                        }
                    }
                }
            }
        }
    }
`)

export default ModelQuery