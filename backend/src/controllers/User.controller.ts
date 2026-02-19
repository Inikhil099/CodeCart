import bcrypt, { hash } from "bcryptjs";
import { setUser } from "../services/auth.js";
import type { Request, Response } from "express";
import { User } from "../models/User.model.js";
const maxAge = 1000 * 60 * 60 * 24 * 3;

export async function GetUserProfile(req: Request, res: Response) {
  return res.status(200).json(req.user);
}

export async function handleSignup(req: Request, res: Response) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("All the details are required");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User already exist with this email");
  }
  const salt = await bcrypt.genSalt(11);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  const token = setUser({
    _id: user._id,
    email: user.email,
  });
  res.cookie("uid", token, {
    maxAge,
    httpOnly: true,
  });
  return res.status(201).json({
    _id: user._id,
    name: user.email,
    email: user.email,
  });
}

export async function handleLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password)
    return res.status(400).send("Both Email and Password are required");
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("User not found");
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) return res.status(400).send("Incorrect Password");
  const token = setUser({
    _id: user._id,
    email: user.email,
  });
  res.cookie("uid", token, {
    maxAge,
    httpOnly: true,
  });
  return res.status(201).json({
    _id: user._id,
    name: user.email,
    email: user.email,
  });
}
