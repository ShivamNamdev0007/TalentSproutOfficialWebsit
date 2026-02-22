import Link from "next/link";

function GrowTogetherCTA() {
  return (
    <section className="w-full bg-orange-600 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
          Let’s Grow Together
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base md:text-lg max-w-3xl mx-auto">
          Whether you’re hiring talent, scaling teams, or building a better
          workplace culture—Talent Sprout is your people partner.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-orange-600"
          >
            Talk to Talent Sprout →
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto text-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GrowTogetherCTA;
