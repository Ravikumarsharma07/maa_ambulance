"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/hero-section/hero-image-1.png", alt: "Hero slide 1" },
  { src: "/hero-section/hero-image-2.png", alt: "Hero slide 2" },
  { src: "/hero-section/hero-image-3.png", alt: "Hero slide 3" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-34 md:mt-36 w-full overflow-hidden">
      {/* Images */}
      <div className="relative w-full h-[50vw] max-h-[700px] min-h-[200px]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition text-xl"
        >
          ‹
        </button>
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition text-xl"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;