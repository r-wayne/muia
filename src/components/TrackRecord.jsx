
import { FaRegGrinHearts } from "react-icons/fa";
import { SiGoogletasks } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";
import { FaHourglassHalf } from "react-icons/fa6";

const TrackRecord = () => {
  return (
    <section
      className="relative bg-cover bg-center py-10 bg-[url('../assets/land.avif')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Our Track Record</h2>
        <p className="text-center text-white mb-8">
          With a proven track record of success, AMG Realtors has assisted over 6,000 clients in realizing their property dreams. Here’s why you can trust us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Achievement 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHourglassHalf className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">20+ Years of Experience</h3>
            <p className="text-gray-700">
              Our extensive experience in the real estate market ensures that you receive expert guidance at every step of your investment journey.
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaRegGrinHearts className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Trusted by Thousands</h3>
            <p className="text-gray-700">
              We have built a reputation for integrity and transparency, making us a trusted partner for thousands of satisfied clients.
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SiGoogletasks className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Successful Projects</h3>
            <p className="text-gray-700">
              Our portfolio includes numerous successful projects across Kenya, including prime land developments in Nanyuki, Nakuru, Malindi, and Diani.
            </p>
          </div>

          {/* Achievement 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaRegGrinHearts className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Client Satisfaction</h3>
            <p className="text-gray-700">
              We prioritize our clients' needs and satisfaction, ensuring that every transaction is smooth and beneficial.
            </p>
          </div>

          {/* Achievement 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <SiGoogletasks className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Comprehensive Services</h3>
            <p className="text-gray-700">
              From land acquisition to property management, we offer a full range of services to meet all your real estate needs.
            </p>
          </div>

          {/* Achievement 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <LiaAwardSolid className="text-blue-800 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Community Impact</h3>
            <p className="text-gray-700">
              Our projects contribute positively to local communities, promoting sustainable development and economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
