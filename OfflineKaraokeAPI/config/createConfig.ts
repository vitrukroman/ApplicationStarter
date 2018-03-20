interface IConfig {
  google: {
    auth2: {
      client: {
        id: string;
        secret: string;
      },
      callbackURL: string;
    },
  };
  session: {
    key: string;
  };
  port: number;
}

interface IEnvVariables {
  COOKIE_KEY: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
}

export default (env: IEnvVariables): IConfig => ({
  google: {
    auth2: {
      callbackURL: "http://localhost:3001/auth/google/callback",

      client: {
        id: env.GOOGLE_CLIENT_ID,
        secret: env.GOOGLE_CLIENT_SECRET,
      },
    },
  },
  port: 3001,
  session: {
    key: env.COOKIE_KEY,
  },
});

export {
  IConfig,
  IEnvVariables,
};
