import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        CONTACT
      </h2>

      {/* Contact Card */}
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center space-y-6">

        {/* Email */}
        <p className="text-gray-700 text-lg">
          Email:{" "}
          <a
            href="mailto:swathysatheesh@gmail.com"
            className="text-orange-500 font-semibold underline hover:text-orange-600 transition"
          >
            swathysatheesh@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p className="text-gray-700 text-lg">
          Phone:{" "}
          <a
            href="tel:7658239910"
            className="text-orange-500 font-semibold underline hover:text-orange-600 transition"
          >
            7658239910
          </a>
        </p>

        {/* Location */}
        <p className="text-gray-700 text-lg">
          Kerala, India
        </p>

        {/* Button */}
        <a
          href="mailto:swathysatheesh@gmail.com"
          className="inline-block mt-4 bg-white text-black border border-orange-300 px-8 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 shadow-lg transition transform hover:scale-105"
        >
          Send Message
        </a>
      </div>
    </section>
  );
}

export default Contact;