import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { _id: false },
);

const CartSchema = new mongoose.Schema(
  {
    Products: {
      type: [CartItemSchema],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    guestId: {
      type: String,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

export const Cart = mongoose.model("Cart", CartSchema);
