import React from "react";
import { Link } from "react-router-dom";
const companyLogo = [
  { id: 1, img: "/images/companies/brand-1.png" },
  { id: 2, img: "/images/companies/brand-2.png" },
  { id: 3, img: "/images/companies/brand-3.png" },
  { id: 4, img: "/images/companies/brand4.png" },
  { id: 5, img: "/images/companies/brand-5.png" },
];

export default function Category() {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {/* brands logo */}
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* models grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 ">
        <p className="font-semibold uppercase text-center md:-rotate-90 text-black text-xl md:p-1.5 p-2 rounded-sm inline-flex">
          Explore New and Popular Styles
        </p>
        <div>
          <Link to="/">
            <img
              src="/images/models/card.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/models/01.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
            <img
              src="/images/models/model-02.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
            <img
              src="/images/models/model-03.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
            <img
              src="/images/models/model-04.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
