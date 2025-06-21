import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const BdMarriage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="how-it-works"
      className={`relative py-12 px-6 md:px-0 transition-colors duration-500 ${
        isDarkMode ? "bg-[#1A1C2C] text-gray-200" : "bg-[#FDF6F0] text-[#333333]"
      }`}
    >
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Find Your Life Partner
          </h2>
          <p className={`max-w-xl mx-auto mt-4 text-lg md:text-xl ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Discover compatible matches with elegance and authenticity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              step: "1",
              title: "Build a True Profile",
              description:
                "Create a profile that expresses who you are and what you're looking for.",
            },
            {
              step: "2",
              title: "Explore Genuine Matches",
              description:
                "Use intuitive filters to find connections that align with your heart and values.",
            },
            {
              step: "3",
              title: "Connect and Grow",
              description:
                "Reach out, communicate securely, and take confident steps toward a meaningful future.",
            },
          ].map(({ step, title, description }) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full font-bold text-lg shadow-lg border-2 ${
                  isDarkMode
                    ? "bg-[#2E2F4F] border-[#C4B5FD] text-[#C4B5FD]"
                    : "bg-white border-[#A78BFA] text-[#A78BFA]"
                }`}
              >
                {step}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className={`mt-4 text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 m-auto max-w-xs h-[300px] blur-[100px] z-[-1]"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(167,139,250,0.2), rgba(28,27,52,0.2))"
            : "radial-gradient(circle, rgba(199,210,254,0.3), rgba(254,243,199,0.15))",
        }}
      />
    </section>
  );
};

export default BdMarriage;
