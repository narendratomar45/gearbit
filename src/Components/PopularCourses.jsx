import React from "react";
import CourseCard from "./CourseCard";
import htmlcss from "../assets/images/htmlcss.jpg";
import javascript from "../assets/images/javascript.png";
import reactjs from "../assets/images/reactjs.jpg";
import nodejs from "../assets/images/nodejs.png";

const courses = [
  {
    title: "HTML & CSS Mastery",
    description: "Learn HTML & CSS from scratch with hands-on projects.",
    image: htmlcss,
    rating: "4.8",
    duration: "4 Weeks",
    price: "FREE",
  },
  {
    title: "JavaScript for Beginners",
    description: "Understand JavaScript fundamentals & build projects.",
    image: javascript,
    rating: "4.9",
    duration: "6 Weeks",
    price: "$19.99",
  },
  {
    title: "React.js Complete Guide",
    description: "Master React.js with hooks, Redux & real-world apps.",
    image: reactjs,
    rating: "5.0",
    duration: "8 Weeks",
    price: "$29.99",
  },
  {
    title: "Node.js & Express Full Course",
    description: "Backend development with Node.js, Express, and APIs.",
    image: nodejs,
    rating: "4.7",
    duration: "6 Weeks",
    price: "$24.99",
  },
];

const PopularCourses = () => {
  return (
    <section className=" py-10 bg-black">
      <h1 className="text-3xl font-bold text-center text-white">
        🔥 Popular Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
