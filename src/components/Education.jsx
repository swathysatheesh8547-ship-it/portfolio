import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        EDUCATION
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold mb-2">computer engineering</h3>
          <p className="text-gray-600 mb-1">Women's polytechnic kaimanam</p>
          <p className="text-gray-500">2023 - Present</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border-t-4 border-pink-500">
          <h3 className="text-2xl font-semibold mb-2">Higher Secondary Education</h3>
          <p className="text-gray-600 mb-1">State Board</p>
          <p className="text-gray-500">2021 - 2023</p>
        </div>
      </div>
    </section>
  );
}

export default Education;