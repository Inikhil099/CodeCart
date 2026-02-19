import { Router } from "express";
import {
  GetBestSeller,
  GetNewArrivals,
  GetProductById,
  GetProducts,
  GetSimilarProducts,
} from "../controllers/Product.controller.js";
import { asyncHandler } from "../util/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(GetProducts));
router.get("/best-seller", asyncHandler(GetBestSeller));
router.get("/product/:id", asyncHandler(GetProductById));
router.get("/similar/:id", asyncHandler(GetSimilarProducts));
router.get("/new-arrivals",asyncHandler(GetNewArrivals))

export { router as ProductRouter };
