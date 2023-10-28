import express from "express";
import userRouter from "./domains/users/routes";
import authRouter from "./domains/auth/routes";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
