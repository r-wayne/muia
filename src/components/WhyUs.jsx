import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Unmatched Expertise",
    description:
      "Our deep understanding of the real estate market enables us to provide insightful guidance tailored to your needs.",
    icon: "/assets/WhyUs/Unmatched-Expertise.webp", // Replace with an appropriate icon URL
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize your goals and deliver personalized solutions with a focus on long-term satisfaction.",
    icon: "/assets/WhyUs/Customer_-_centric.avif",
  },
  {
    title: "Diverse Portfolio",
    description:
      "From residential plots to commercial properties, our extensive catalog ensures there is something for everyone.",
    icon: "/assets/WhyUs/diversified_portfolio.jpg",
  },
  {
    title: "Sustainability Focus",
    description:
      "We integrate sustainable practices into our operations, contributing to a greener future.",
    icon: "/assets/WhyUs/Sustainability.jpeg",
  },
];

const WhyUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Rholand Stands Out
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={reason.icon}
                alt={reason.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{reason.title}</h3>
              <p className="text-gray-600 mt-2">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <section className="py-20 bg-gray-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
          <p className="text-center mb-12 text-lg text-gray-700">
            Our core values shape the culture and strategy behind our ongoing success:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value Card 1 */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
              <p>We uphold high standards of conduct and quality in everything we do.</p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Honesty</h3>
              <p>We believe in being transparent and truthful in all our business dealings.</p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-blue-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Customer Obsession</h3>
              <p>Our customers are at the core of our strategy, and we work to exceed their expectations.</p>
            </div>

            {/* Value Card 4 */}
            <div className="bg-blue-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We embrace change and innovation to improve our services and products.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience Excellence?
          </motion.h3>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how Rholand can make your property dreams a reality.
          </motion.p>
         
        </div>
      
      {/* Awards & Recognition Section */}
      

      {/* Core Values Section */}
      
      </div>
    </div>
  );
};

export default WhyUs;
