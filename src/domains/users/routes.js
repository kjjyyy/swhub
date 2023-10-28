import express from "express";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .get((req, res, next) => res.send("나의 프로필 수정 페이지"));
userRouter
  .route("/:id")
  .get((req, res, next) => res.send(":id 번째 유저 프로필 화면"))
  .put((req, res, next) => res.send("업데이트 :id 번째 유저 프로필"));
userRouter
  .route("/delete-account")
  .delete((req, res, next) => res.send("회원 탈퇴"));

export default userRouter;
