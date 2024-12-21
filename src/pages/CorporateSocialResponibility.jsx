import React from 'react'
import Navbar from '../components/Navbar'

const CorporateSocialResponibility = () => {
  return (
   <>
   <Navbar/>
   <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Commitment to a Better Future</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        At [Rholand], we believe that businesses have a responsibility to contribute positively to society and the environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sustainability Initiatives</h2>
          <img src="https://via.placeholder.com/400" alt="Sustainability" className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-600">
            We are dedicated to reducing our environmental footprint through sustainable practices.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Engagement</h2>
          <img src="https://via.placeholder.com/400" alt="Community Engagement" className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-600">
            We actively engage with our local communities to drive positive change through various initiatives.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Philanthropy</h2>
          <img src="https://via.placeholder.com/400" alt="Philanthropy" className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-600">
            Giving back is at the heart of our corporate values. We support various charitable organizations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h2>
          <img src="https://via.placeholder.com/400" alt="Impact" className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-600">
            Our initiatives have led to significant improvements in sustainability and community welfare.
          </p>
        </div>
      </div>

    
    </div>
   </>
  )
}

export default CorporateSocialResponibility
