import PropTypes from 'prop-types';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Navbar = ({ heroTitle, heroSubtitle, buttonText, buttonLink, backgroundImage }) => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Awards", link: "/awards" },
    { name: "Careers", link: "/careers" },
    { name: "Contacts", link: "/contacts" },
  ];

  const aboutUs = [
    "Who we are",
    "Our Team",
    "Corporate Social Responsibility",
  ];

  const properties = [
    "Plots in Vipingo",
    "Plots in Kitale",
    "Plots in Nanyuki",
    "Plots in Gatanga Road and Thika",
    "Plots in Nakuru",
    "Plots in Kithimani",
    "Plots in Ngong",
    "Plots in Naro Moru",
    "Plots in Malindi",
    "Plots in Kangundo Road",
    "Plots in Kitengela",
    "Plots in Kajiado",
  ];

  const infoCenter = [
    "Project Updates",
    "Customer Information",
    "FAQs",
    "News & Blogs",
    "Photo Gallery",
    "Video Gallery",
    "Newsletters & Downloads",
  ];

  const DropdownContent = ({ items, basePath }) => {
    if (!Array.isArray(items)) return null; // Ensure items is an array
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        {items.map((item) => (
          <a
            key={item}
            href={`/${basePath}/${item.toLowerCase().replace(/ /g, "-")}`}
            className="block text-sm py-1 hover:underline"
          >
            {item}
          </a>
        ))}
      </div>
    );
  };

  // State to handle opening and closing dropdowns
  const [dropdownOpen, setDropdownOpen] = useState({
    aboutUs: false,
    properties: false,
    infoCenter: false,
  });

  const toggleDropdown = (section) => {
    setDropdownOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <header>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">
            <img src="./assets/logoRholand.png" width="150" height="50" alt="Logo" />
          </div>
          <ul className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a href={item.link} className="relative text-white">
                  {item.name}
                  <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 group-hover:scale-x-100 group-hover:origin-left transition-all duration-300 ease-out" />
                </a>
              </li>
            ))}
            <li
              className="relative group"
              onMouseEnter={() => toggleDropdown('aboutUs')}
              onMouseLeave={() => toggleDropdown('aboutUs')}
            >
              <a href="#" className="relative text-white">
                About Us
                <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 group-hover:scale-x-100 group-hover:origin-left transition-all duration-300 ease-out" />
              </a>
              <HiChevronDown
                onClick={() => toggleDropdown('aboutUs')}
                className="ml-2 cursor-pointer"
              />
              {dropdownOpen.aboutUs && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute left-1/2 top-12 bg-white text-black shadow-lg z-20"
                    style={{ translateX: "-50%" }}
                  >
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                    <DropdownContent items={aboutUs} basePath="page" />
                  </motion.div>
                </AnimatePresence>
              )}
            </li>
            <li
              className="relative group"
              onMouseEnter={() => toggleDropdown('properties')}
              onMouseLeave={() => toggleDropdown('properties')}
            >
              <a href="#" className="relative text-white">
                Properties
                <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 group-hover:scale-x-100 group-hover:origin-left transition-all duration-300 ease-out" />
              </a>
              <HiChevronDown
                onClick={() => toggleDropdown('properties')}
                className="ml-2 cursor-pointer"
              />
              {dropdownOpen.properties && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute left-1/2 top-12 bg-white text-black shadow-lg z-20"
                    style={{ translateX: "-50%" }}
                  >
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                    <DropdownContent items={properties} basePath="properties" />
                  </motion.div>
                </AnimatePresence>
              )}
            </li>
            <li
              className="relative group"
              onMouseEnter={() => toggleDropdown('infoCenter')}
              onMouseLeave={() => toggleDropdown('infoCenter')}
            >
              <a href="#" className="relative text-white">
                Information Center
                <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 group-hover:scale-x-100 group-hover:origin-left transition-all duration-300 ease-out" />
              </a>
              <HiChevronDown
                onClick={() => toggleDropdown('infoCenter')}
                className="ml-2 cursor-pointer"
              />
              {dropdownOpen.infoCenter && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute left-1/2 top-12 bg-white text-black shadow-lg z-20"
                    style={{ translateX: "-50%" }}
                  >
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                    <DropdownContent items={infoCenter} basePath="info-center" />
                  </motion.div>
                </AnimatePresence>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="home"
        className="relative bg-cover bg-center h-[600px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
          <h2 className="text-4xl md:text-5xl font-bold">{heroTitle}</h2>
          <p className="text-lg md:text-xl mt-4">{heroSubtitle}</p>
          <a
            href={buttonLink}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded mt-6 inline-block transition"
          >
            {buttonText}
          </a>
        </div>
      </section>
    </header>
  );
};

Navbar.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Navbar;
