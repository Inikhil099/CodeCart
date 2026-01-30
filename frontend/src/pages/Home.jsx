import React from "react";
import Hero from "../components/layout/Hero";
import GenderCollection from "../components/products/GenderCollection";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails from "../components/products/ProductDetails";
import ProductGrid from "../components/products/ProductGrid";
import FeaturedCollection from "../components/products/FeaturedCollection";

const placeholderProducts = [
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
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        alttext: "stylish Shirt",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        alttext: "stylish Shirt",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        alttext: "stylish Shirt",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=9",
        alttext: "stylish Shirt",
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="border-none outline-none border-green-400">
      <Hero />
      <GenderCollection />
      <NewArrivals />
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
      <FeaturedCollection />
    </div>
  );
};

export default Home;
