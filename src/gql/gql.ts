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
  "\n  query Me {\n    me {\n      id\n      name\n      email\n      website\n      isActive\n      type\n      modelsQty\n      activeWomanModels\n      activeTransModels\n      verifiedModels\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n      city{\n        id\n        name\n      }\n    }\n  }\n": typeof types.MeDocument;
  "\n    mutation createBannerMutation($input: CreateBannerInput!) {\n        createBanner(input: $input){\n            banner {\n                id\n            }\n        }\n    }\n": typeof types.CreateBannerMutationDocument;
  "\n  mutation deleteBannerMutation($input: DeleteBannerInput!) {\n      deleteBanner(input: $input) {\n          success\n      }\n  }\n": typeof types.DeleteBannerMutationDocument;
  "\n  mutation editBanner($input: EditBannerInput!){\n      editBanner(input: $input){\n          banner {\n              id\n          }\n      }\n  }\n": typeof types.EditBannerDocument;
  "\n  query bannersQuery {\n      banners{\n          pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n          }\n          edges {\n              node {\n                  id\n                  title\n                  url\n                  mobileUrl\n                  action\n                  category\n                  position\n                  isActive\n                  city {\n                      id\n                      name\n                  }\n              }\n          }\n      }\n  }\n": typeof types.BannersQueryDocument;
  "\n  mutation activateModel($modelId: String!, $rangeType: ModelRangeType!, $days: ModelActivationDays!) {\n      activateModel(input: {modelId: $modelId, rangeType: $rangeType, days: $days}) {\n          model {\n              id\n          }\n      }\n  }\n": typeof types.ActivateModelDocument;
  "\n  mutation deactivateModel($modelId: String!){\n      deactivateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  } \n": typeof types.DeactivateModelDocument;
  "\n  mutation featuredModel($input: FeaturedModelInput!) {\n      featuredModel(input: $input){\n          model {\n              id\n          }\n      }\n  }\n": typeof types.FeaturedModelDocument;
  "\n  mutation verifyModel($modelId: String!) {\n      verifiedModel(input: {modelId: $modelId}){\n          model {\n              id\n          }\n      }\n  }\n": typeof types.VerifyModelDocument;
  "\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            isVerified\n            isFeatured\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            expirationDate\n            featuredDate\n            featuredExpirationDate\n            subscriptions {\n                id\n                rangeType\n                startDate\n                daysPurchased\n                endDate\n                isActive\n                createdAt\n            }\n            city{\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            verificationImages {\n                imageUrl\n                id\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n": typeof types.ModelDocument;
  "\n    query Models($first: Int, $after: String, $isActive: Boolean, $isVerified: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, isVerified: $isVerified, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    isVerified\n                    isFeatured\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    city{\n                        id\n                        name\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n": typeof types.ModelsDocument;
};
const documents: Documents = {
  "\n    mutation LoginMutation($email: String!, $password: String!) {\n        tokenAuth(input: { email: $email, password: $password }) {\n            token\n            payload\n            refreshExpiresIn\n            user {\n                isStaff\n            }\n        }\n    }\n":
    types.LoginMutationDocument,
  "\n  query Me {\n    me {\n      id\n      name\n      email\n      website\n      isActive\n      type\n      modelsQty\n      activeWomanModels\n      activeTransModels\n      verifiedModels\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n      city{\n        id\n        name\n      }\n    }\n  }\n":
    types.MeDocument,
  "\n    mutation createBannerMutation($input: CreateBannerInput!) {\n        createBanner(input: $input){\n            banner {\n                id\n            }\n        }\n    }\n":
    types.CreateBannerMutationDocument,
  "\n  mutation deleteBannerMutation($input: DeleteBannerInput!) {\n      deleteBanner(input: $input) {\n          success\n      }\n  }\n":
    types.DeleteBannerMutationDocument,
  "\n  mutation editBanner($input: EditBannerInput!){\n      editBanner(input: $input){\n          banner {\n              id\n          }\n      }\n  }\n":
    types.EditBannerDocument,
  "\n  query bannersQuery {\n      banners{\n          pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n          }\n          edges {\n              node {\n                  id\n                  title\n                  url\n                  mobileUrl\n                  action\n                  category\n                  position\n                  isActive\n                  city {\n                      id\n                      name\n                  }\n              }\n          }\n      }\n  }\n":
    types.BannersQueryDocument,
  "\n  mutation activateModel($modelId: String!, $rangeType: ModelRangeType!, $days: ModelActivationDays!) {\n      activateModel(input: {modelId: $modelId, rangeType: $rangeType, days: $days}) {\n          model {\n              id\n          }\n      }\n  }\n":
    types.ActivateModelDocument,
  "\n  mutation deactivateModel($modelId: String!){\n      deactivateModel(input: {modelId: $modelId}) {\n          model {\n              id\n          }\n      }\n  } \n":
    types.DeactivateModelDocument,
  "\n  mutation featuredModel($input: FeaturedModelInput!) {\n      featuredModel(input: $input){\n          model {\n              id\n          }\n      }\n  }\n":
    types.FeaturedModelDocument,
  "\n  mutation verifyModel($modelId: String!) {\n      verifiedModel(input: {modelId: $modelId}){\n          model {\n              id\n          }\n      }\n  }\n":
    types.VerifyModelDocument,
  "\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            isVerified\n            isFeatured\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            expirationDate\n            featuredDate\n            featuredExpirationDate\n            subscriptions {\n                id\n                rangeType\n                startDate\n                daysPurchased\n                endDate\n                isActive\n                createdAt\n            }\n            city{\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            verificationImages {\n                imageUrl\n                id\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n":
    types.ModelDocument,
  "\n    query Models($first: Int, $after: String, $isActive: Boolean, $isVerified: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, isVerified: $isVerified, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    isVerified\n                    isFeatured\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    city{\n                        id\n                        name\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n":
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
  source: "\n  query Me {\n    me {\n      id\n      name\n      email\n      website\n      isActive\n      type\n      modelsQty\n      activeWomanModels\n      activeTransModels\n      verifiedModels\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n      city{\n        id\n        name\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      email\n      website\n      isActive\n      type\n      modelsQty\n      activeWomanModels\n      activeTransModels\n      verifiedModels\n      phoneNumbers{\n        edges {\n          node {\n            id\n            phone\n            type\n          }\n        }\n      }\n      city{\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation createBannerMutation($input: CreateBannerInput!) {\n        createBanner(input: $input){\n            banner {\n                id\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation createBannerMutation($input: CreateBannerInput!) {\n        createBanner(input: $input){\n            banner {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation deleteBannerMutation($input: DeleteBannerInput!) {\n      deleteBanner(input: $input) {\n          success\n      }\n  }\n",
): (typeof documents)["\n  mutation deleteBannerMutation($input: DeleteBannerInput!) {\n      deleteBanner(input: $input) {\n          success\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation editBanner($input: EditBannerInput!){\n      editBanner(input: $input){\n          banner {\n              id\n          }\n      }\n  }\n",
): (typeof documents)["\n  mutation editBanner($input: EditBannerInput!){\n      editBanner(input: $input){\n          banner {\n              id\n          }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query bannersQuery {\n      banners{\n          pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n          }\n          edges {\n              node {\n                  id\n                  title\n                  url\n                  mobileUrl\n                  action\n                  category\n                  position\n                  isActive\n                  city {\n                      id\n                      name\n                  }\n              }\n          }\n      }\n  }\n",
): (typeof documents)["\n  query bannersQuery {\n      banners{\n          pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n          }\n          edges {\n              node {\n                  id\n                  title\n                  url\n                  mobileUrl\n                  action\n                  category\n                  position\n                  isActive\n                  city {\n                      id\n                      name\n                  }\n              }\n          }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation activateModel($modelId: String!, $rangeType: ModelRangeType!, $days: ModelActivationDays!) {\n      activateModel(input: {modelId: $modelId, rangeType: $rangeType, days: $days}) {\n          model {\n              id\n          }\n      }\n  }\n",
): (typeof documents)["\n  mutation activateModel($modelId: String!, $rangeType: ModelRangeType!, $days: ModelActivationDays!) {\n      activateModel(input: {modelId: $modelId, rangeType: $rangeType, days: $days}) {\n          model {\n              id\n          }\n      }\n  }\n"];
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
  source: "\n  mutation featuredModel($input: FeaturedModelInput!) {\n      featuredModel(input: $input){\n          model {\n              id\n          }\n      }\n  }\n",
): (typeof documents)["\n  mutation featuredModel($input: FeaturedModelInput!) {\n      featuredModel(input: $input){\n          model {\n              id\n          }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation verifyModel($modelId: String!) {\n      verifiedModel(input: {modelId: $modelId}){\n          model {\n              id\n          }\n      }\n  }\n",
): (typeof documents)["\n  mutation verifyModel($modelId: String!) {\n      verifiedModel(input: {modelId: $modelId}){\n          model {\n              id\n          }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            isVerified\n            isFeatured\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            expirationDate\n            featuredDate\n            featuredExpirationDate\n            subscriptions {\n                id\n                rangeType\n                startDate\n                daysPurchased\n                endDate\n                isActive\n                createdAt\n            }\n            city{\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            verificationImages {\n                imageUrl\n                id\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    query Model($id:ID!) {\n        model(id:$id){\n            id\n            gender\n            name\n            height\n            metrics\n            weight\n            age\n            hairColor\n            eyesColor\n            nationality\n            boobs\n            smoker\n            piercings\n            tattoos\n            party\n            gender\n            languages\n            rangeType\n            description\n            isActive\n            isVerified\n            isFeatured\n            services\n            nonVisibleServices\n            attributes\n            activationDate\n            expirationDate\n            featuredDate\n            featuredExpirationDate\n            subscriptions {\n                id\n                rangeType\n                startDate\n                daysPurchased\n                endDate\n                isActive\n                createdAt\n            }\n            city{\n                id\n                name\n            }\n            images {\n                id\n                imageUrl\n            }\n            verificationImages {\n                imageUrl\n                id\n            }\n            videos {\n                id\n                videoUrl\n            }\n            user {\n                name\n                phoneNumbers {\n                    edges {\n                        node {\n                            id\n                            phone\n                            type\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query Models($first: Int, $after: String, $isActive: Boolean, $isVerified: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, isVerified: $isVerified, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    isVerified\n                    isFeatured\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    city{\n                        id\n                        name\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n",
): (typeof documents)["\n    query Models($first: Int, $after: String, $isActive: Boolean, $isVerified: Boolean, $id: String, $cityId: ID, $name_Icontains: String) {\n        models(first: $first, after: $after, isActive: $isActive, isVerified: $isVerified, id: $id, city: $cityId, name_Icontains: $name_Icontains) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n                endCursor\n                startCursor\n            }\n            edges {\n                cursor\n                node {\n                    id\n                    name\n                    description\n                    rangeType\n                    isActive\n                    isVerified\n                    isFeatured\n                    activationDate\n                    createdAt\n                    updatedAt\n                    user {\n                        id\n                        name\n                        email\n                    }\n                    city{\n                        id\n                        name\n                    }\n                    images {\n                        id\n                        imageUrl\n                    }\n                    \n                }\n            }\n        }\n    }\n\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
