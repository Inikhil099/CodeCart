import React from "react";
import { HiPlus } from "react-icons/hi2";
import { RiDeleteBin3Line } from "react-icons/ri";
import { TbMinus, TbPlus } from "react-icons/tb";

function CartItem() {
  const items = [
     {
      productId:1,
      name :"T-Shirt",
      size:"M",
      color:"red",
      quantity:1,
      price:15,
      image:"https://picsum.photos/200?random=1"
     },
     {
      productId:2,
      name :"jeans",
      size:"M",
      color:"blue",
      quantity:1,
      price:15,
      image:"https://picsum.photos/200?random=2"
     },
     {
      productId:3,
      name :"T-Shirt",
      size:"M",
      color:"red",
      quantity:1,
      price:15,
      image:"https://picsum.photos/200?random=1"
     },
  ]
  return <div className="">
    {items.length <= 0 ? "Add Products to cart": items.map((item,index)=>{
      return (
        <div key={item.productId} className="flex items-start justify-between py-4 border-b">
          <div className="flex items-start">
            <img src={item.image} alt={item.name} className="w-20 h-24 object-cover mr-4 rounded" />
            <div className="">
              <span className="text-lg font-semibold">{item.name}</span>
              <p className="text-sm text-gray-500">Size : {item.size} | Color : {item.color}</p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer"><TbPlus/></button>
                <span className="mx-4 ">{item.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer"><TbMinus/></button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="">${item.price.toLocaleString()}</p>
            <button className="">
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600 cursor-pointer"/>
            </button>
          </div>
        </div>
      )
    })}
  </div>;
}

export default CartItem;
