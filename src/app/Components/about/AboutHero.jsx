"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-65 sm:h-80 md:h-95 lg:h-112.5 xl:h-125 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/AboutHeros.jpg" // put your image in public/images
        alt="About Us Background"
        fill
        priority
        sizes="100vw"       
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900/70" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white font-semibold tracking-wide
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          About Us
        </h1>
      </div>
    </section>
  );
}