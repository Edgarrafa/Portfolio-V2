import Image from "next/image";

import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="">
      {/* NAVIGATION */}
      <nav></nav>
      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* EXPERIENCE */}
      <section></section>
      {/* PROJECTS */}
      <section></section>
      {/* SKILLS */}
      <section></section>
      {/* CONTACT */}
      <section></section>
      <footer>
      </footer>
    </div>
  );
}
