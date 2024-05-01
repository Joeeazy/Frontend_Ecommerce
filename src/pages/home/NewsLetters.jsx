import React from "react";
import { Link } from "react-router-dom";

export default function NewsLetters() {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="title mb-8">Follow Products and Discounts on Instagram</h2>

      {/* instagram grid */}
      <div className="flex  gap-4 items-center justify-center mb-20">
        <Link to="/">
          <img src="/images/instagram/img1.png" alt="instagram" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img2.png" alt="instagram" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img3.png" alt="instagram" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img4.png" alt="instagram" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img5.png" alt="instagram" />
        </Link>
        <Link to="/">
          <img src="/images/instagram/img6.png" alt="instagram" />
        </Link>
      </div>

      {/* NewsLetters */}
      <div>
        <h2 className="title mb-8">Or Subscribe to the NewsLetter</h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value={"Submit"}
            className="bg-black text-white px-6 py-1 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
}
