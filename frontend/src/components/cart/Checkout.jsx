import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      name: "Stylish jacket",
      size: "M",
      color: "red",
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Stylish jacket",
      size: "L",
      color: "white",
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 190,
};
const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setshippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    country: "",
    phone: "",
  });
  const [checkoutId, setcheckoutId] = useState(null);

  const handleShippingChange = (e) => {
    setshippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!shippingAddress.firstName) {
      toast.error("First Name is required");
      return false;
    }
    if (!shippingAddress.lastName) {
      toast.error("Last Name is required");
      return false;
    }
    if (!shippingAddress.address) {
      toast.error("Address is required");
      return false;
    }
    if (!shippingAddress.city) {
      toast.error("City is required");
      return false;
    }
    if (!shippingAddress.pinCode) {
      toast.error("Pin Code is required");
      return false;
    }
    if (!shippingAddress.country) {
      toast.error("Country is required");
      return false;
    }
    if (!shippingAddress.phone) {
      toast.error("Phone Number is required");
      return false;
    }
    return true;
  };
  const handleCheckout = () => {
    setcheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    // navigate("/order-confirmation")
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>

        {/* form div  */}
        <div className="">
          <h3 className="text-lg mb-4">Contact Details</h3>

          {/* email  */}
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              disabled={true}
              value={"user@gmail.com"}
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            {/* first name */}
            <div className="">
              <label htmlFor="" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                name="firstName"
                value={shippingAddress.firstName}
                onChange={handleShippingChange}
              />
            </div>

            {/* last name  */}
            <div className="">
              <label htmlFor="" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={handleShippingChange}
              />
            </div>
          </div>

          {/* address  */}
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              name="address"
              required
              value={shippingAddress.address}
              onChange={handleShippingChange}
            />
          </div>

          {/* city */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required={true}
                name="city"
                value={shippingAddress.city}
                onChange={handleShippingChange}
              />
            </div>

            {/* pin code  */}
            <div className="">
              <label htmlFor="" className="block text-gray-700">
                Pin Code
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                name="pinCode"
                value={shippingAddress.pinCode}
                onChange={handleShippingChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Country
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              name="country"
              required
              value={shippingAddress.country}
              onChange={handleShippingChange}
            />
          </div>

          {/* phone  */}
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Phone No.
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              name="phone"
              required
              value={shippingAddress.phone}
              onChange={handleShippingChange}
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                onClick={() => {
                  if (validateForm()) {
                    handleCheckout();
                  }
                }}
                className="w-full bg-black text-white py-3 rounded cursor-pointer"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PaypalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed Try Again")}
                />
              </div>
            )}
          </div>
          {/* form end  */}
        </div>
      </div>

      {/* order summary  */}
      <div className="bg-gray-50 p-6 rounded-lg ">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, i) => (
            <div
              className="flex items-start justify-between py-2 border-b"
              key={i}
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div className="">
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocalString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>$ {cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>$ {cart.totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
