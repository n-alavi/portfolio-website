// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  verificationCode: { type: String },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
