"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const slides = [
  {
    title: "Discover Your",
    highlight: "Signature Style",
    title2: "Curated for the Bold",
    description:
      "Explore our exclusive collection of premium fashion and accessories, handpicked from the world's finest labels — delivered straight to your door.",
    button: "Shop the Collection",
    image: "/images/hero11.png",
  },
  {
    title: "Timeless Pieces,",
    highlight: "Luxury Redefined",
    description:
      "From statement jewellery to couture-inspired clothing, indulge in fashion that speaks without words.",
    button: "Explore Lookbook",
    image: "/images/hero11.png",
  },
  {
    title: "Exclusively Yours,",
    highlight: "Every Season",
    description:
      "New arrivals every week — stay ahead of trends with our carefully curated seasonal edits.",
    button: "View New Arrivals",
    image: "/images/hero11.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <div className="from-primary-muted to-secondary-light relative overflow-hidden rounded-[32px] bg-gradient-to-r">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="grid min-w-full grid-cols-1 items-center gap-6 px-6 py-10 lg:grid-cols-2 lg:px-10 lg:py-16"
          >
            {/* Image box */}
            <div className="order-1 flex justify-center lg:order-0">
              <Image
                src={slide.image}
                alt="Medicine"
                width={420}
                height={420}
                className="w-64 max-w-md object-contain sm:w-72 lg:w-full"
              />
            </div>

            {/* Content */}
            <div className="text-white">
              <h1 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {slide.title}{" "}
                <span className="font-playfair font-semibold italic">{slide.highlight}</span> <br />
                {slide.title2}{" "}
              </h1>

              <p className="mt-3 max-w-lg text-sm font-medium text-white/90 sm:mt-4 sm:text-base">
                {slide.description}
              </p>

              <Link href="/products" className="mt-5 inline-block sm:mt-6">
                <button className="flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-blue-50 active:scale-95 sm:text-base">
                  <IoSearchOutline className="text-lg text-black" />
                  {slide.button}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute right-14 bottom-4 cursor-pointer text-3xl text-white transition-transform hover:scale-110 sm:bottom-6"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-6 bottom-4 cursor-pointer text-3xl text-white transition-transform hover:scale-110 sm:bottom-6"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-6 flex gap-2 sm:bottom-6">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1 w-12 rounded-full transition-all duration-300 sm:w-16 ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
