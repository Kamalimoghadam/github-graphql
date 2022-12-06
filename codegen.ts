import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          Authorization: 'Bearer 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',
        },
      },
    },
  ],
  documents: '**/*.{gql,graphql}',
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
