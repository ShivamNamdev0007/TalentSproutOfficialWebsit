function MissionVision() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Mission */}
        <div className="relative w-full md:w-1/2 bg-gradient-to-r from-[#2b2b2b] to-[#3a3a3a] text-white px-6 py-14 md:px-12 md:py-20 flex items-center justify-center">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              To deliver quality recruitment services, flexible staffing
              solutions, and people-centric training programs that empower
              organizations and individuals to succeed in an evolving world of
              work.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="relative w-full md:w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-14 md:px-12 md:py-20 flex items-center justify-center">
          <div className="max-w-xl text-center md:text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              To create workplaces where talent thrives, people feel respected,
              and organizations grow sustainably.
            </p>
          </div>
        </div>

        {/* Diagonal Divider (Desktop only) */}
        <div className="hidden md:block absolute top-0 left-1/2 h-full w-20 bg-orange-500 -skew-x-12 -translate-x-1/2" />
      </div>
    </section>
  );
}

export default MissionVision;
