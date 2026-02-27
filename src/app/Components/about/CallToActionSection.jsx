"use client";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/AboutCallimage.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-white">Empower People. </span>
          <span className="text-orange-500">Transform Culture.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Share your training needs and we'll design a customized program.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Contact Button */}
          <button className="px-8 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition duration-300">
            Contact Us
          </button>

          {/* Get Started Button */}
          <button className="px-8 py-3 rounded-lg bg-white text-orange-500 font-medium flex items-center gap-2 hover:bg-orange-500 hover:text-white transition duration-300">
            Get Started
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}