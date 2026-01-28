const jwt = require("jsonwebtoken");


function setUser(user) {
  return jwt.sign({
  _id: user._id,
  email: user.email,
}, process.env.JWT_SECRET);
}

function getUser(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { setUser, getUser };
