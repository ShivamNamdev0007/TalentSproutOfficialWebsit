import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        clipPath: "ellipse(140% 100% at 50% 0%)",
      }}
    >
      {/* Background Image */}
      <Image
        src="/herosBackgroundImg.png"
        alt="Talent Sprout Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] sm:min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center text-white text-center md:text-left">
            
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Growing Talent,
              <br />
              <span className="text-orange-500">
                Building Future-Ready
              </span>
              <br />
              Workplaces.
            </h1>

            <p className="mt-6 mx-auto md:mx-0 max-w-xl text-gray-200 text-base sm:text-lg">
              Smart hiring, agile staffing, and impactful people development.
              We partner with organizations to help them hire right, scale
              faster, and build inclusive workplaces.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
              
              <button className="w-full sm:w-auto rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition duration-300">
                Talk to Talent Sprout
              </button>

              <button className="w-full sm:w-auto rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300">
                Explore Services
              </button>

            </div>
          </div>

          {/* Right Side Empty (for future image / illustration) */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}