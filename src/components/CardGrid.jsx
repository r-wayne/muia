import { motion } from "framer-motion";
import Card from "./Card";

const cardData = [
  {
    title: "Plot in Vipingo",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location1.jpg",
    location: "Vipingo, Kenya",
    size: "0.5 Acre",
    installation: "12 Monthly Installments",
    link: "/properties/vipingo",
  },
  {
    title: "Plot in Kitale",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location2.jpg",
    location: "Kitale, Kenya",
    size: "1 Acre",
    installation: "24 Monthly Installments",
    link: "/properties/kitale",
  },
  {
    title: "Plot in Nanyuki",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location3.jpg",
    location: "Nanyuki, Kenya",
    size: "1.5 Acres",
    installation: "18 Monthly Installments",
    link: "/properties/nanyuki",
  },
  {
    title: "Plot in Gatanga Road",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location4.jpg",
    location: "Gatanga Road, Kenya",
    size: "0.8 Acre",
    installation: "12 Monthly Installments",
    link: "/properties/gatanga-road",
  },
  {
    title: "Plot in Nakuru",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location5.jpg",
    location: "Nakuru, Kenya",
    size: "0.25 Acre",
    installation: "6 Monthly Installments",
    link: "/properties/nakuru",
  },
  {
    title: "Plot in Kithimani",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location6.jpg",
    location: "Kithimani, Kenya",
    size: "1 Acre",
    installation: "18 Monthly Installments",
    link: "/properties/kithimani",
  },
  {
    title: "Plot in Ngong",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location7.jpg",
    location: "Ngong, Kenya",
    size: "0.5 Acre",
    installation: "12 Monthly Installments",
    link: "/properties/ngong",
  },
  {
    title: "Plot in Naro Moru",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location8.jpg",
    location: "Naro Moru, Kenya",
    size: "1.2 Acres",
    installation: "24 Monthly Installments",
    link: "/properties/naro-moru",
  },
  {
    title: "Plot in Malindi",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location9.jpg",
    location: "Malindi, Kenya",
    size: "0.4 Acre",
    installation: "12 Monthly Installments",
    link: "/properties/malindi",
  },
  {
    title: "Plot in Kangundo Road",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location10.jpg",
    location: "Kangundo Road, Kenya",
    size: "1 Acre",
    installation: "18 Monthly Installments",
    link: "/properties/kangundo-road",
  },
  {
    title: "Plot in Kitengela",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location11.jpg",
    location: "Kitengela, Kenya",
    size: "0.75 Acre",
    installation: "24 Monthly Installments",
    link: "/properties/kitengela",
  },
  {
    title: "Plot in Kajiado",
    price: "ksh 250,000",
    bookingFee: "ksh 80,000",
    image: "../assets/location12.jpg",
    location: "Kajiado, Kenya",
    size: "2 Acres",
    installation: "36 Monthly Installments",
    link: "/properties/kajiado",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const CardGrid = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title Section */}
      <motion.div className="text-center mb-16" variants={textVariants}>
        <h3 className="text-4xl font-bold text-red-800 mb-4">
          Investment Locations
        </h3>
        <div className="text-red-600 font-bold">
          <a href="#" className="mr-2">Nakuru</a> /
          <a href="#" className="mx-2">Ngong</a> /
          <a href="#" className="mx-2">Mombasa</a> /
          <a href="#" className="mx-2">Diani</a> /
          <a href="#" className="mx-2">Nanyuki</a> /
          <a href="#" className="ml-2">Malindi</a>
        </div>
      </motion.div>

      {/* Featured Properties Section */}
      <motion.div
        className="text-center mb-16 flex gap-4 justify-center"
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-blue-800 bg-gray-200 p-6 inline-block rounded-md mb-4"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          Featured Properties
        </motion.h1>
        <motion.h4
          className="text-lg text-gray-700 p-4 rounded-md flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          Explore our exclusive properties for sale in prime locations
        </motion.h4>
      </motion.div>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {cardData.map((data, index) => (
          <motion.div
            key={index}
            className="shadow-lg rounded-md overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05, translateY: -10 }}
          >
            <Card
              imagelink={data.image}
              title={data.title}
              location={data.location}
              size={data.size}
              installation={data.installation}
              link={data.link}
              price={data.price}
              bookingFee={data.bookingFee}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardGrid;
