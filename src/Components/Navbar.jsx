import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-5 bg-black opacity-95 text-white">
      <div className="ml-20 text-xl font-bold text-green-400">GearBit.in</div>

      <div className="flex gap-8 text-gray-300">
        <div className="hover:text-green-400 cursor-pointer transition">
          Courses
        </div>
        <div className="hover:text-green-400 cursor-pointer transition">
          Interview Prep
        </div>
        <div className="hover:text-green-400 cursor-pointer transition">
          Quizzes & Assignments
        </div>
      </div>

      <div className="mr-20 bg-green-600 px-6 py-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500 transition">
        Start Learning Now
      </div>
    </div>
  );
};

export default Navbar;
