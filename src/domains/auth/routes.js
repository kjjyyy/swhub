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
import { privateOnly, publicOnly } from "../../middlewares/auth";
import { validateDto } from "../../middlewares/validateDto";
import loginDto from "./dtos/loginDto";
import registerAuthDto from "./dtos/registerDto";
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
