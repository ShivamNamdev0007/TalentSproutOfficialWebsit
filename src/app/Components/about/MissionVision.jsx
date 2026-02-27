import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="relative w-full">

      {/* Background Image Wrapper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Ourmissions.jpg"
          alt="Corporate Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Spacer for top image visibility */}
      <div className="h-75 sm:h-87.5 md:h-100 lg:h-112.5" />

      {/* Cards Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid 
                        grid-cols-1 md:grid-cols-2 
                        gap-6 md:gap-10 lg:gap-12">

          {/* Mission Card */}
          <div className="bg-gray-100 rounded-2xl md:rounded-3xl 
                          shadow-2xl 
                          p-6 sm:p-8 md:p-10 lg:p-12">

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              <span className="text-slate-800">Our </span>
              <span className="text-orange-500">Mission</span>
            </h3>

            <div className="flex gap-4">
              <div className="w-1 bg-orange-500 rounded-full"></div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Our mission is to deliver high-quality recruitment services and
                flexible staffing solutions that connect top talent with the
                right opportunities. We aim to support businesses by providing
                ethical, transparent, and result-driven talent acquisition
                services.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-100 rounded-2xl md:rounded-3xl 
                          shadow-2xl 
                          p-6 sm:p-8 md:p-10 lg:p-12">

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              <span className="text-slate-800">Our </span>
              <span className="text-orange-500">Vision</span>
            </h3>

            <div className="flex gap-4">
              <div className="w-1 bg-orange-500 rounded-full"></div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                To be a leading recruitment and staffing company that creates
                future-ready workplaces where talent grows, organizations
                thrive, and hiring decisions drive long-term success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}