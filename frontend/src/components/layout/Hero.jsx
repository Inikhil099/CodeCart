import React from "react";
import heroImg from "../../assets/HeroImg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover"
        alt="ShotIt"
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation outfits with fast worldwide shipping
          </p>
          <Link
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
            to={"#"}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
