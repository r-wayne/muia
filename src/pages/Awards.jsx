import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Awards = () => {
  const movingShapeVariants = {
    animate: {
      x: ["0%", "50%", "-50%", "0%"],
      y: ["0%", "50%", "-50%", "0%"],
      rotate: [0, 360],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
    <Navbar
    backgroundImage="../assets/awrdshero.jpeg"
    />
     <div className="relative bg-gray-50 text-gray-800 overflow-hidden">
      {/* Watermarked Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
            transition: { duration: 10, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-100 rounded-lg opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
            transition: { duration: 12, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-100 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.05, 0.1],
            transition: { duration: 15, repeat: Infinity },
          }}
        />
      </div>

      {/* Moving Shapes */}
      <motion.div
        className="absolute top-5 left-5 w-20 h-20 bg-red-400 rounded-full"
        variants={movingShapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-green-400 rounded-lg"
        variants={movingShapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400 rounded-full transform rotate-45"
        variants={movingShapeVariants}
        animate="animate"
      />

    

      {/* Awards Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Recognitions & Awards</h2>
          <p className="text-gray-600">
            Celebrating our milestones and achievements that mark our journey of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={`/assets/awards/award-${index + 1}.jpg`}
                alt={`Award ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {`Award Title ${index + 1}`}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Be Part of Our Journey
          </motion.h2>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Join us as we continue to achieve greatness and set new standards in the industry.
          </motion.p>
          <motion.button
            className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Awards;
