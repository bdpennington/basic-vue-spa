/// <reference types="vite/client" />

interface ImportMetaEnv {
  // General
  readonly VITE_DEBUG?: '1' | '0';
  // API
  readonly VITE_API_ACCESS_TOKEN_KEY: string;
  readonly VITE_API_ACCESS_TOKEN_VALUE: string;
  readonly VITE_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
