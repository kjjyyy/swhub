import { ValidationError } from "../../../errors";
import createUserDto from "../dtos/createUserDto";
import User from "../models/UserModel";

export const getUserById = (userId) => {
  return User.findById(userId);
};

export const getUserByEmail = (email) => {
  return User.findOne({ email });
};

export const createUser = async (userDetails) => {
  const data = new createUserDto(userDetails);
  const { username, email } = data;
  const user = await existsUser({ $or: [{ username }, { email }] }, true);
  if (user) {
    throw new ValidationError(
      "이미 존재하는 유저 이름 또는 이메일입니다.",
      "join"
    );
  }
  return User.create({ ...data });
};

export const existsUser = (filter, toBoolean = true, options) => {
  const query = User.exists(filter, options);
  return toBoolean ? query.then((user) => Boolean(user)) : query;
};
