"use client";

import React from "react";
import Link from "next/link";

export default function GrowTogetherCTA() {
  return (
    <section className="w-full bg-orange-600 px-6 py-16">
      <div className="mx-auto max-w-5xl text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl font-bold md:text-4xl">
          Let’s Grow Together
        </h2>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
          Whether you’re hiring talent, scaling teams, or building a better
          workplace culture—Talent Sprout is your people partner.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-orange-600">
            Talk to Talent Sprout
            <span aria-hidden>→</span>
          </Link>

          <Link href="/" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
