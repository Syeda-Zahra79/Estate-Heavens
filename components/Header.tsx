"use client";
import Image from "next/image";
import image from "../assets/EH.png";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "3D Tour",
    href: "/3d-tour",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="bg-white shadow-gray-500 flex justify-between w-[100%] md:w-[90%] py-6 md:mt-10 mt-0 px-3 md:px-10 drop-shadow-lg mx-auto">
      {menuOpen && (
        <div className="relative top-0 w-[100%] bg-white z-50 left-0 ">
          <Image
            width="34"
            height="34"
            src="https://img.icons8.com/sf-black/64/delete-sign.png"
            className="absolute right-0 cursor-pointer"
            alt="delete-sign"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="mt-10 flex flex-col">
            {menuItems.map((item) => (
              <>
                <Link key={item.name}
                  className="m-3 px-3 text-center text-2xl text_playfair"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  >
                  {item.name}
                </Link>
                <hr />
              </>
            ))}
          </nav>
    
        </div>
      )}
{
  menuOpen === false && 
  <Image src={image} width={50} height={50} alt="logo" />
}
{ !menuOpen &&
      <Image
        width="30"
        height="20"
        className="md:hidden block cursor-pointer w-auto h-auto"
        src="https://img.icons8.com/ios-filled/50/menu--v6.png"
        alt="menu" 
        onClick={() => setMenuOpen(true)}
      /> 
      
}
      <nav className="md:block hidden">
        {menuItems.map((item) => (
          <Link className="mx-3 px-3" href={item.href}  key={item.name}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
