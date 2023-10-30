import createProductDto from "../dtos/create-productDto";
import * as UploadProductService from "../services/uploadService";

export const getProductList = (req, res) => {
  return res.render("home");
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postProduct = async (req, res, next) => {
  const {
    session: {
      user: { _id },
    },
    body,
    file,
  } = req;
  try {
    const data = new createProductDto(body);
    data.encoding();
    const productInfo = { ...data, fileUrl: file.path, owner: _id };
    await UploadProductService.upload(productInfo);
    return res.redirect("/");
  } catch (error) {
    next(error);
  }
};
