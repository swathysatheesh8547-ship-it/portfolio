import React from "react";

function Showdata(){

    return(
       <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-10 drop-shadow-lg">
        User List
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform transition duration-300 border-t-4 border-indigo-500"
          >
            {/* Avatar using initials */}
            <div className="w-20 h-20 bg-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 mt-2">{user.email}</p>

            <div className="mt-3 flex flex-col items-center space-y-1">
              <span className="text-sm text-white bg-green-500 rounded-full px-3 py-1">
                {user.phone}
              </span>
              <span className="text-sm text-white bg-blue-500 rounded-full px-3 py-1">
                {user.website}
              </span>
            </div>

            <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
    )
}
export default Showdata;