import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    otp: String,
    otpExpires: Date,
    isVerified: {
      type: Boolean,
      default: false,
    },
    name: String,
    email: String,
    password: String,
    address: String,
  },
  { timestamps: true }
);

export default mongoose.model.User || mongoose.model("User", userSchema);