import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden  "
  style={{
    clipPath: "ellipse(120% 100% at 50% 0%)",
  }}>
      
      {/* Background Image */}
      <Image
        src="/herosBackgroundImg.png"
        alt="Talent Sprout Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6  ">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Growing Talent,
              <br />
              <span className="text-orange-500">
                Building Future-Ready
              </span>
              <br />
              Workplaces.
            </h1>

            <p className="mt-6 max-w-xl text-gray-200 sm:text-lg">
              Smart hiring, agile staffing, and impactful people development.
              We partner with organizations to help them hire right, scale
              faster, and build inclusive workplaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 cursor-pointer">
                Talk to Talent Sprout
              </button>

              <button className=" cursor-pointer rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-500 hover:bg-orange-500 hover:text-white">
                Explore Services
              </button>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      
    </section>
  );
}
