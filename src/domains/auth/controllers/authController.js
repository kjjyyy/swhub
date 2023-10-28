import registerAuthDto from "../dtos/registerDto";
import * as RegisterService from "../services/registerService";

export const getJoin = (req, res) => {
  return res.render("join");
};

export const postJoin = async (req, res, next) => {
  try {
    const { password2, ...data } = new registerAuthDto(req.body);
    await RegisterService.register(data);
    return res.redirect(303, "/auth/login");
  } catch (error) {
    next(error);
  }
};
