import bcrypt from "bcrypt";
import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  password: { type: String, required: true, trim: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

authSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const Auth = mongoose.model("Auth", authSchema);
export default Auth;
