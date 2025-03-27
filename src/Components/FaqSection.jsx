import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is this course beginner-friendly?",
    answer:
      "Yes! This course is designed for beginners, covering MERN stack from basics to advanced.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon successful completion, you will receive a certificate to showcase your skills.",
  },
  {
    question: "How do I get job referrals after course completion?",
    answer:
      "We provide resume reviews, mock interviews, and job referral assistance to help you land a job.",
  },
  {
    question: "Do you offer live classes?",
    answer:
      "Yes! We offer both pre-recorded content and live doubt-solving sessions.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
