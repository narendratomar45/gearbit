// import React from "react";

// const challenges = [
//   {
//     id: 1,
//     title: "Build a To-Do App with Hooks",
//     category: "React",
//     difficulty: "Intermediate",
//   },
//   {
//     id: 2,
//     title: "Create a REST API with Express & MongoDB",
//     category: "Node.js",
//     difficulty: "Advanced",
//   },
//   {
//     id: 3,
//     title: "Find Longest Substring Without Repeating Characters",
//     category: "JavaScript DSA",
//     difficulty: "Hard",
//   },
//   {
//     id: 4,
//     title: "Design a Schema for E-commerce Platform",
//     category: "MongoDB",
//     difficulty: "Intermediate",
//   },
// ];

// const InterviewPrep = () => {
//   return (
//     <div className="bg-gray-900 text-white">
//       {/* Hero Section */}
//       <section className="text-center py-16">
//         <h1 className="text-3xl font-bold">💡 Get Ready for Your Dream Job!</h1>
//         <p className="mt-4 text-lg">
//           Practice MERN coding challenges & real interview questions to ace your
//           next job interview.
//         </p>
//         <div className="mt-6">
//           <button className="bg-blue-500 px-6 py-3 rounded-lg text-white mr-4 hover:bg-blue-600 transition">
//             Start Solving Challenges
//           </button>
//           <button className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition">
//             Download 100+ MERN Questions
//           </button>
//         </div>
//       </section>

//       {/* Coding Challenges Section */}
//       <section className="py-12 px-6">
//         <h2 className="text-2xl font-bold text-center">
//           🔥 MERN Coding Challenges
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//           {challenges.map((challenge) => (
//             <div
//               key={challenge.id}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
//             >
//               <h3 className="text-xl font-semibold">{challenge.title}</h3>
//               <p className="text-gray-400">
//                 {challenge.category} - {challenge.difficulty}
//               </p>
//               <button className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
//                 Start Solving
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Interview Questions Section */}
//       <section className="py-12 text-center bg-gray-800">
//         <h2 className="text-2xl font-bold">📑 100+ MERN Interview Questions</h2>
//         <p className="mt-4">
//           Prepare for React, Node.js, MongoDB & JavaScript interviews.
//         </p>
//         <button className="mt-6 bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition">
//           Download PDF
//         </button>
//       </section>

//       {/* Final Call to Action */}
//       <section className="py-12 text-center bg-blue-600">
//         <h2 className="text-3xl font-bold">
//           🚀 Join Now & Start Solving Challenges!
//         </h2>
//         <p className="mt-4 text-lg">
//           Upgrade your MERN skills & get job-ready today.
//         </p>
//         <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-600 transition">
//           Sign Up & Start
//         </button>
//       </section>
//     </div>
//   );
// };

// export default InterviewPrep;

import React from "react";

const challenges = [
  {
    id: 1,
    title: "Build a To-Do App with Hooks",
    category: "React",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Create a REST API with Express & MongoDB",
    category: "Node.js",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Find Longest Substring Without Repeating Characters",
    category: "JavaScript DSA",
    difficulty: "Hard",
  },
  {
    id: 4,
    title: "Design a Schema for E-commerce Platform",
    category: "MongoDB",
    difficulty: "Intermediate",
  },
];

const InterviewPrep = () => {
  return (
    <div className="bg-black text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-teal-400">
          💡 Get Ready for Your Dream Job!
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Practice MERN coding challenges & real interview questions to ace your
          next job interview.
        </p>
        <div className="mt-6">
          <button className="bg-teal-500 px-6 py-3 rounded-lg text-black font-semibold shadow-lg hover:bg-teal-600 transition">
            Start Solving Challenges
          </button>
          <button className="ml-4 bg-purple-500 px-6 py-3 rounded-lg text-black font-semibold shadow-lg hover:bg-purple-600 transition">
            Download 100+ MERN Questions
          </button>
        </div>
      </section>

      {/* Coding Challenges Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-yellow-400">
          🔥 MERN Coding Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {challenge.title}
              </h3>
              <p className="text-gray-400">
                {challenge.category} - {challenge.difficulty}
              </p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-blue-600 transition">
                Start Solving
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions Section */}
      <section className="py-12 text-center bg-gray-900 border-t border-gray-700">
        <h2 className="text-2xl font-bold text-purple-400">
          📑 100+ MERN Interview Questions
        </h2>
        <p className="mt-4 text-gray-300">
          Prepare for React, Node.js, MongoDB & JavaScript interviews.
        </p>
        <button className="mt-6 bg-green-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-green-600 transition">
          Download PDF
        </button>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 text-center bg-gradient-to-r from-teal-600 to-purple-700">
        <h2 className="text-3xl font-extrabold text-white">
          🚀 Join Now & Start Solving Challenges!
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Upgrade your MERN skills & get job-ready today.
        </p>
        <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-600 transition">
          Sign Up & Start
        </button>
      </section>
    </div>
  );
};

export default InterviewPrep;
