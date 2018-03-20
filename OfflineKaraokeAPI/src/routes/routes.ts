import {Application} from "express";
import authRoutes from "./authRoutes";
import usersRoutes from "./usersRoutes";

export default (app: Application) => {
  authRoutes(app);
  usersRoutes(app);
};
