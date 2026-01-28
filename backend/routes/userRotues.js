const { Router } = require("express");
const { handleSignup } = require("../controllers/userControler");
const router = Router();

router.post("/signup",handleSignup)


module.exports = { router };
