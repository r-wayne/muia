import Navbar from "../components/Navbar"
import { motion } from "framer-motion"


const WhoWeAre = () => {
  return (
    <>
      <Navbar
        
        backgroundImage='../assets/weare.jpeg'
      />

<section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-center mb-12 text-lg text-gray-700">
            Our mission is to provide affordable and quality real estate solutions while transforming lives through our various initiatives.
          </p>
        </div>
        <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Rholand
        </motion.h2>

        <motion.div
          className="text-lg text-gray-600 leading-relaxed space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            At <span className="font-semibold text-gray-800">Rholand</span>, we take pride in being a trusted leader in the real estate industry. With decades of experience, we have established ourselves as a premier provider of real estate solutions, offering a diverse range of properties to meet your personal and investment needs.
          </p>
          <p>
            Our mission is to create exceptional value by connecting people with their dream properties while upholding the highest standards of integrity, professionalism, and customer satisfaction. Whether you're looking for residential, commercial, or investment properties, we have something for everyone.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
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
          {[
            { title: "Integrity", desc: "We uphold transparency and honesty in all our dealings." },
            { title: "Innovation", desc: "We embrace new ideas to deliver top-notch solutions." },
            { title: "Customer Focus", desc: "Your needs are our top priority." },
            { title: "Sustainability", desc: "We are committed to eco-friendly and sustainable practices." },
            { title: "Excellence", desc: "We strive to exceed expectations in everything we do." },
            { title: "Collaboration", desc: "We value strong partnerships and teamwork." },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
        {/* Core Values Section */}
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
          <p className="text-center mb-12 text-lg text-gray-700">
            Our core values shape the culture and strategy behind our ongoing success:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value Card 1 */}
            <div className="bg-blue-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
              <p>We uphold high standards of conduct and quality in everything we do.</p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-blue-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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

      {/* Objectives Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Objectives</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>To provide affordable prime properties to professionals and business people.</li>
            <li>To link homeowners and developers with the market.</li>
            <li>To give back to the community through Rholand Foundation.</li>
            <li>To create 30,000 jobs by 2030.</li>
            <li>To transition from a private company to a publicly owned company.</li>
          </ul>
        </div>
      </section>
    </>


  )
}

export default WhoWeAre
