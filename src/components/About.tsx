"use client";
import React, { useRef } from "react";
import Header from "./ui/header";
import { Soup, UtensilsCrossed } from "lucide-react";
import { IconGlassCocktail } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
const cardData = [
  {
    title: "Starters",
    description:
      "Enjoy a crispy and flavorful selection, including Chicken Wings, Chicken Fries, and Chicken Balls, perfect for kicking off your meal.",
    icon: <Soup color="white" size={30} />,
  },
  {
    title: "Main Course",
    description:
      "Indulge in mouthwatering delights like Chicken Shawarma, Crispy Chicken Roll, and Crispy Chicken Hot Dog, packed with rich flavors.",
    icon: <UtensilsCrossed color="white" size={30} />,
  },
  {
    title: "Mocktails",
    description:
      "Refresh your taste buds with our vibrant and refreshing mocktails, crafted to complement your meal perfectly.",
    icon: <IconGlassCocktail color="white" size={30} />,
  },
];

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Card = ({ title, description, icon, index }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} 
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-80 max-h-80 w-80"
    >
  
      <div className="w-56 h-56 top-0 rounded-full left-1/2 -translate-x-1/2 absolute bg-[#beb9b8] flex items-start justify-center">
        <div className="w-16 h-16 rounded-full flex justify-center items-center mt-8 bg-[#292527]">
          {icon}
        </div>
      </div>

      {/* Card Content */}
      <div className="w-full h-56 bottom-0 left-0 absolute bg-[#beb9b8] rounded-lg flex flex-col items-center justify-start px-5">
        <h1 className="text-[#292527] font-bold text-2xl mt-5">{title}</h1>
        <p className="text-[#4d4b4c] text-center mt-5">{description}</p>
      </div>
    </motion.div>
  );
};

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start center", "center center"], 
  });

  
  const leftX = useTransform(scrollYProgress, [0, 1], [-300, 5]);
  const rightX = useTransform(scrollYProgress, [0, 1], [300, -5]);

  const text =
    "Immerse Yourself in the Captivating Ambiance and Indulge in Our Signature Dishes";
  return (
    <section
      id="about"
      className="relative max-h-screen min-h-screen overflow-x-hidden max-w-[100vw] flex flex-col items-center justify-center bg-[#EFE8E2] text-[#292527]"
    >
      <Header className=" text-[#292527]">About Our Cafe</Header>
      <motion.p
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        className="text-[#AAA4A3] mt-4 text-lg"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={item}
            style={{ display: "inline-block", paddingRight: "6px" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        style={{ x: leftX }}
        className="w-36 h-36 bg-[#beb9b8] rounded-full absolute left-5 top-[35%] -translate-y-[35%]"
      >
        <Image
          src={`/starter.png`}
          alt="starter"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Right Image Animation */}
      <motion.div
        style={{ x: rightX }}
        className="w-36 h-36 bg-[#beb9b8] rounded-full absolute right-5 top-[65%] -translate-y-[65%]"
      >
        <Image
          src={`/sha.png`}
          alt="starter"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className=" grid md:grid-cols-3 grid-cols-1 gap-12 mt-16">
        {cardData.map((card, index) => (
          <Card
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
      <Link
        href={`#order`}
        className="mt-20 rounded-full font-semibold px-4 py-2 bg text-white transition-colors duration-300 bg-[#ed8131] hover:bg-[#d68547]"
      >
        {" "}
        View Our Specialities
      </Link>
    </section>
  );
}

export default About;
