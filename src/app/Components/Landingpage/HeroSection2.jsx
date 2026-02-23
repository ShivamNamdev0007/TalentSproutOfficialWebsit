import Image from "next/image";

export default function HeroSection2() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/e6f24d99d13df7bfb56f8ce472ee19c6078005ec.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-orange-400/40 to-orange-600/70"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12">
        
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-0">
          
          {/* Left Side (Optional Image / Content) */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Add left side content here if needed */}
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-black block sm:inline">
                Empower People.
              </span>
              <br className="hidden sm:block" />
              Transform Culture.
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Share your training needs and we'll design a customized program.
            </p>

            <div className="mt-8">
              <button className="cursor-pointer px-6 sm:px-8 py-3 text-sm sm:text-base border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}