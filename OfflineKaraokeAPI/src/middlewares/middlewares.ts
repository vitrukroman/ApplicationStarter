import compression from "compression";
import { Application } from "express";
import session from "express-session";
import passport from "passport";
import { IConfig } from "../../config/createConfig";

export default (app: Application, config: IConfig) => {
  app.use(compression());
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: [config.session.key],
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};
