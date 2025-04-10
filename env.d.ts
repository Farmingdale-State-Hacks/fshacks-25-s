declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production";
      readonly DATABASE_URL: string;
      readonly VITE_BASE_URL: string;
      readonly BETTER_AUTH_SECRET: string;
      readonly DISCORD_CLIENT_ID: string;
      readonly DISCORD_CLIENT_SECRET: string;
      readonly GITHUB_CLIENT_ID: string;
      readonly GITHUB_CLIENT_SECRET: string;
      readonly GOOGLE_CLIENT_ID: string;
      readonly GOOGLE_CLIENT_SECRET: string;
      readonly SENTRY_DSN: string;
      readonly SENTRY_AUTH_TOKEN: string;
      readonly SENTRY_PROJECT: string;
      readonly SENTRY_ORG: string;
      readonly SENTRY_URL: string;
    }
  }
}

export { };
