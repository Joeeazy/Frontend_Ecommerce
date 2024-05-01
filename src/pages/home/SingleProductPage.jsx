import React, { useEffect } from "react";
import { useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function SingleProductPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  //console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/images/products.json"); //fetch package.json
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); //check if res was ok
        }
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        //console.log(product);
        setProducts(product[0]);
        //console.log(products);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    };
    fetchData(); //func call
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const { title, category, price, image, status } = products;
  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-5">
          <a href="/" className="text-gray-600">
            Home
          </a>
          <a href="/shop" className="font-bold text-black">
            {" "}
            / Shop
          </a>
        </div>
        <div className="mt-2 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-mx">
            {/* product img */}
            <div>
              <img src={image} alt="product image" className="w-full" />
            </div>

            {/* product details */}
            <div>
              <h1 className="title text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores eius officia consectetur repudiandae magnam aliquam a
                quas corporis, architecto aliquid nostrum, nam accusantium
                blanditiis dignissimos animi ex reiciendis labore dolor? Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Minima
                dolorem voluptas inventore? A quidem repellat pariatur sit qui.
                Unde assumenda ducimus corrupti in eos sint sequi qui incidunt
                similique consequuntur.
              </p>

              <span className="flex flex-row gap-2 mt-6 my-2 text-xl text-yellow-400 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                {price} KSH
              </p>
              <div className="mt-3">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 md:px-4 md:pxy-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button
                    className="flex justify-center items-center gap-2 w-full py-3 px-4
                   bg-red-500 text-white font-bold border border-red-500 rounded-md
                   ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 g:m-0 md:px-6"
                  >
                    <span>Confirmed Order</span>
                    <FaArrowAltCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black mt-12">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            pariatur provident reprehenderit fugiat sunt ab est, autem obcaecati
            suscipit a. Nulla laudantium quae omnis ipsa, aspernatur incidunt
            laborum blanditiis modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            pariatur provident reprehenderit fugiat sunt ab est, autem obcaecati
            suscipit a. Nulla laudantium quae omnis ipsa, aspernatur incidunt
            laborum blanditiis modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            pariatur provident reprehenderit fugiat sunt ab est, autem obcaecati
            suscipit a. Nulla laudantium quae omnis ipsa, aspernatur incidunt
            laborum blanditiis modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            pariatur provident reprehenderit fugiat sunt ab est, autem obcaecati
            suscipit a. Nulla laudantium quae omnis ipsa, aspernatur incidunt
            laborum blanditiis modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            pariatur provident reprehenderit fugiat sunt ab est, autem obcaecati
            suscipit a. Nulla laudantium quae omnis ipsa, aspernatur incidunt
            laborum blanditiis modi.
          </p>
        </div>
      </div>
    </div>
  );
}
