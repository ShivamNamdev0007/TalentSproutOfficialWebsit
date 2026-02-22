import {
  Users,
  Building2,
  Rocket,
  Briefcase,
  GraduationCap, ArrowRight,
} from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-6">
          Who we are
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Talent Sprout is a people solutions startup focused on smart hiring,
          agile staffing, and impactful people development.
          <span className="text-orange-500 font-medium">
            {" "}
            We partner with
          </span>
        </p>

        {/* Partner Row */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <Item icon={Users} label="Corporates" />
          <Line />
          <Item icon={Building2} label="GCCs" />
          <Line />
          <Item icon={Rocket} label="Startups" />
          <Line />
          <Item icon={Briefcase} label="BFSI organizations" />
          <Line />
          <Item icon={GraduationCap} label="Educational Institutions" />
        </div>

        {/* Button */}
        <div className="mt-16">
  <button className="group relative overflow-hidden border border-orange-500 text-orange-500 px-10 py-3 rounded-lg transition hover:bg-orange-500">
    <span className="flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-black">
      Read More
      <ArrowRight className="w-4 h-4 opacity-0 translate-x-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
  </button>
</div>
      </div>
    </section>
  );
}

/* ---------- Small Components ---------- */

function Item({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3 min-w-35">
      <Icon className="w-7 h-7 text-orange-500" />
      <p className="text-orange-500 text-sm font-medium text-center">
        {label}
      </p>
    </div>
  );
}

function Line() {
  return (
    <div className="hidden lg:block h-10 w-px bg-orange-500/60" />
  );
}
