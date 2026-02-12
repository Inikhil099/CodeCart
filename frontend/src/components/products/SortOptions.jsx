import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setsearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-center">
      <select
        name=""
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        id="sort"
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="" className="">
          Default
        </option>
        <option value="priceAsc" className="">
          Price: Low to High
        </option>
        <option value="priceDesc" className="">
          Price: High to Low
        </option>
        <option value="popularity" className="">
          Popularity
        </option>
      </select>
    </div>
  );
};

export default SortOptions;
