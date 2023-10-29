import express from "express";

const productRouter = express.Router();

productRouter.route("/").get((req, res, next) => res.render("home"));

export default productRouter;
