import { ValidationError } from "../../../errors";
import { isPrice, isString } from "../../../utils/types";
import querystring from "node:querystring";

class createProductDto {
  constructor({ title, description, price, designCode }) {
    this.title = title;
    this.description = description;
    this.price = Number(price);
    this.designCode = designCode;
  }

  validate() {
    const { title, description, price, designCode } = this;
    if (!isString(title)) {
      throw new ValidationError("올바른 제목 형식이 아닙니다.", "upload");
    }

    if (!isString(description)) {
      throw new ValidationError("올바른 설명 형식이 아닙니다.", "upload");
    }

    if (!isPrice(price)) {
      throw new ValidationError("올바른 가격 형식이 아닙니다.", "upload");
    }

    if (!isString(designCode)) {
      throw new ValidationError("올바른 설계 코드 형식이 아닙니다.", "upload");
    }
  }

  encoding() {
    this.designCode = querystring.escape(this.designCode);
  }
}

export default createProductDto;
