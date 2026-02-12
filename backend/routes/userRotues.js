import { Router as router } from "express";
import { handleSignup } from "../controllers/userControler";

router.post("/signup",handleSignup)



export {router as UserRouter}
