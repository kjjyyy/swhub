export const getJoin = (req, res) => {
  return res.render("join");
};

export const postJoin = (req, res, next) => {
  const { body } = req;
  /*
   * todo
   * 1. 유효성 검사
   * 2. 비밀번호 일치하는지
   * 3. 유저가 이미 존재하는지
   * 4-1. 이미 존재한다면 join page로 리다이렉트
   * 4-2. 존재하지 않는다면 유저 모델에 저장 그리고 비밀번호는 auth모델에 저장 그리고 login 이동
   */
};
