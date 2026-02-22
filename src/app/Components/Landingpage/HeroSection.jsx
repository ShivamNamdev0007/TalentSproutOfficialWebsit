import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] p-2 sm:min-h-screen overflow-hidden"
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
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] sm:min-h-screen p-20 max-w-7xl items-center px-4 sm:px-6">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-white text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Growing Talent,
              <br />
              <span className="text-orange-500">Building Future-Ready</span>
              <br />
              Workplaces.
            </h1>

            <p className="mt-5 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray-200">
              Smart hiring, agile staffing, and impactful people development. We
              partner with organizations to help them hire right, scale faster,
              and build inclusive workplaces.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full  sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Talk to Talent Sprout
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto text-center rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Side (Empty for layout balance) */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
