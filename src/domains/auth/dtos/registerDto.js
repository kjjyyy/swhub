import { ValidationError } from "../../../errors";
import { isEmail, isString, isUsername } from "../../../utils/types";

class registerAuthDto {
  constructor({
    email,
    username,
    password,
    password2,
    firstName,
    lastName,
    address,
  }) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.password2 = password2;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  validate() {
    const {
      email,
      username,
      password,
      password2,
      firstName,
      lastName,
      address,
    } = this;

    if (!isEmail(email)) {
      throw new ValidationError("올바른 이메일 형식이 아닙니다.", "join");
    }

    if (!isUsername(username)) {
      throw new ValidationError("올바른 사용자 이름 형식이 아닙니다.", "join");
    }

    if (!isString(password) || !isString(password2) || password !== password2) {
      throw new ValidationError(
        "비밀번호가 일치하지 않거나 올바르지 않습니다.",
        "join"
      );
    }

    if (!isString(firstName) || !isString(lastName) || !isString(address)) {
      throw new ValidationError("올바른 개인 정보 형식이 아닙니다.", "join");
    }
  }
}

export default registerAuthDto;
