/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_HARRY_POTTER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
