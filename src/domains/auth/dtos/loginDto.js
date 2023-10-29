import { ValidationError } from "../../../errors";
import { isEmail, isString } from "../../../utils/types";

class loginDto {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  validate() {
    const { email, password } = this;

    if (!isEmail(email)) {
      throw new ValidationError("올바른 이메일 형식이 아닙니다.", "login");
    }

    if (!isString(password)) {
      throw new ValidationError(
        "비밀번호가 일치하지 않거나 올바르지 않습니다.",
        "login"
      );
    }
  }
}

export default loginDto;
