import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setorderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "standard",
      shippingAddress: { city: "New Delhi", country: "India" },
      orderItems: [
        {
          ProductId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150/?random=1",
        },
        {
          ProductId: "2",
          name: "Shirt",
          price: 100,
          quantity: 3,
          image: "https://picsum.photos/150/?random=2",
        },
      ],
    };
    setorderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p className="">No order Details Found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div className="">
              <h3 className="text-lg md:text-xl font-semibold">
                Order Id: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-md mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-md mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Delivery Pending"}
              </span>
            </div>
          </div>

          {/* payment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="">
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="">Payment Method: {orderDetails.paymentMethod}</p>
              <p className="">
                Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>

            <div className="">
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="">Shipping Method: {orderDetails.shippingMethod}</p>
              <p className="">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* Products  */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr className="py-2 px-4">Name</tr>
                <tr className="py-2 px-4">Unit Price</tr>
                <tr className="py-2 px-4">Quantity</tr>
                <tr className="py-2 px-4">Total</tr>
              </thead>
              <tbody className="">
                {orderDetails.orderItems.map((item) => (
                  <tr className="border-b" key={item.ProductId}>
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`products/${item.ProductId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">$ {item.price}</td>
                    <td className="py-2 px-4">$ {item.quantity}</td>
                    <td className="py-2 px-4">
                      $ {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link to={"/my-orders"} className="text-blue-500 hover:underline">
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
