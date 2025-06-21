import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const MembershipPlans = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const plans = [
    {
      name: "Basic Plan",
      price: "Free",
      features: [
        "Create Profile",
        "Search Matches",
        "View Profiles",
        "Limited Contact Access",
      ],
      buttonLabel: "Get Started",
      buttonLink: "/biodatas",
    },
    {
      name: "Premium Plan",
      price: "$25/month",
      features: [
        "All Basic Features",
        "Unlimited Contact Access",
        "Priority Listing",
        "Chat with Matches",
      ],
      buttonLabel: "Subscribe Now",
      buttonLink: "/membership-plans-page",
    },
    {
      name: "Elite Plan",
      price: "$50/month",
      features: [
        "All Premium Features",
        "Dedicated Matchmaker",
        "Exclusive Matches",
        "Personalized Support",
      ],
      buttonLabel: "Subscribe Now",
      buttonLink: "/membership-plans-page",
    },
  ];

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-[#1A1C2C] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tight">Membership Plans</h2>
          <p className={`mt-4 text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Choose the plan that suits your goals — and start meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl p-8 transform transition hover:scale-[1.02] ${
                isDarkMode ? "bg-[#24263B]" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
              <p
                className={`text-3xl font-bold mb-6 ${
                  isDarkMode ? "text-violet-400" : "text-violet-600"
                }`}
              >
                {plan.price}
              </p>

              <ul className={`mb-6 space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>

              <a
                href={plan.buttonLink}
                className={`inline-block w-full text-center font-medium text-lg px-6 py-3 rounded-lg transition shadow ${
                  isDarkMode
                    ? "bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:opacity-90"
                    : "bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:opacity-90"
                }`}
              >
                {plan.buttonLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
