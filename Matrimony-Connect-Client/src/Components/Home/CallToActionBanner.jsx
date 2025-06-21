import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const CallToActionBanner = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl shadow-xl p-10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden max-w-6xl mx-auto ${
        isDarkMode
          ? "bg-gradient-to-r from-indigo-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
      }`}
    >
      <div
        className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/10 to-black/10"
      ></div>

      <div className="relative z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Begin Your Meaningful Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-100/90">
          Discover genuine connections and start a new chapter today.
        </p>
      </div>

      <NavLink to="/register" className="relative z-10">
        <button
          className={`px-6 py-3 text-lg rounded-lg font-semibold shadow-md transition duration-300 ${
            isDarkMode
              ? "bg-indigo-500 hover:bg-indigo-400 text-white"
              : "bg-white text-indigo-600 hover:bg-gray-100"
          }`}
        >
          Get Started Now
        </button>
      </NavLink>
    </div>
  );
};

export default CallToActionBanner;
