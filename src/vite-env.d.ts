/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
