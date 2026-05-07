import { graphql } from '@gql'

const tokenAuthMutation = graphql(`
    mutation LoginMutation($email: String!, $password: String!) {
        tokenAuth(input: { email: $email, password: $password }) {
            token
            payload
            refreshExpiresIn
            user {
                isStaff
            }
        }
    }
`)


export default tokenAuthMutation