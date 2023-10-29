import express from "express";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "./controllers/authController";
import { validateDto } from "../../middlewares/validateDto";
import registerAuthDto from "./dtos/registerDto";
import loginDto from "./dtos/loginDto";
import { privateOnly, publicOnly } from "../../middlewares/auth";

const authRouter = express.Router();

authRouter
  .route("/join")
  .all(publicOnly)
  .get(getJoin)
  .post(validateDto(registerAuthDto), postJoin);
authRouter
  .route("/login")
  .all(publicOnly)
  .get(getLogin)
  .post(validateDto(loginDto), postLogin);
authRouter.route("/logout").all(privateOnly).get(logout);
authRouter
  .route("/change-password")
  .get((req, res, next) => res.send("비밀번호 변경 페이지"))
  .put((req, res, next) => res.send("비밀번호 변경 성공"));

export default authRouter;
