import corallogo from "/images/logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import icons from "/images/icons_payment.png";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/icons" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagramSquare className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div class="bg-slate-900 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <p class="text-white text-center py-3 mt-3 mb-3">
          © {currentYear} Coral, Inc.
        </p>
        <div class="my-5  mt-3 mb-3 sm:my-0 sm:mr-2">
          <img src={icons} alt="" />
        </div>
        <div class="flex items-center text-white mr-10 mt-3 mb-3">
          <p class="mr-2">Scroll to Top</p>
          <FaArrowUp class="hidden sm:block mr-20" />
        </div>
      </div>
    </footer>
  );
}

//redo
// <>
//   <div className="flex mb-20 mt-20 items-center justify-center sm:flex-row  ">
//     <div className="px-5 py-10 mr-6">
//       <img src={corallogo} alt="" />
//       <p className="">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
//         <br />
//         corrupti a rerum rem non minus doloribus possimus quas incidunt,
//         <br />
//         voluptas quaerat sunt aliquam adipisci tempore impedit cupiditate
//         <br />
//         voluptates laboriosam odit.
//       </p>
//       <div className="flex gap-10 justify-start mt-3">
//         <FaFacebookF />
//         <FaTwitter />
//         <FaLinkedinIn />
//         <FaInstagramSquare />
//       </div>
//     </div>
//     <div className="flex items-center justify-center gap-20">
//       <div className="px-6">
//         <h2 className="text-xl font-semibold">Catalog</h2>
//         <ul>
//           <li>Necklaces</li>
//           <li>Hoodies</li>
//           <li>Jewelry Box</li>
//           <li>T-Shirt</li>
//           <li>Jacket</li>
//         </ul>
//       </div>
//       <div className="px-6">
//         <h2 className="text-xl font-semibold">About Us</h2>
//         <ul>
//           <li>Our Producers</li>
//           <li>Sitemap</li>
//           <li>FAQ</li>
//           <li>About Us</li>
//           <li>Terms & Conditions</li>
//         </ul>
//       </div>
//       <div className="px-6">
//         <h2 className="text-xl font-semibold">Customer Service</h2>
//         <ul>
//           <li>Contact Us</li>
//           <li>Track Your Order</li>
//           <li>Product Care and Repair</li>
//           <li>Book An Appointment</li>
//           <li>Shipping and Returns</li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   <div className="bg-slate-900 flex flex-row justify-between items-center text-white ">
//     <p className="justify-start ml-10 mt-5 mb-5">&copy; 2022 Coral, Inc.</p>
//     <div className="mt-5 mb-5">
//       <img src={icons} alt="" />
//     </div>
//     <div className="flex items-center mt-5 mb-5">
//       <p className="justify-end mr-2">Scroll to Top</p>
//       <FaArrowUp className="mr-20" />
//     </div>
//   </div>
