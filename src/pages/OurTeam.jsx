
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const teamMembers = {
  experts: [
    {
      name: "Joshua Muia",
      role: "CEO",
      description: "Joshua has over 20 years of experience in real estate.",
      detailedDescription: "Joshua is a visionary leader who has shaped the real estate industry for over 20 years. With an extensive background in residential, commercial, and industrial development, he has been instrumental in the growth of our company. John’s innovative thinking and leadership style drive us toward new frontiers.",
      imageUrl: "data:image/jpeg;base64,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", 
    },
    {
      name: "Whitney Samba",
      role: "Project Manager",
      description: "Samba oversees all property development projects.",
      detailedDescription: "Whitney Sambas’s expertise in property development is unparalleled. She manages all aspects of our projects, from initial concept to final execution. With a sharp eye for detail and a passion for design, Jane ensures that each project not only meets but exceeds our client’s expectations.",
      imageUrl: "data:image/jpeg;base64,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", // Replace with actual image path
    },
    {
      name: "Alice Mwikali",
      role: "Marketing Director",
      description: "Alice is responsible for marketing strategies.",
      detailedDescription: "With over a decade of experience, Alice has developed and executed innovative marketing strategies that have propelled our brand to new heights. Her leadership in digital marketing and brand management ensures that we are at the forefront of the real estate industry.",
      imageUrl: "../src/asse", // Replace with actual image path
    },
    {
      name: "Joseph Otieno",
      role: "Operations Manager",
      description: "Joseph handles day-to-day operations for the company.",
      detailedDescription: "Michael’s strong background in operations ensures that everything runs smoothly within the company. From managing teams to overseeing the logistics of property developments, Michael ensures we meet deadlines and deliver high-quality results.",
      imageUrl: "../src/assets/images/p2.jpeg", // Replace with actual image path
    },
    {
      name: "Odhiambo Max",
      role: "Legal Advisor",
      description: "Odhiambo provides legal guidance for our projects.",
      detailedDescription: "As our Legal Advisor, Odhiambo ensures that all legal aspects of our projects are handled with utmost professionalism. She handles everything from contracts to regulatory compliance, ensuring that all projects are legally sound and safe.",
      imageUrl: "../src/assets/images/p3.jpeg", // Replace with actual image path
    },
  ],
  boardOfDirectors: [
    {
      name: "Lambert Mango",
      role: "Chairman",
      description: "Lambert oversees the company’s board and strategic decisions.",
      detailedDescription: "As Chairman of the Board, Lambert is responsible for guiding the company’s high-level strategic direction. With decades of experience in leadership, Bob helps ensure that our long-term goals align with the vision of the board.",
      imageUrl: "../src/assets/images/p4..jpeg", // Replace with actual image path
    },
    {
      name: "Charlie aloo",
      role: "Director of Finance",
      description: "Charlie handles the financial strategy for the board.",
      detailedDescription: "Charlie provides strategic financial direction to the company. He plays a key role in investment strategies, ensuring that our financial health is maintained while securing future growth. His sharp financial acumen is essential in making informed decisions.",
      imageUrl: "../src/assets/images/p5.jpeg", 
    },
    {
      name: "Diana Mwaura",
      role: "Director of Operations",
      description: "Diana ensures that operational goals are met across the board.",
      detailedDescription: "Diana’s role as Director of Operations is crucial in ensuring smooth execution of our strategic initiatives. She manages the day-to-day operations and ensures that the board’s decisions are implemented efficiently and effectively.",
      imageUrl: "../src/assets/images/p6.jpeg", 
    },
    {
      name: "Victor Lee",
      role: "Director of Marketing",
      description: "Victor leads the marketing initiatives for the board.",
      detailedDescription: "Victor is responsible for overseeing marketing strategies for the board’s initiatives. His role is to ensure the company’s vision is communicated effectively, driving awareness and positive public perception.",
      imageUrl: "../src/assets/images/team9.jpg", // 
    },
    {
      name: "Rachel Adams",
      role: "Director of Legal Affairs",
      description: "Rachel advises the board on legal matters.",
      detailedDescription: "Rachel’s role as Director of Legal Affairs is to provide high-level legal advice to the board. She ensures that all actions taken by the board are in compliance with laws and regulations, protecting the company from potential legal risks.",
      imageUrl: "../src/assets/images/team10.jpg", // Replace with actual image path
    },
    {
      name: "Daniel aringo",
      role: "Director of Strategy",
      description: "Daniel oversees strategic planning for the board.",
      detailedDescription: "As Director of Strategy, Daniel plays an essential role in shaping the company’s long-term plans. He leads the strategic planning process, ensuring that all initiatives align with the company’s vision and long-term goals.",
      imageUrl: "../src/assets/images/team11.jpg", // Replace with actual image path
    },
  ],
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleReadMore = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <Navbar
        
        backgroundImage='../assets/meetteam.jpeg' />
      {/* Our Experts Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.experts.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
                <button
                  onClick={() => handleReadMore(member)}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.boardOfDirectors.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
                <button
                  onClick={() => handleReadMore(member)}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Detailed Team Member Information */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <div className="flex items-center mb-6">
              <img
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                className="w-48 h-48 object-cover mb-6"
              />
              <div>
                <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
                <p className="text-xl text-gray-600">{selectedMember.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{selectedMember.detailedDescription}</p>
          </div>
        </div>
      )}

      {/* Footer Section */}
     
    </>
  );
};

export default Team;

