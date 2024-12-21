import React from 'react'
import contactUs from '../../public/assets/contactUs.png'

export default function ContactUs() {
  return (
    <div>
      <section id="contact" className="bg-gray-100 p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={contactUs} alt="Contact Us" className="w-full rounded" />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl mb-4">We Would Love to Hear from You</h2>
            <form action="#" method="post" className="space-y-4">
              <label htmlFor="name" className="block">Name:</label>
              <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded" />

              <label htmlFor="email" className="block">Email:</label>
              <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded" />

              <label htmlFor="message" className="block">Message:</label>
              <textarea id="message" name="message" required className="w-full p-3 border border-gray-300 rounded"></textarea>

              <label htmlFor="how" className="block">How did you know about us?</label>
              <input type="text" id="how" name="how" className="w-full p-3 border border-gray-300 rounded" />

              <button type="submit" className="bg-green-700 text-white py-2 px-6 rounded mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
