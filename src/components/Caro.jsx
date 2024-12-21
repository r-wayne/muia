
import { Carousel } from "react-responsive-carousel"; // Make sure to install this package
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Caro = () => {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative bg-gray-200">
        <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
          <div>
            <img src="../src/assets/images/testimonial1.jpg" alt="Testimonial 1" />
            <p className="legend">"Great service and support!"</p>
          </div>
          <div>
            <img src="../src/assets/images/testimonial2.jpg" alt="Testimonial 2" />
            <p className="legend">"I found my dream home thanks to their help!"</p>
          </div>
          <div>
            <img src="../src/assets/images/testimonial3.jpg" alt="Testimonial 3" />
            <p className="legend">"Highly recommend their services!"</p>
          </div>
        </Carousel>
      </section>

      {/* Video Testimony Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <video controls className="w-full h-48 rounded-lg">
                <source src="../src/assets/videos/testimonial1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold mt-2">John Doe</h3>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <video controls className="w-full h-48 rounded-lg">
                <source src="../src/assets/videos/testimonial2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold mt-2">Jane Smith</h3>
            </div>

            {/* Video Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <video controls className="w-full h-48 rounded-lg">
                <source src="../src/assets/videos/testimonial3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold mt-2">Alice Johnson</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <video controls className="w-full h-48 rounded-lg">
                <source src="../src/assets/videos/testimonial3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold mt-2">Alice Johnson</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <video controls className="w-full h-48 rounded-lg">
                <source src="../src/assets/videos/testimonial3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold mt-2">Alice Johnson</h3>
            </div>

            {/* Add more video cards as needed */}
          </div>
        </div>
      </section>

      {/* Text Testimony Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Text Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="../src/assets/images/profile1.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-4 h-4"
                      >
                        <path d="M8 .25a.25.25 0 0 1 .224.133l1.766 3.588 3.96.577a.25.25 0 0 1 .139.427l-2.86 2.785.675 3.93a.25.25 0 0 1-.363.263L8 13.347l-3.515 1.848a.25.25 0 0 1-.363-.263l.675-3.93L1.5 5.57a.25.25 0 0 1 .139-.427l3.96-.577L7.776.383A.25.25 0 0 1 8 .25z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p>"The team was incredibly helpful throughout my home buying process!"</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="../src/assets/images/profile2.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Jane Smith</h3>
                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-4 h-4"
                      >
                        <path d="M8 .25a.25.25 0 0 1 .224.133l1.766 3.588 3.96.577a.25.25 0 0 1 .139.427l-2.86 2.785.675 3.93a.25.25 0 0 1-.363.263L8 13.347l-3.515 1.848a.25.25 0 0 1-.363-.263l.675-3.93L1.5 5.57a.25.25 0 0 1 .139-.427l3.96-.577L7.776.383A.25.25 0 0 1 8 .25z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p>"I appreciate their professionalism and dedication to finding the right property for me."</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src="../src/assets/images/profile3.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Alice Johnson</h3>
                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-4 h-4"
                      >
                        <path d="M8 .25a.25.25 0 0 1 .224.133l1.766 3.588l3.96 .577a .25 .25 a .427l -2 .785 .675 -7 a .263 L8 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 L13 z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p>"They made the whole process seamless and enjoyable!"</p>
            </div>

            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* You can include your footer component here or create a new one */}
      {/* Example Footer Component Usage */}
      {/* import Footer from './Footer'; */}
      {/* ... */}
      {/*<Footer />*/}
    </div>
    
    // Optional: Add some global styles if needed
    // Make sure to include any necessary imports for Tailwind CSS in your project setup
    // Example:
    // import 'tailwindcss/tailwind.css';
)};

export default Caro;
