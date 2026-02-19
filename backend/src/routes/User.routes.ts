import { Router } from "express";
import {
  GetUserProfile,
  handleLogin,
  handleSignup,
} from "../controllers/User.controller.js";
import { asyncHandler } from "../util/asyncHandler.js";
import { ProtectRoutes } from "../middlewares/middleware.js";

const router = Router();

router.post("/signup", asyncHandler(handleSignup));
router.post("/login", asyncHandler(handleLogin));
router.get("/me", ProtectRoutes, asyncHandler(GetUserProfile));

export { router as UserRouter };
