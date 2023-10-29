import { UnauthorizedError } from "../../../errors";
import Auth from "../models/AuthModel";
import bcrypt from "bcrypt";

export const getAuthByUserId = (userId) => {
  return Auth.findOne({ user: userId });
};

export const verifyPassword = async (inputPassword, userPassword) => {
  const isPasswordValid = await bcrypt.compare(inputPassword, userPassword);
  if (!isPasswordValid) {
    throw new UnauthorizedError("잘못된 이메일 또는 비밀번호", "login");
  }
};

export const registerAuthentication = async (password, authId) => {
  const newAuth = await Auth.create({ password });
  newAuth.user = authId;
  await newAuth.save();
};

export const verifyAuth = async (userId, password) => {
  const auth = await getAuthByUserId(userId);
  if (!auth) {
    throw new UnauthorizedError("잘못된 이메일 또는 비밀번호", "login");
  }
  await verifyPassword(password, auth.password);
};
