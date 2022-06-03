declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_URI: string;

    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;

    SAGSPOT_AWS_BUCKET: string;
    SAGSPOT_AWS_ACCESS_KEY_ID: string;
    SAGSPOT_AWS_SECRET_ACCESS_KEY: string;
    SAGSPOT_AWS_REGION: string;

    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
  }
}
