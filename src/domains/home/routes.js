import express from "express";
import {
  getHome,
  getJoin,
  getLogin,
  getLogout,
} from "./controllers/homeController";

const homeRouter = express.Router();

homeRouter.route("/").get(getHome);
homeRouter.route("/join").get(getJoin);
homeRouter.route("/login").get(getLogin);
homeRouter.route("/logout").get(getLogout);

export default homeRouter;
