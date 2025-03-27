// import {
//   FaLaptopCode,
//   FaChalkboardTeacher,
//   FaUsers,
//   FaCertificate,
// } from "react-icons/fa";

// const Features = () => {
//   const features = [
//     {
//       icon: <FaLaptopCode size={40} className="text-blue-500" />,
//       title: "100% Practical Learning",
//       description: "Work on real-world projects & build your portfolio.",
//     },
//     {
//       icon: <FaChalkboardTeacher size={40} className="text-green-500" />,
//       title: "Interview Preparation",
//       description: "Mock interviews, DSA practice, and MERN Stack FAQs.",
//     },
//     {
//       icon: <FaUsers size={40} className="text-purple-500" />,
//       title: "Live Doubt Support",
//       description: "Get answers from instructors & an active community.",
//     },
//     {
//       icon: <FaCertificate size={40} className="text-yellow-500" />,
//       title: "Certification on Completion",
//       description: "Earn certificates to boost your resume & LinkedIn profile.",
//     },
//   ];

//   return (
//     <section className="py-12 bg-black">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6 text-white opacity-90">
//           Why Choose GearBit? 🚀
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white shadow-md rounded-lg text-center border-2 border-yellow-500"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//               <p className="text-gray-600 mt-2">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLaptopCode size={40} className="text-blue-400" />,
      title: "100% Practical Learning",
      description: "Work on real-world projects & build your portfolio.",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-green-400" />,
      title: "Interview Preparation",
      description: "Mock interviews, DSA practice, and MERN Stack FAQs.",
    },
    {
      icon: <FaUsers size={40} className="text-purple-400" />,
      title: "Live Doubt Support",
      description: "Get answers from instructors & an active community.",
    },
    {
      icon: <FaCertificate size={40} className="text-yellow-400" />,
      title: "Certification on Completion",
      description: "Earn certificates to boost your resume & LinkedIn profile.",
    },
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10 text-white">
          Why Choose GearBit? 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 shadow-lg rounded-xl text-center border border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
