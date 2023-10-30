import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  firstName: { type: String, required: true, default: "길동", trim: true },
  lastName: { type: String, required: true, default: "홍", trim: true },
  address: { type: String, required: true, default: "지구", trim: true },
  avatarUrl: { type: String, default: "" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

userSchema.pre("validate", function (next) {
  this.firstName = this.firstName.trim();
  this.lastName = this.lastName.trim();
  this.address = this.address.trim();

  if (this.firstName === "") {
    this.firstName = "길동";
  }
  if (this.lastName === "") {
    this.lastName = "홍";
  }
  if (this.address === "") {
    this.address = "지구";
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
