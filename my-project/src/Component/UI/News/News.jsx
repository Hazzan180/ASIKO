import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import Hnews1 from "../../../assets/Hnews1.png";
import Hnews2 from "../../../assets/Hnews2.png";
import Hnews3 from "../../../assets/Hnews3.jpeg";
import Hnews4 from "../../../assets/Hnews4.png";

const News = () => {
  const navigate = useNavigate();

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      delay: 100,
    });
  }, []);

  return (
    <div className="px-6 md:px-[10%] py-20 font-poppins">
      <h1 className="text-4xl font-bold text-primary mb-8">News & Media Centre</h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer gap-6" data-aos="fade-down" data-aos-delay="600">
        {/* Card 1 */}
        <div className="md:row-span-2">
          <NewsCard
            id={11}
            img={Hnews1}
            header="Featured"
            title="Asiko Attends Nigeria Liquefied and Compressed Gases Association Conference"
            tall
            showReadMore
            navigateTo={`/news/11`} // Navigate to a specific URL based on the card
          />
        </div>

        {/* Card 2 */}
        <div className="md:col-span-1">
          <NewsCard
            id={12}
            img={Hnews2}
            header="Photos"
            title="Asiko First Half Townhall and Awards Night"
            medium
            navigateTo={`/news/12`} // Navigate to a specific URL based on the card
          />
        </div>

        {/* Card 3 */}
        <div className="md:col-span-1 md:row-span-2">
          <NewsCard
            id={14}
            img={Hnews4}
            header="Update"
            title="Asiko, 5 Others Receive First Ever Midstream and Downstream Gas Infrastructure Fund"
            taller
            navigateTo={`/news/14`} // Navigate to a specific URL based on the card
          />
           <div className="mt-4 w-full hidden sm:block">
            {/* Hidden on small screens, visible on sm+ */}
            <button className="w-full bg-[#AC231E] text-xs text-secondary font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#8a1c18]">
              More News & Media 
              <IoIosArrowForward className="text-lg" />
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:col-span-1">
          <NewsCard
            id={13}
            img={Hnews3}
            header="Photos"
            title="Asiko 2022 Football Game"
            medium
            navigateTo={`/news/13`} // Navigate to a specific URL based on the card
          />
        </div>
        
      </div>
       {/* Extra Button - Visible only on small screens */}
       <div className="mt-4 w-full sm:hidden">
        <button className="w-full bg-[#AC231E] text-xs text-secondary font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#8a1c18]">
          More News & Media 
          <IoIosArrowForward className="text-lg" />
        </button>
      </div>
    </div>
  );
};

// NewsCard Component
const NewsCard = ({ img, header, title, tall, taller, medium, showReadMore, navigateTo }) => {
  const navigate = useNavigate();  // Use navigate here to navigate programmatically

  const handleCardClick = () => {
    navigate(navigateTo); // Navigate to the specified URL when the card is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden cursor-pointer group ${tall ? "min-h-[600px]" : taller ? "min-h-[500px]" : medium ? "min-h-[270px]" : "min-h-[250px]"}`}
      onClick={handleCardClick} // Add click handler to trigger navigation
    >
      {/* Background Image with Hover Zoom Effect */}
      <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img src={img} alt="News" className="w-full h-full object-cover"/>
      </div>

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-black/10 to-transparent opacity-80 z-10"></div>

      {/* Black Overlay (Appears on Hover) */}
      <div className="absolute inset-0 bg-[#000] opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-20"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white z-30 bg-gradient-to-t from-black via-black/80 to-transparent">
        <p className="text-base font-medium text-secondary uppercase mb-4">{header}</p>
        <h3 className="text-2xl font-bold text-secondary">{title}</h3>
        {showReadMore && <button onClick={handleCardClick} className="bg-[#AC231E] text-xs text-secondary font-semibold px-6 py-4 rounded-full mt-4 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#8a1c18]">Read More</button>}
      </div>
    </div>
  );
};

export default News;
