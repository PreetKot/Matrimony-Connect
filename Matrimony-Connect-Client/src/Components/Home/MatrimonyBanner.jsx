import Banner from "@/assets/Home/banner.jpg";
import ThemeContext from "@/context/ThemeContext";
import useAuth from "@/hooks/useAuth";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MatrimonyBanner = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    if (user) {
      navigate("/biodatas");
    } else {
      navigate("/register");
    }
  };

  return (
    <section
  className={`px-4 py-28 md:px-0 transition-colors duration-500 ${
    isDarkMode ? "bg-[#1A1C2C] text-gray-100" : "bg-[#FAF9F6] text-[#111827]"
  }`}
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    {/* Left Text Section */}
    <div className="space-y-6 md:space-y-8 lg:space-y-10">
      <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
        Begin Your
        <span
          className={`block mt-2 ${
            isDarkMode ? "text-[#A78BFA]" : "text-[#7C3AED]"
          }`}
        >
          Journey Together
        </span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl">
        Find someone who shares your dreams and values — with a platform
        designed for meaningful, respectful, and lasting connections.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleClick}
          className="px-6 py-3 text-lg font-semibold rounded-md text-white bg-gradient-to-r from-violet-600 to-indigo-500 hover:opacity-90 transition-all shadow-md"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 inline-block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <NavLink
          to="/about-us"
          className={`px-6 py-3 rounded-md text-lg font-medium transition-all ${
            isDarkMode
              ? "bg-[#2D2E4F] text-gray-200 hover:bg-[#3B3C5F]"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Learn More
        </NavLink>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="w-full">
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
        <img
          src={Banner}
          alt="Matrimony Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default MatrimonyBanner;