import {IConfig} from "../../config/createConfig";
import googleAuth from "./googleAuth";

export default (config: IConfig) => {
  googleAuth(config);
};
