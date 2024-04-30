import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

export default function Navbar() {
  // dropdown sm:screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Arts & collectables", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
        {/* logo */}
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          {/* account and shopping button */}
          <a href="/" className="flex items-center gap-2">
            <FaUserAlt />
            Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </a>
        </div>
        {/* navbar for sm:screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      {/* category items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(
            (
              { title, path },
              index // Corrected destructuring
            ) => (
              <li key={index} className="hover:text-orange-500">
                <Link to={path}>{title}</Link>{" "}
                {/* Changed anchor tag to Link */}
              </li>
            )
          )}
        </ul>
      </div>

      {/* only mobile menu items */}
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
