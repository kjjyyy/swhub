import * as UserService from "../../user/services/userService";
import * as AuthService from "../../auth/services/authService";

export const register = async (data) => {
  const { password, ...userData } = data;
  const createdUser = await UserService.createUser(userData);
  await AuthService.registerAuthentication(password, createdUser._id);
};
