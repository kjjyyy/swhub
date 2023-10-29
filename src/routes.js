import express from "express";
import userRouter from "./domains/user/routes";
import authRouter from "./domains/auth/routes";
import productRouter from "./domains/product/routes";
import homeRouter from "./domains/home/routes";

const router = express.Router();

router.use(homeRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);

export default router;
