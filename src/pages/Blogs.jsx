import React from "react";
import Navbar from "../components/Navbar";

const NewsAndBlog = () => {
  const news = [
    {
      title: "Breaking News: Land Ownership Trends in Kenya 2024",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content:
        "Land ownership in Kenya continues to evolve in 2024, with significant developments in rural and urban areas alike. The government’s focus on land reforms has brought forward a new era of opportunities for investors, farmers, and developers. Rural lands are being restructured to offer better prospects for agricultural growth, while urban areas are seeing rising land prices due to increased demand from infrastructure projects and population growth. Notably, counties like Kiambu, Nakuru, and Nairobi are experiencing a surge in property investments, driven by the desire to capitalize on economic expansion. As land becomes more valuable, concerns over land grabbing and the need for legal reforms are also increasing, calling for action on the protection of property rights and transparency in land transactions...",
    },
    {
      title: "Market Update: AI Stocks on the Rise",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content:
        "Artificial intelligence stocks see a significant rise amid positive earnings and new advancements in generative AI technologies...",
    },
  ];

  const blogs = [
    {
      title: "How to Stay Productive in 2024",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content:
        "Productivity in the modern world requires a balanced approach. Here are some tips to ensure you make the most of your time...",
    },
    {
      title: "The Future of Renewable Energy",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content:
        "Renewable energy is shaping our future. Explore the latest trends and what it means for sustainability in the coming decades...",
    },
  ];

  return (

    <>
    <Navbar/>
        <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        News and Blog
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* News Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">News</h2>
          <div className="space-y-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden animate-fadeIn"
              >
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  className="w-full h-56"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Blogs</h2>
          <div className="space-y-8">
            {blogs.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden animate-slideIn"
              >
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  className="w-full h-56"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default NewsAndBlog;
