import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Careers = () => {
  const shapeVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 360, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
   <Navbar
      heroTitle='Welcome To Rholand'
       backgroundImage='../assets/winner/joinOurTeam.jpg'
   
   />
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="relative p-10">
        {/* Title */}
        <motion.h1
          className="text-center text-4xl font-bold text-purple-700 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Careers with Us
        </motion.h1>

        {/* Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full"
          variants={shapeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-lg"
          variants={shapeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-lg transform -rotate-45"
          variants={shapeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-green-400 rounded-full"
          variants={shapeVariants}
          animate="animate"
        />

        {/* Blog Section */}
        <section className="mt-10">
          <motion.h2
            className="text-2xl font-semibold text-purple-800 mb-5"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            Career Blogs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Career Growth", "Interview Tips", "Work-Life Balance"].map(
              (title, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-lg font-medium text-blue-900">
                    {title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Learn how to achieve your goals in the workplace.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* Pictures and Comments */}
        <section className="mt-16">
          <motion.h2
            className="text-2xl font-semibold text-purple-800 mb-5"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "https://via.placeholder.com/150", comment: "Hardworking!" },
              { img: "https://via.placeholder.com/150", comment: "Creative Thinker!" },
              { img: "https://via.placeholder.com/150", comment: "Team Player!" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ delay: index * 0.3 }}
              >
                <img
                  src={item.img}
                  alt="Team Member"
                  className="w-20 h-20 rounded-full shadow-lg"
                />
                <p className="text-gray-700 font-medium">{item.comment}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
   
  );
};

export default Careers;
