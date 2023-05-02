export { };

declare global {
  namespace NodeJS {
    // Gives you auto-completion for process.env
    interface ProcessEnv {
      // General
      NODE_ENV: 'development' | 'production' | 'test';
      VUE_APP_DEBUG?: '1' | '0';
      // API
      VUE_APP_API_ACCESS_TOKEN_KEY: string;
      VUE_APP_API_ACCESS_TOKEN_VALUE: string;
      VUE_APP_API_HOST: string;
    }
  }
}
