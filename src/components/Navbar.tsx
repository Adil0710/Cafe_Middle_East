"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
  { title: "home" },
  { title: "about" },
  { title: "menu" },
  { title: "contact" },
  { title: "order" },
];

function Navbar() {
  const [textColor, setTextColor] = useState("text-gray-200"); // Default text color

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(
              entry.target
            ).backgroundColor;
            const [r, g, b] = bgColor.match(/\d+/g)!.map(Number);

            // Calculate brightness to determine light/dark text color
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setTextColor(brightness > 128 ? "text-gray-800" : "text-gray-200");
          }
        });
      },
      { threshold: 0.7 } // Detect when 70% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full bg-amber-950 backdrop-blur-xl px-[5%] z-20 py-4 flex justify-between items-center transition-colors duration-300">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-gray-200 font-bold text-2xl">Café Middle East</h1>
        <span className={`  text-[#ED8131] text-xs font-medium `}>
          King of Taste
        </span>
      </div>
      <div>
        <ul className="flex justify-center items-center flex-row gap-10">
          {navLinks.map((item, index) => (
            <Link
              href={`#${item.title}`}
              key={index}
              className={cn(
                "transition-colors duration-300 font-medium capitalize text-gray-200",
                
                item.title === "order" &&
                  "text-white hover:text-white bg-[#ed8131] hover:bg-[#d68547] px-3 py-1 rounded-lg"
              )}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
