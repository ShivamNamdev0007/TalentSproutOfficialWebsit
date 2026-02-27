"use client";

export default function EmpathyHerosSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden rounded-b-3xl">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/EmpathyHeros.jpg')", // replace with your image
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Empathy-Driven Training for
          <span className="text-orange-500"> Stronger Teams</span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
         We design training programs that focus on emotional intelligence, communication, and personality development.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button */}
          <button className=" cursor-pointer px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition duration-300 font-medium">
            Hire IT Talent
          </button>

          {/* Secondary Button */}
          <button className="cursor-pointer px-8 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition duration-300 font-medium">
            Request IT Hiring Support
          </button>

        </div>

      </div>
    </section>
  );
}