import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  password: { type: String, required: true, trim: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Auth = mongoose.model("Auth", authSchema);
export default Auth;
