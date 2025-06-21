import BannerImg from "@/assets/Home/banner.jpg";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setVideoUrl("https://www.youtube.com/embed/IuV80wYRld0?si=8haZiRCfEbowJOSd");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-[#1A1C2C] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6 leading-snug">
            Why Choose{" "}
            <span className={isDarkMode ? "text-violet-400" : "text-red-600"}>
              Your Perfect Match
            </span>
          </h2>

          <ul
            className={`space-y-4 text-base ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {[
              "Sign up at no cost and get started easily",
              "Profiles verified for authenticity",
              "Seamless communication via chat and video calls",
              "Personalized, private, and confidential matchmaking",
              "Safe, secure, and culturally aligned platform",
            ].map((point, i) => (
              <li key={i} className="flex items-center">
                <FaCheckCircle
                  className={`mr-3 text-lg ${
                    isDarkMode ? "text-violet-400" : "text-red-500"
                  }`}
                />
                {point}
              </li>
            ))}
          </ul>

          <Link to="/biodatas">
            <button className="mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white hover:opacity-90 shadow-lg transition">
              Discover Your Match
            </button>
          </Link>
        </div>

        {/* Right - Image & Modal */}
        <div className="lg:w-1/2 relative group">
          <img
            src={BannerImg}
            alt="Couple"
            className="rounded-xl shadow-xl object-cover w-full h-auto"
          />
          <button
            onClick={handleOpenModal}
            aria-label="Play Video"
            className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full shadow-lg hover:scale-105 transition"
          >
            <FaPlay className="text-red-600 text-3xl" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg max-w-3xl w-full overflow-hidden">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-800 text-2xl bg-white rounded-full hover:bg-gray-100 p-1"
            >
              <IoMdClose />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Promo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;
