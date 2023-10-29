import * as UserService from "../../user/services/userService";
import * as AuthService from "../../auth/services/authService";
import { UnauthorizedError } from "../../../errors";

export const login = async ({ email, password }) => {
  const user = await UserService.getUserByEmail(email);
  if (!user) {
    throw new UnauthorizedError("잘못된 이메일 또는 비밀번호", "login");
  }
  await AuthService.verifyAuth(user._id, password);
  return user;
};
