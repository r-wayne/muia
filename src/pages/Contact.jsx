import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Contact = () => {
  const shapeVariants = {
    animate: {
      y: [0, -30, 30, 0],
      rotate: [0, 360],
      transition: {
        duration: 10,
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
    <div className="bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Moving Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full"
        variants={shapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full"
        variants={shapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300 rounded-full transform rotate-45"
        variants={shapeVariants}
        animate="animate"
      />

      {/* Hero Section */}
      <Navbar
        
       backgroundImage='../assets/contactUs.png'

      />

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-4">We’d Love to Hear From You</h2>
          <p className="text-gray-600">
            Have questions or need assistance? Contact us today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out via phone, email, or visit our office!
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> +254 123 456 789
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> info@rholand.com
            </p>
            <p className="mb-4">
              <span className="font-semibold">Address:</span> 123 Real Estate
              Avenue, Nairobi, Kenya
            </p>
            <h4 className="text-lg font-bold mb-2">Office Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-8">Find Us Here</h3>
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.921056396846!2d-122.08424968469172!3d37.42199997982196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba03e0603e5b%3A0x5e5c1bc9b4bc6463!2sGoogleplex!5e0!3m2!1sen!2sus!4v1637694320324!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
