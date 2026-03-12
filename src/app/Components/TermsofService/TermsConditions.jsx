export default function TermsConditions() {
  return (
    <section className="w-full bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-sm text-gray-700 mb-2">
          Last updated: February 10, 2025
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm sm:text-base leading-relaxed mb-8">
          The following Terms & Conditions are deemed to have been accepted by any individual,
          candidate, employer, or entity accessing or using the official website of Talent
          Sprout, a professional Recruitment Agency in India providing permanent hiring,
          contract staffing, executive search, and HR consulting services. By accessing this
          website, you agree to comply with and be legally bound by these Terms & Conditions.
        </p>

        {/* Section 1 */}
        <Section title="1. General Disclaimer">
          <p>
            Talent Sprout makes every reasonable effort to ensure the accuracy,
            reliability, and updated nature of the information published on this website.
          </p>

          <p className="mt-4">The content available on this website is provided solely for general informational purposes related to:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Recruitment Services</li>
            <li>Staffing Solutions</li>
            <li>HR Consultancy</li>
            <li>Career Opportunities</li>
            <li>Executive Search Services</li>
          </ul>

          <p className="mt-4">
            While we strive to maintain accurate information, Talent Sprout does not
            guarantee the completeness or reliability of any content.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. No Warranties">
          <p>This website and all services are provided on an "as is" and "as available" basis.</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Error-free website functionality</li>
            <li>Virus-free servers or systems</li>
          </ul>

          <p className="mt-4">
            We do not guarantee uninterrupted or secure access to the website at all times.
          </p>
        </Section>

        {/* Section 3 */}
        <Section title="3. Indemnity">
          <p>
            By using our website or recruitment services, you agree to indemnify and hold
            harmless Talent Sprout including its:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Directors</li>
            <li>Employees</li>
            <li>Recruitment consultants</li>
            <li>Affiliates</li>
            <li>Business partners</li>
          </ul>

          <p className="mt-4">From any claims or damages arising from:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Your misuse of this website</li>
            <li>Submission of false or misleading information</li>
            <li>Violation of these Terms & Conditions</li>
            <li>Violation of third-party rights</li>
          </ul>
        </Section>

        {/* Section 4 */}
        <Section title="4. Limitation of Liability">
          <p>Under no circumstances shall Talent Sprout be liable for:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Direct damages</li>
            <li>Indirect damages</li>
            <li>Incidental damages</li>
            <li>Punitive damages</li>
            <li>Consequential losses</li>
            <li>Loss of profits, data, goodwill, or opportunities</li>
          </ul>

          <p className="mt-4">
            Talent Sprout acts only as an intermediary between candidates and employers.
          </p>
        </Section>

        {/* Section 5 */}
        <Section title="5. Intellectual Property Rights">
          <p>
            All intellectual property rights related to this website including:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Website content</li>
            <li>Text and graphics</li>
            <li>Logos and branding</li>
            <li>Design elements</li>
            <li>Recruitment materials</li>
          </ul>

          <p className="mt-4">
            Are the exclusive property of Talent Sprout. Unauthorized use may result in
            legal action.
          </p>
        </Section>

        {/* Section 6 */}
        <Section title="6. User Responsibilities">
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and truthful information</li>
            <li>Do not upload unlawful or misleading content</li>
            <li>Do not misuse candidate or employer data</li>
            <li>Do not attempt unauthorized access to systems</li>
          </ul>
        </Section>

        {/* Section 7 */}
        <Section title="7. Third-Party Links">
          <p>
            This website may contain links to third-party websites or services.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Talent Sprout does not control third-party websites</li>
            <li>We are not responsible for their content or policies</li>
          </ul>
        </Section>

        {/* Section 8 */}
        <Section title="8. Disclosure of Information">
          <p>Talent Sprout may disclose personal information when required:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>By applicable Indian law</li>
            <li>To comply with legal processes</li>
            <li>To enforce these Terms & Conditions</li>
            <li>To protect rights or safety</li>
          </ul>
        </Section>

        {/* Section 9 */}
        <Section title="9. Dispute Resolution & Jurisdiction">
          <p>
            Any disputes arising from the use of this website shall be subject to the
            jurisdiction of Pune, Maharashtra, India.
          </p>
        </Section>

        {/* Section 10 */}
        <Section title="10. Updates to Terms & Conditions">
          <p>
            Talent Sprout reserves the right to update, modify, or revise these Terms &
            Conditions at any time without prior notice.
          </p>
        </Section>

      </div>
    </section>
  );
}


function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">
        {title}
      </h2>

      <div className="text-sm sm:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}