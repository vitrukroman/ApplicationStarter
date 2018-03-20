import dotenv from "dotenv";
import express from "express";
import createConfig from "../config/createConfig";
import middlewares from "./middlewares/middlewares";
import routes from "./routes/routes";
import services from "./services/services";

dotenv.config();
const app = express();
const config = createConfig(process.env as any);

services(config);
middlewares(app, config);
routes(app);

app.listen(config.port);
