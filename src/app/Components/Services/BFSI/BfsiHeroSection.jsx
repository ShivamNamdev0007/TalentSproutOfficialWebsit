"use client";

export default function BfsiHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
      <div className="absolute inset-0">
        <img
          src="/BsfiHeros.jpg" 
          alt="BFSI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-white">
    
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Trusted Hiring Partner for{" "}
          <span className="text-orange-500">
            Banking & <br className="hidden sm:block" />
            Financial Services
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          We provide specialized recruitment solutions for the BFSI sector
          with a strong focus on domain knowledge, compliance, and reliability.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 transition px-8 py-3 rounded-lg font-semibold text-white">
            Hire BFSI Talent
          </button>

          <button className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-lg font-semibold">
            Book a Training Session
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm sm:text-base text-gray-200">
          
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-orange-500"></span>
            ISO Certified
          </div>

          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-orange-500"></span>
            10+ Years Experience
          </div>

          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-orange-500"></span>
            200+ BFSI Clients
          </div>

        </div>
      </div>
    </section>
  );
}