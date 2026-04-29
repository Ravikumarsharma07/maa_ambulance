"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="mt-28 md:mt-28">
      <Image
        src="/hero-section/hero-image.png"
        alt="hero"
        width={1000}
        height={500}
        className="w-screen"
        />
      </section>
  )
};

export default HeroSection;
