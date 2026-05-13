"use client";

import {
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import { BsTwitterX } from "react-icons/bs";
import {
  FaBlog,
  FaFacebook,
  FaInstagram,
  FaRegMoon,
} from "react-icons/fa";

import { IoSearch } from "react-icons/io5";

function TopNav() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-1">
        <FaBlog size={38} />
        <p className="text-xl md:text-2xl font-semibold">
          Blogs
        </p>
      </div>

      <div className="flex items-center gap-5">
        <IoSearch size={22} className="cursor-pointer" />
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