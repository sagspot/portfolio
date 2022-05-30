declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_URI: string;

    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;

    AWS_BUCKET: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_REGION: string;
  }
}
