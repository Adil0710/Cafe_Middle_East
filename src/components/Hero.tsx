"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Adjust for stagger effect
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function Hero() {
  const text =
    "Experience authentic Arabic cuisine with a touch of Indian spices in every bite.";
  return (
    <section
      id="home"
      className="relative max-h-screen min-h-screen w-full flex flex-col items-center justify-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <motion.div
        initial={{ scale: 0, y: -100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" flex-col flex justify-center items-center gap-2 mt-10"
      >
        <h1 className="text-2xl md:text-6xl fascinate-inline">
          A Fusion of Middle
        </h1>
        <h1 className="text-2xl md:text-6xl fascinate-inline">
          Eastern & Indian
        </h1>
        <h1 className="text-2xl md:text-6xl fascinate-inline">Flavors</h1>
      </motion.div>
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="fascinate-inline mt-7 text-center"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={item}
            style={{ display: "inline-block", paddingRight: "8px" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      <Link
        href={`#order`}
        className="mt-12 rounded-full font-semibold px-4 py-2 bg text-white transition-colors duration-300 bg-[#ed8131] hover:bg-[#d68547]"
      >
        {" "}
        Reserve a Table
      </Link>
    </section>
  );
}

export default Hero;
