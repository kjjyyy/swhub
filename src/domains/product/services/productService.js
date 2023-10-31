import { NotFoundError } from "../../../errors";
import Product from "../models/ProductModel";
import querystring from "node:querystring";

export const findAll = () => {
  return Product.find({}).sort({ createdAt: "desc" }).populate("owner");
};

export const createProduct = ({
  fileUrl,
  designCode,
  title,
  description,
  price,
  owner,
}) => {
  return Product.create({
    fileUrl,
    designCode,
    title,
    description,
    price,
    owner,
  });
};

export const productDetail = async (productId) => {
  const product = await Product.findById(productId).populate("owner");
  if (!product) {
    throw new NotFoundError("요청하신 비디오는 존재하지 않습니다.");
  }
  product.designCode = querystring.unescape(product.designCode);
  return product;
};
