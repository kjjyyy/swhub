import express from "express";
import { getHome, getJoin, getLogin } from "./controllers/homeController";

const homeRouter = express.Router();

homeRouter.route("/").get(getHome);
homeRouter.route("/join").get(getJoin);
homeRouter.route("/login").get(getLogin);

export default homeRouter;
