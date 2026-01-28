import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setisDragging] = useState(false);
  const [startX, setstartX] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(false);
  const [canScrollLeft, setcanScrollLeft] = useState(false);
  const [canScrollRight, setcanScrollRight] = useState(true);
  const ar = [
    {
      _id: "1",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          alttext: "stylish jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          alttext: "stylish jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          alttext: "stylish jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          alttext: "stylish jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          alttext: "stylish jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          alttext: "stylish jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          alttext: "stylish jacket",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftscroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftscroll + container.clientWidth;
      setcanScrollLeft(leftscroll > 0);
      setcanScrollRight(rightScrollable);
    }
  };

  const handleMousedown = (e) => {
    setisDragging(true);
    setstartX(e.pageX - scrollRef.current.offSetLeft);
    setscrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMousemove = (e) => {
    if (!isDragging) {
      return;
    }
    const x = e.pageX - scrollRef.current.offSetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setisDragging(false);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);

      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight of the runway, freshly added to
          keep you wardrobe on the cutting edge of fashion.
        </p>

        <div
          className={`absolute right-0 bottom-[-30px] flex space-x-2 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <button
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
            className={`p-2 rounded cursor-pointer border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl " />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded cursor-pointer border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl " />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
        onMouseDown={handleMousedown}
        onMouseMove={handleMousemove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {ar.map((product) => {
          return (
            <div
              key={product._id}
              className="min-w-full sm:min-w-1/2 lg:min-w-[30%] relative"
            >
              <img
                className="w-full object-cover rounded-lg h-[500px]"
                src={product.images[0].url}
                alt={product.images[0]?.alttext || product.name}
                draggable={false}
              />
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">$ {product.price}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivals;
