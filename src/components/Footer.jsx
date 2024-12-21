

const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">About Us</h2>
              <p className="text-sm mb-4">
                At Rholand, we are dedicated to providing exceptional real estate services that empower our clients to make informed property investments. Our commitment to integrity and customer satisfaction sets us apart in the industry.
              </p>
              <p className="text-sm">Turn your property dreams into reality with us!</p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>
              <ul>
                <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="#properties" className="hover:text-yellow-400">Properties</a></li>
                <li><a href="#testimonials" className="hover:text-yellow-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Information Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Contact Us</h2>
              <p className="text-sm mb-2">Head Office: Absa Towers, Loita Street, 2nd Floor</p>
              <p className="text-sm mb-2">Phone: +254 700 111 111</p>
              <p className="text-sm mb-2">Email: info@rholand.co.ke</p>
  
              {/* Social Media Links */}
              <h2 className="text-lg font-bold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-400">Facebook</a>
                <a href="#" className="hover:text-yellow-400">Twitter</a>
                <a href="#" className="hover:text-yellow-400">Instagram</a>
                <a href="#" className="hover:text-yellow-400">LinkedIn</a>
              </div>
            </div>
          </div>
  
          {/* Copyright Notice */}
          <div className="text-center mt-8 border-t border-gray-600 pt-4">
            © 2024 Rholand. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  