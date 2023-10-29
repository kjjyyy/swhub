import loginDto from "../dtos/loginDto";
import registerAuthDto from "../dtos/registerDto";
import * as LoginService from "../services/loginService";
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

export const getLogin = (req, res) => {
  return res.render("login");
};

export const postLogin = async (req, res, next) => {
  try {
    const { ...data } = new loginDto(req.body);
    const user = await LoginService.login(data);
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/products/");
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
