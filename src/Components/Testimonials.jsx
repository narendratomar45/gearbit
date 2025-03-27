import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Amit Sharma",
    review:
      "This MERN course helped me crack my first full-stack job! The hands-on projects were the best part.",
    rating: 5,
    linkedin: "https://linkedin.com/in/amitsharma",
    // image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Priya Patel",
    review:
      "Amazing learning experience! The interview prep section was a game-changer.",
    rating: 5,
    linkedin: "https://linkedin.com/in/priyapatel",
    // image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
];

const companies = [
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-black text-white">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
        🚀 Success Stories from Our Students!
      </h2>

      <div className="flex gap-6 justify-center flex-wrap">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">{review.name}</h3>
            <p className="text-gray-300 mt-2">"{review.review}"</p>
            <div className="flex justify-center mt-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <a
              href={review.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 block mt-3"
            >
              View on LinkedIn
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">
          🎯 Our Learners Work At Top Companies!
        </h2>
        <div className="flex justify-center gap-10">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="w-28 h-auto filter invert"
            />
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gray-800 text-center py-10">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          🎥 Hear From Our Students
        </h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ifG2fO-TYF8?si=5q0a9bAojLqgykJc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
