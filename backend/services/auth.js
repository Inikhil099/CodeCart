import jwt from "jsonwebtoken"


export function setUser(user) {
  return jwt.sign({
  _id: user._id,
  email: user.email,
}, process.env.JWT_SECRET);
}

export function getUser(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}


