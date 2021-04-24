declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      GRAPHQL_HOST: string
    }
  }
}

export {}
