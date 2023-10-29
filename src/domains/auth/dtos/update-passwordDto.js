import { ValidationError } from "../../../errors";
import { isString } from "../../../utils/types";

class updatePasswordDto {
  constructor({ oldPassword, newPassword, newPasswordConfirm }) {
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
    this.newPasswordConfirm = newPasswordConfirm;
  }

  validate() {
    const { oldPassword, newPassword, newPasswordConfirm } = this;

    if (
      !isString(oldPassword) ||
      !isString(newPassword) ||
      !isString(newPasswordConfirm)
    ) {
      throw new ValidationError(
        "유효하지 않는 비밀번호 변경 데이터입니다.",
        "change-password"
      );
    }

    if (newPassword !== newPasswordConfirm) {
      throw new ValidationError(
        "새 비밀번호가 일치하지 않습니다.",
        "change-password"
      );
    }
  }
}

export default updatePasswordDto;
