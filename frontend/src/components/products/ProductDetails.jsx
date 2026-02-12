import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
const selectedProduct = {
  name: "stylish jacket",
  price: 120,
  originalPrice: 150,
  description: "this is a stylish jacket perfect for any ocassion",
  brand: "fashion brand",
  material: "leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=6",
      alttext: "stylish jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=7",
      alttext: "stylish Shirt",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        alttext: "stylish Shirt",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        alttext: "stylish Shirt",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        alttext: "stylish Shirt",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        alttext: "stylish Shirt",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setmainImage] = useState("http://");
  const [selectedSize, setselectedSize] = useState("");
  const [selectedColor, setselectedColor] = useState("");
  const [quantity, setquantity] = useState(1);
  const [isButtonDisabled, setisButtonDisabled] = useState(false);

  const handleQuantityChange = (action) => {
    if (action == "increase") {
      setquantity((prev) => prev + 1);
    }
    if (action == "decrease" && quantity > 1) {
      setquantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and a color", {
        position: "bottom-center",
      });
      return;
    }
    setisButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product Added Successfully", { position: "top-right" });
      setisButtonDisabled(false);
    }, 5000);
  };

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setmainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  return (
    <div className="p-6 ">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex  flex-col md:flex-row">
          <div className="hidden  md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, i) => (
              <img
                key={i}
                src={image.url}
                alt={image.alttext || `thumbnail${i}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                onClick={() => setmainImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2 ">
            <div className="mb-4 ">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:hidden bg-red-300 flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, i) => (
              <img
                key={i}
                src={image.url}
                alt={image.alttext || `thumbnail${i}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                onClick={() => setmainImage(image.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2 ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice && selectedProduct.originalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setselectedColor(color)}
                    className={`w-8 h-8 cursor-pointer rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 ">Sizes:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    onClick={() => setselectedSize(size)}
                    className={`px-4 py-2 rounded cursor-pointer border ${selectedSize === size ? "bg-black text-white" : ""}`}
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-2 py-1 bg-gray-200 cursor-pointer rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-2 cursor-pointer py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              disabled={isButtonDisabled}
              onClick={() => {
                handleAddToCart();
              }}
              className={`bg-black  text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}
            >
              {isButtonDisabled ? "Adding" : "Add To Cart"}
            </button>
          </div>
          <div className="mt-10 text-gray-700">
            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
            <table className="w-full text-left text-sm text-gray-600">
              <tbody className="">
                <tr className="">
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectedProduct.brand}</td>
                </tr>
                <tr className="">
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectedProduct.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            Check This Out
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
