import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-3">{course.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{course.description}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="text-yellow-500 font-semibold">
          {course.rating} ⭐
        </span>
        <span className="text-blue-600">{course.duration}</span>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-green-600 font-bold">{course.price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
