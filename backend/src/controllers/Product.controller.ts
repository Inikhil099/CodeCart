import type { Request, Response } from "express";
import { Product } from "../models/Product.model.js";
import mongoose from "mongoose";

export async function GetProducts(req: Request, res: Response) {
  const {
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  } = req.query;
  let query: any = {};
  if (collection && collection?.toString().toLowerCase() !== "all") {
    query.collection = collection;
  }

  if (category && category?.toString().toLowerCase() !== "all") {
    query.category = category;
  }

  if (material) {
    query.material = { $in: material.toString().split(",") };
  }

  if (brand) {
    query.brand = { $in: brand.toString().split(",") };
  }

  if (size) {
    query.size = { $in: size.toString().split(",") };
  }

  if (color) {
    query.color = { $in: [color] };
  }

  if (gender) {
    query.gender = gender;
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  let sort = {};
  if (sortBy) {
    switch (sortBy) {
      case "priceAsc":
        sort = { price: 1 };
        break;
      case "priceDesc":
        sort = {
          price: -1,
        };
        break;
      case "popularity":
        sort = { rating: -1 };
        break;
      default:
        break;
    }
  }
  let products = await Product.find(query)
    .sort(sort)
    .limit(Number(limit) || 0);
  return res.status(200).json(products);
}

export async function GetProductById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await Product.findOne({
    _id: id,
  });
  console.log(product);
  if (product) {
    return res.status(200).json(product);
  } else {
    return res.status(400).send("Product not found");
  }
}

export async function GetSimilarProducts(req: Request, res: Response) {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });
  if (!product) {
    return res.status(400).send("Product not found");
  }
  const similarProducts = await Product.find({
    gender: product.gender,
    category: product.category,
  }).limit(4);
  return res.status(200).json(similarProducts);
}

export async function GetBestSeller(req: Request, res: Response) {
  console.log("inside best seller");
  const bestSeller = await Product.findOne({}).sort({ rating: -1 });
  if (!bestSeller) {
    return res.status(400).send("There is not best right now");
  }
  return res.status(200).json(bestSeller);
}

export async function GetNewArrivals(req: Request, res: Response) {
  const newArrivals = await Product.find({}).sort({ createdAt: -1 }).limit(8);
  return res.status(200).json(newArrivals)
}
