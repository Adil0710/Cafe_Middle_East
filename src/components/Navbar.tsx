"use client";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "home",
  },
  {
    title: "about",
  },
  {
    title: "menu",
  },
  {
    title: "contact",
  },
  {
    title: "order",
  },
];

function Navbar() {
  return (
    <nav className=" px-[5%] py-5 flex justify-between items-center">
      <div>
        <h1 className="text-[#ED8131] font-bold text-2xl">Café Middle East</h1>
      </div>
      <div>
        <ul className=" flex justify-center items-center flex-row gap-10">
          {navLinks.map((item, index) => (
            <Link href={`#${item.title}`} key={index} className=" font-medium capitalize">
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
