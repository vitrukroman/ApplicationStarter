import {Application, Request, Response} from "express";
import passport from "passport";

export default (app: Application) => {
  app.get("/auth/google",
    passport.authenticate("google", {
      scope: "openid",
    }));

  app.get("/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/",
    }), (_: Request, res: Response) => {
      res.redirect("/");
    },
  );

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
