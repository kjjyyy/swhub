import Product from "../models/ProductModel";

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
