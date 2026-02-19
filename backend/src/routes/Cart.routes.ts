import { Router } from "express";
import { asyncHandler } from "../util/asyncHandler.js";
import { AddProductToCart } from "../controllers/Cart.controller.js";

const router = Router()

router.post("/",asyncHandler(AddProductToCart))