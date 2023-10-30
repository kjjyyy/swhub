import Product from "../models/ProductModel";

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
