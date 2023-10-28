import Auth from "../models/AuthModel";

export const registerAuthentication = async (password, authId) => {
  const newAuth = await Auth.create({ password });
  newAuth.user = authId;
  await newAuth.save();
};
