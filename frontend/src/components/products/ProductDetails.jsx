import React from "react";
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
      url: "https://picsum.photos/500/500?random=7",
      alttext: "stylish jacket",
    },
  ],
};
const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, i) => (
              <img
                key={i}
                src={image.url}
                alt={image.alttext || `thumbnail${i}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
