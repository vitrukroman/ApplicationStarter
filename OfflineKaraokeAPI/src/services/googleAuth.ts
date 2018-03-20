import passport from "passport";
import {IConfig} from "../../config/createConfig";

const GoogleStrategy = require("passport-google-oauth20").Strategy;

export default (config: IConfig) => {
  passport.use(new GoogleStrategy({
    callbackURL: config.google.auth2.callbackURL,
    clientID: config.google.auth2.client.id,
    clientSecret: config.google.auth2.client.secret,
  }, (_: any, _2: any, profile: any, cb: any) => {
    return cb(null, {
      googleId: profile.id,
    });
  }));

  passport.serializeUser((user: any, cb: any) => cb(null, user));
  passport.deserializeUser((obj: any, cb: any) => cb(null, obj));
};
