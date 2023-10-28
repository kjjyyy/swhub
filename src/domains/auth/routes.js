import express from "express";
import { getJoin, postJoin } from "./controllers/authController";

const authRouter = express.Router();

authRouter.route("/join").get(getJoin).post(postJoin);
authRouter
  .route("/login")
  .get((req, res, next) => res.send("login 페이지"))
  .post((req, res, next) => res.send("login 성공"));
authRouter.route("/logout").post((req, res, next) => res.send("logout 성공"));
authRouter
  .route("/change-password")
  .get((req, res, next) => res.send("비밀번호 변경 페이지"))
  .put((req, res, next) => res.send("비밀번호 변경 성공"));

export default authRouter;
