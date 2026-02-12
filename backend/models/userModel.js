import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    requierd: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: [
    {
      type: String,
      default: "user",
    },
  ],
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);

