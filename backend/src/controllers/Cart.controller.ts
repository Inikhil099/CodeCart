import type { Request, Response } from "express";
import { Product } from "../models/Product.model.js";
import { getCart } from "../helper/Cart.js";

export async function AddProductToCart(req: Request, res: Response) {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    return res.status(400).send("Product not found");
  }

  const cart = await getCart(userId, guestId);
  if (!cart) {
    return res.status(400).send("Cart not found");
  }
  const productIndex = cart.Products.findIndex(
    (p) =>
      p.productId.toString() === productId &&
      p.size === size &&
      p.color === color,
  );
  if (productIndex > -1 && cart.Products[productIndex]) {
    cart.Products[productIndex].quantity += quantity;
  } else {
    cart.Products.push({
      productId,
      name: product.name,
      image: product.images[0]?.url,
      price: product.price,
      color: product.colors,
      quantity,
    });
  }

  // cart.totalPrice = cart.Products.reduce((acc,item)=>acc+item.price * item.quantity)

  cart.totalPrice = cart.Products.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    return acc + price * quantity;
  }, 0);
  await cart.save();
  return res.status(200).json(cart);


  
}
