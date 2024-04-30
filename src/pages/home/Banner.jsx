import { FaShoppingBag } from "react-icons/fa";
import bannerimg from "/images/banner2.png";

export default function Banner() {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-20 ">
        <div className="md:w-1/2">
          <img src={bannerimg} alt="" />
        </div>
        <div className="md:w-1/2 px-10">
          <h1 className="text-5xl font-light  mb-5">Collections</h1>
          <p>
            You Can Explore And Shop Many Different Collection From Various
            Brands Here
          </p>
          <button className="bg-Black flex gap-2 items-center hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm">
            <FaShoppingBag className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
