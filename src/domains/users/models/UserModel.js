import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  firstName: { type: String, required: true, default: "길동", trim: true },
  lastName: { type: String, required: true, default: "홍", trim: true },
  address: { type: String, required: true, default: "지구", trim: true },
  avatarUrl: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);
export default User;
