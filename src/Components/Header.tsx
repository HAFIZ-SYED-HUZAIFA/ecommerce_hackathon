'use client';

import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <>


      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-10">
          {/* Left Side */}
          <div className="flex items-center justify-start">
            {/* Logo */}
            <p className="text-3xl font-bold text-center sm:text-left">Hekto</p>
          </div>

          {/* Section for Navigation Links */}
          <div className="flex items-center justify-center gap-x-8 w-full sm:w-auto">
            {/* route Links */}
            <ul className="hidden sm:flex gap-x-8">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/pages"}>
                  Pages
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/products"}>
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/shop"}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button
                className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors"
                aria-label="Search"
                title="Search"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search and Navigation */}
      <div className="w-full sm:hidden flex flex-col px-5 py-2 gap-y-2">
        {/* Mobile Search Bar */}
        <div className="flex items-center border rounded-md overflow-hidden bg-gray-100">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 text-sm outline-none bg-transparent"
          />
          <button
            className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors"
            aria-label="Search"
            title="Search"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex justify-around text-sm gap-4">
          <li>
            <Link className="hover:text-[#FB2E86] transition-colors" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FB2E86] transition-colors" href={"/pages"}>
              Pages
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FB2E86] transition-colors" href={"/products"}>
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FB2E86] transition-colors" href={"/blog"}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FB2E86] transition-colors" href={"/shop"}>
              Shop
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FB2E86] transition-colors" href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
