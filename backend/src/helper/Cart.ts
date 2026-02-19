import { Cart } from "../models/Cart.model.js";

export async function getCart(userId: String, guestId: String) {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId: guestId });
  }
  return null;
}
