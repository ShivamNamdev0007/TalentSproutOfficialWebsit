export default function OurPoshServices() {
  const services = [
    {
      title: "POSH Awareness Training",
      description:
        "Comprehensive workplace sexual harassment prevention training for all employees covering definitions, examples, complaint procedures, and creating respectful workplace culture.",
      points: [
        "2–3 hour sessions",
        "Interactive workshops",
        "Real-world scenarios",
        "Digital certificates",
      ],
      color: "bg-blue-500",
      icon: "👥",
    },
    {
      title: "IC Member Training",
      description:
        "Specialized training for Internal Committee members on inquiry procedures, legal frameworks, evidence collection, report writing, and complaint handling as per POSH Act 2013.",
      points: [
        "Full-day training",
        "Legal compliance",
        "Case studies",
        "Documentation guidance",
      ],
      color: "bg-orange-500",
      icon: "🎓",
    },
    {
      title: "POSH Policy Drafting",
      description:
        "Customized POSH policy development aligned with your organization culture, industry requirements, and legal compliance under Sexual Harassment Act 2013.",
      points: [
        "Customized policies",
        "Legal review",
        "Industry-specific",
        "Revision support",
      ],
      color: "bg-green-500",
      icon: "📄",
    },
    {
      title: "Compliance Audit",
      description:
        "Comprehensive POSH compliance audit covering IC formation, policy implementation, training records, complaint mechanisms, and annual reporting requirements.",
      points: [
        "Gap analysis",
        "Compliance report",
        "Recommendations",
        "Action plan",
      ],
      color: "bg-purple-500",
      icon: "✅",
    },
    {
      title: "College POSH Program",
      description:
        "Specialized POSH awareness programs for educational institutions including faculty training, student orientation, and campus safety committee formation.",
      points: [
        "Faculty workshops",
        "Student sessions",
        "Campus compliance",
        "UGC guidelines",
      ],
      color: "bg-pink-500",
      icon: "🏫",
    },
    {
      title: "Annual Refresher Training",
      description:
        "Yearly mandatory POSH refresher programs to maintain awareness, update on legal changes, and reinforce workplace harassment prevention practices.",
      points: [
        "Annual updates",
        "New case laws",
        "Compliance tracking",
        "Digital records",
      ],
      color: "bg-indigo-500",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-orange-500">POSH</span> Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Comprehensive POSH compliance solutions tailored for your organization
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 text-left"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center text-white text-2xl rounded-xl ${service.color}`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Points */}
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}