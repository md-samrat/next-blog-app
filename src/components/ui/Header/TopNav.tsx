"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

import { BsTwitterX } from "react-icons/bs";
import {
  FaBlog,
  FaFacebook,
  FaInstagram,
  FaRegMoon,
} from "react-icons/fa";

import { IoClose, IoSearch } from "react-icons/io5";

function TopNav() {
  const { isSignedIn } = useUser();
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleSearch = () => {
    setIsOpenSearch(true);
  };

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-1">
        <FaBlog size={38} />
        <p className="text-xl md:text-2xl font-semibold">Blogs</p>
      </div>

      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="flex items-center gap-2">
          {isOpenSearch && (
            <form action="/search" className="flex items-center border border-gray-300 rounded-md px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent"
              />

              <IoClose
                size={20}
                className="cursor-pointer"
                onClick={() => setIsOpenSearch(false)}
              />
            </form>
          )}

          <IoSearch
            onClick={handleSearch}
            size={22}
            className="cursor-pointer"
          />
        </div>

        <FaRegMoon size={22} className="cursor-pointer" />
        <BsTwitterX size={22} className="cursor-pointer" />
        <FaFacebook size={22} className="cursor-pointer" />
        <FaInstagram size={22} className="cursor-pointer" />

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 outline outline-1 outline-gray-400 hover:bg-green-500 rounded-md cursor-pointer">
            Contact
          </button>

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="px-3 py-1 bg-green-500 rounded-md cursor-pointer">
                Sign In
              </button>
            </SignInButton>
          ) : (
            <>
              <UserButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNav;