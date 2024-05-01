import React from "react";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Category from "./Category";
import Collections from "./Collections";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
    </div>
  );
}
