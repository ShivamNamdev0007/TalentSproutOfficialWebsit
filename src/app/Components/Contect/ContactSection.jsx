"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-16 px-6 md:px-16 pt-25">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE - FORM */}
        <div className="bg-[#F05A28] rounded-2xl p-10 w-full max-w-xl">

          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-8">
            Get in Touch with Us
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Later connect this to AWS API
              console.log("Form Submitted");
            }}
          >
            {/* Name */}
            <div>
              <label className="block text-[#0B1C2D] font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full h-12 px-4 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#0B1C2D] font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="example@company.com"
                className="w-full h-12 px-4 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[#0B1C2D] font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+11 000 000 000"
                className="w-full h-12 px-4 rounded-lg bg-gray-200 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#0B1C2D] font-medium mb-2">
                Message *
              </label>
              <textarea
                required
                placeholder="Leave us a Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#0B1C2D] text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - CONTACT DETAILS */}
        <div className="text-white flex flex-col justify-center space-y-10 max-w-lg">

          <div>
            <h3 className="text-xl font-semibold mb-2">Chat to Support</h3>
            <p className="text-gray-800 mb-2">
              Chat to our staff 24/7 for instant access to support
            </p>
            <a href="#" className="underline text-white">
              Start Live Chat
            </a>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700 mb-2">
              Monday - Friday, 9:00 AM – 6:00 PM
            </p>
            <p className="underline">+44 161 987 6543</p>
            <p className="underline">+44 161 987 6543</p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-700 mb-2">
              Email us & we will get back to you within 24 hours
            </p>
            <p className="underline">info@talentsprout.com</p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h3 className="text-xl font-semibold mb-2">Manchester, UK</h3>
            <p className="text-gray-700 mb-2">
              Serving clients across all major Indian cities
            </p>
            <p className="underline">
              1234 Business Lane,<br />
              Suite 100,<br />
              London, UK
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}