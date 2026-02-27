export default function WhoWeAre() {
  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="text-slate-800">Who </span>
          <span className="text-orange-500">We Are</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed ">
          Talent Sprout is a professional{" "}
          <span className="font-semibold text-gray-900">
            recruitment company and talent acquisition firm
          </span>{" "}
          committed to delivering smart, reliable, and scalable hiring
          solutions for businesses across industries. We specialize in{" "}
          <span className="font-semibold text-gray-900">
            end-to-end recruitment services, staffing solutions, and workforce consulting
          </span>{" "}
          tailored to modern business needs.
        </p>

        <p className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          As a trusted{" "}
          <span className="font-semibold text-gray-900">
            staffing and recruitment agency
          </span>
          , Talent Sprout helps startups, GCCs, and enterprises hire skilled
          professionals who align with their goals, culture, and long-term
          growth strategy.
        </p>
      </div>
    </section>
  );
}