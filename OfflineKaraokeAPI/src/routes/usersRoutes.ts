import {Application, Request, Response} from "express";
import requireAuth from "../middlewares/requireAuth";

export default (app: Application) => {
  app.get("/users", (_: Request, res: Response) => {
    res.json([
      {id: 1, name: "user1"},
      {id: 2, name: "user1"},
      {id: 3, name: "user1"},
      {id: 4, name: "user1"},
      {id: 5, name: "user1"},
    ]);
  });

  app.get("/admins", requireAuth, (_: Request, res: Response) => {
    res.json([
      {id: 1, name: "Admin1"},
      {id: 2, name: "Admin2"},
      {id: 3, name: "Admin3"},
      {id: 4, name: "Admin4"},
      {id: 5, name: "Admin5"},
    ]);
  });

  app.get("/current_user", (req: Request, res: Response) => {
    res.send(req.user);
  });
};
