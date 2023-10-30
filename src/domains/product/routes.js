import express from "express";
import { privateOnly } from "../../middlewares/auth";
import {
  getProductList,
  getUpload,
  postProduct,
} from "./controllers/productController";
import { productUpload } from "../../middlewares/uploads";
import { validateDto } from "../../middlewares/validateDto";
import createProductDto from "./dtos/create-productDto";

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getProductList)
  .post(
    privateOnly,
    productUpload.single("productImage"),
    validateDto(createProductDto),
    postProduct
  );
productRouter.route("/upload").all(privateOnly).get(getUpload);

export default productRouter;
