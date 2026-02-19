import jwt from "jsonwebtoken";

export interface ReqUser {
  _id: string | any;
  email: string;
}

export function setUser(user: ReqUser) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!,
  );
}

export function getUser(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!);
}
