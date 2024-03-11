import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_API ?? "http://localhost:4000",
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/__generated__/': {
      preset: 'client',
    },
  },
};

export default config;
