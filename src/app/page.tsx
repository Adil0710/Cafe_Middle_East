import About from "@/components/About";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About/>
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
}
