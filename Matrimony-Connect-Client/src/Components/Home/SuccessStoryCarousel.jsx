import ThemeContext from "@/context/ThemeContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SuccessStoryCarousel = () => {
  const [stories, setStories] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axiosPublic.get("/success-story");
        setStories(response.data || []);
      } catch (err) {
        console.error("Error fetching stories:", err);
      }
    };

    fetchStories();
  }, []);

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-[#1A1C2C] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Success Stories
        </h2>

        {stories.length > 0 ? (
          <Swiper
            spaceBetween={24}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
          >
            {stories.map((story) => (
              <SwiperSlide key={story._id}>
                <div
                  className={`rounded-2xl shadow-md h-full p-6 flex flex-col items-center justify-between text-center transition duration-300 ${
                    isDarkMode ? "bg-[#24263B]" : "bg-white"
                  }`}
                >
                  <img
                    src={story.coupleImage || "https://via.placeholder.com/150"}
                    alt="Couple"
                    className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-indigo-500"
                  />
                  <h3 className="text-lg font-semibold">
                    Biodata IDs: {story.selfBiodataId} & {story.partnerBiodataId}
                  </h3>
                  <p
                    className={`mt-4 text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {story.successStory}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-lg mt-8">
            No success stories shared yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default SuccessStoryCarousel;
