import React from "react";

const checkout = {
  _id: "23232",
  createdAt: Date.now(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Shirt",
      color: "Red",
      size: "L",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "kalka Ji",
    city: "new delhi",
    country: "India",
  },
};

const OrderConfirmation = () => {
  const calculateEstimatedDelivery = (createdAt)=>{
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
  }
    return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-[#14A9A6] mb-8">
        Thank Your For Ordering
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div className="">
              <h2 className="text-xl font-semibold ">
                Order Id: {checkout._id}
              </h2>
              <p className="text-gray-500 ">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="">
              <p className="text-[#14A9A6] text-sm">
                Estimated Delivery : {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
