import { User } from "../models/userModel";
import bcrypt from "bcryptjs";
import { setUser } from "../services/auth";

export async function handleSignup(req, res) {
  try {
    console.log("req made");
    const { firstname, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(existingUser);
      return res.status(400).send("User already exist ,Login");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      firstname,
      email,
      password: hashedPassword,
    });
    const token = setUser(user);
    res.cookie("uid", token);
    return res.status(201).json({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      _id: user._id,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Sorry Internal Server Error");
  }
}
