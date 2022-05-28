declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_URI: string;

    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;

    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: number;
    EMAIL_FROM: string;
  }
}
