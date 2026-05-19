/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n    mutation LoginMutation($email: String!, $password: String!) {\n        tokenAuth(input: { email: $email, password: $password }) {\n            token\n            payload\n            refreshExpiresIn\n            user {\n                isStaff\n            }\n        }\n    }\n": typeof types.LoginMutationDocument;
  "\n  query Me {\n    me {\n      id\n      name\n      email\n      isActive\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n    }\n  }\n": typeof types.MeDocument;
  "\n  mutation activateModel($modelId: String!) {\n      activateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  }\n": typeof types.ActivateModelDocument;
  "\n  mutation createModel($input: CreateModelInput!) {\n    createModel(input: $input) {\n      model {\n        id\n      }\n    }\n  }\n": typeof types.CreateModelDocument;
  "\n  mutation deactivateModel($modelId: String!){\n      deactivateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  } \n": typeof types.DeactivateModelDocument;
  "\n  mutation editModel($input: EditModelInput!) {\n    editModel(input: $input) {\n      model {\n        id\n        name\n        age\n        height\n        weight\n        metrics\n        description\n        gender\n        hairColor\n        eyesColor\n        nationality\n        boobs\n        tattoos\n        smoker\n        piercings\n        party\n        languages\n        services\n        nonVisibleServices\n        attributes\n        images {\n          id\n          imageUrl\n        }\n        videos {\n          id\n          videoUrl\n        }\n      }\n    }\n  }\n": typeof types.EditModelDocument;
  "\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            featuredDate\n            city {\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n": typeof types.ModelDocument;
  "\n    query Models($first: Int, $after: String, $isActive: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n": typeof types.ModelsDocument;
};
const documents: Documents = {
  "\n    mutation LoginMutation($email: String!, $password: String!) {\n        tokenAuth(input: { email: $email, password: $password }) {\n            token\n            payload\n            refreshExpiresIn\n            user {\n                isStaff\n            }\n        }\n    }\n":
    types.LoginMutationDocument,
  "\n  query Me {\n    me {\n      id\n      name\n      email\n      isActive\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n    }\n  }\n":
    types.MeDocument,
  "\n  mutation activateModel($modelId: String!) {\n      activateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  }\n":
    types.ActivateModelDocument,
  "\n  mutation createModel($input: CreateModelInput!) {\n    createModel(input: $input) {\n      model {\n        id\n      }\n    }\n  }\n":
    types.CreateModelDocument,
  "\n  mutation deactivateModel($modelId: String!){\n      deactivateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  } \n":
    types.DeactivateModelDocument,
  "\n  mutation editModel($input: EditModelInput!) {\n    editModel(input: $input) {\n      model {\n        id\n        name\n        age\n        height\n        weight\n        metrics\n        description\n        gender\n        hairColor\n        eyesColor\n        nationality\n        boobs\n        tattoos\n        smoker\n        piercings\n        party\n        languages\n        services\n        nonVisibleServices\n        attributes\n        images {\n          id\n          imageUrl\n        }\n        videos {\n          id\n          videoUrl\n        }\n      }\n    }\n  }\n":
    types.EditModelDocument,
  "\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            featuredDate\n            city {\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n":
    types.ModelDocument,
  "\n    query Models($first: Int, $after: String, $isActive: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n":
    types.ModelsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation LoginMutation($email: String!, $password: String!) {\n        tokenAuth(input: { email: $email, password: $password }) {\n            token\n            payload\n            refreshExpiresIn\n            user {\n                isStaff\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation LoginMutation($email: String!, $password: String!) {\n        tokenAuth(input: { email: $email, password: $password }) {\n            token\n            payload\n            refreshExpiresIn\n            user {\n                isStaff\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Me {\n    me {\n      id\n      name\n      email\n      isActive\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      email\n      isActive\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation activateModel($modelId: String!) {\n      activateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  }\n",
): (typeof documents)["\n  mutation activateModel($modelId: String!) {\n      activateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createModel($input: CreateModelInput!) {\n    createModel(input: $input) {\n      model {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation createModel($input: CreateModelInput!) {\n    createModel(input: $input) {\n      model {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation deactivateModel($modelId: String!){\n      deactivateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  } \n",
): (typeof documents)["\n  mutation deactivateModel($modelId: String!){\n      deactivateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  } \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation editModel($input: EditModelInput!) {\n    editModel(input: $input) {\n      model {\n        id\n        name\n        age\n        height\n        weight\n        metrics\n        description\n        gender\n        hairColor\n        eyesColor\n        nationality\n        boobs\n        tattoos\n        smoker\n        piercings\n        party\n        languages\n        services\n        nonVisibleServices\n        attributes\n        images {\n          id\n          imageUrl\n        }\n        videos {\n          id\n          videoUrl\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation editModel($input: EditModelInput!) {\n    editModel(input: $input) {\n      model {\n        id\n        name\n        age\n        height\n        weight\n        metrics\n        description\n        gender\n        hairColor\n        eyesColor\n        nationality\n        boobs\n        tattoos\n        smoker\n        piercings\n        party\n        languages\n        services\n        nonVisibleServices\n        attributes\n        images {\n          id\n          imageUrl\n        }\n        videos {\n          id\n          videoUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            featuredDate\n            city {\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            featuredDate\n            city {\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query Models($first: Int, $after: String, $isActive: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n",
): (typeof documents)["\n    query Models($first: Int, $after: String, $isActive: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
