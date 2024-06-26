import React, { useState } from "react";
import { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOptions, setSortOptions] = useState("default");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/images/products.json"); //fetch package.json
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); //check if res was ok
        }
        const data = await response.json();
        setProducts(data);
        //console.log(products);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData(); //func call
  }, []);

  //filtereing func
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  //show all products
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };
  //sorting functionality
  const handleSortChange = (option) => {
    setSortOptions(option);
    //logic for sorting items
    let sortedItems = [...filteredItems];
    //console.log(sortedItems);
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;

      default:
        break;
    }

    setFilteredItems(sortedItems);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Subscribe to the newsletter</h2>

      <div>
        {/* Producr cards */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all btns */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Dresses</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bags")}>Bags</button>
            <button onClick={() => filterItems("Shoe")}>Shoes</button>
          </div>

          {/* Sorting options */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOptions}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="high-to-low">High to Low</option>
              <option value="low-to-high">Low to High</option>
            </select>
          </div>
        </div>
        {/* products data */}
        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
}
