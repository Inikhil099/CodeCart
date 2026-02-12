import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const categories = ["Top Wear", "Bottom Wear"];
const colors = [
  "Red",
  "Blue",
  "Black",
  "Green",
  "Yellow",
  "Grey",
  "White",
  "Pink",
  "Beige",
  "Navy",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const materials = [
  "Cotton",
  "Wool",
  "Denim",
  "Polyester",
  "Silk",
  "Linen",
  "Viscose",
  "Fleece",
];
const brands = [
  "Urban Threads",
  "Modern Threads",
  "Street Style",
  "Beach Breeze",
  "Fashionista",
  "ChicStyle",
];

const genders = ["Men", "Women"];

const FilterSidebar = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const PriceRangeDebounceRef = useRef(null);
  const [filters, setfilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setpriceRange] = useState([0, 100]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParam]);
    setfilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setpriceRange([0, params.maxPrice || 0]);
  }, [searchParam]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setfilters(newFilters);
    updateURLparams(newFilters);
  };

  const updateURLparams = (newfilters) => {
    const params = new URLSearchParams();
    Object.keys(newfilters).forEach((key) => {
      if (Array.isArray(newfilters[key]) && newfilters[key].length > 0) {
        params.append(key, newfilters[key].join(","));
      } else if (newfilters[key]) {
        params.append(key, newfilters[key]);
      }
      setSearchParam(params);
      navigate(`?${params.toString()}`);
    });
  };

  // const handlePriceChange = (e) => {
  //   const newPrice = e.target.value;
  //   setpriceRange([0, newPrice]);
  //   const newfilters = { ...filters, minPrice: 0, maxPrice: newPrice };
  //   setfilters(newfilters);
  //   updateURLparams(newfilters);
  // };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setpriceRange([0, newPrice]);
    if (PriceRangeDebounceRef.current) {
      clearTimeout(PriceRangeDebounceRef.current);
    }

    PriceRangeDebounceRef.current = setTimeout(() => {
      const newfilters = {
        ...filters,
        minPrice: 0,
        maxPrice: newPrice,
      };

      setfilters(newfilters);
      updateURLparams(newfilters);
    }, 1500);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* categories  */}
      <div className="mb-6">
        <label
          htmlFor="categories"
          className="text-gray-600 block font-medium mb-2"
        >
          Category
        </label>
        {categories.map((category) => (
          <div className="flex items-center mb-1" key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* genders  */}
      <div className="mb-6">
        <label
          htmlFor="categories"
          className="text-gray-600 block font-medium mb-2"
        >
          Gender
        </label>
        {genders.map((gender) => (
          <div className="flex items-center mb-1" key={gender}>
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* colors  */}
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Colors
        </label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`}
              name="color"
              key={color}
              onClick={handleFilterChange}
              style={{ backgroundColor: color.toLocaleLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* sizes  */}
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Size
        </label>
        {sizes.map((size) => (
          <div className="flex items-center mb-1" key={size}>
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* materials */}
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Materials
        </label>
        {materials.map((material) => (
          <div className="flex items-center mb-1" key={material}>
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brands  */}
      <div className="mb-6">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Brands
        </label>
        {brands.map((brand) => (
          <div className="flex items-center mb-1" key={brand}>
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* price Range  */}

      <div className="mb-8">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          value={priceRange[1]}
          onChange={handlePriceChange}
          min={0}
          max={100}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span className="">$0</span>
          <span className="">${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
