import express from "express";
import {
  getChangePassword,
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
  updatePassword,
} from "./controllers/authController";
import { validateDto } from "../../middlewares/validateDto";
import registerAuthDto from "./dtos/registerDto";
import loginDto from "./dtos/loginDto";
import { privateOnly, publicOnly } from "../../middlewares/auth";
import updatePasswordDto from "./dtos/update-passwordDto";

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
  .all(privateOnly)
  .get(getChangePassword)
  .put(validateDto(updatePasswordDto), updatePassword);

export default authRouter;
