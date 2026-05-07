import { type CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: {
          unmaskFunctionName: 'getFragmentData',
        },
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
}

export default config