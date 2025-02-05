import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

// Images
import Banner1 from "../../assets/Banner1.jpeg";
import Banner2 from "../../assets/Banner2.jpeg";
import Banner3 from "../../assets/Banner3.jpeg";
import Banner4 from "../../assets/Banner4.jpeg";

const data = [
  { bgImg: Banner1, title: "Powering the clean energy\ntransition in West Africa" },
  { bgImg: Banner2, title: "Unlocking West Africa's potential\nwith our portfolio of sustainable\nenergy solutions" },
  { bgImg: Banner3, title: "Explore our comprehensive range\nof clean, efficient, and reliable\nenergy solutions" },
  { bgImg: Banner4, title: "Discover our commitment to sustainability\nand how we're shaping the future of energy" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  const about = () => {
    navigate('/ourCompany');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='hero w-full h-[70vh] md:h-screen cursor-pointer'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
        className='w-full h-full'
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div 
              className='relative w-full h-[70vh] md:h-screen bg-cover bg-center flex items-center justify-center md:items-end md:justify-start pb-10 md:pb-20' 
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${item.bgImg})` }}
            >
              {/* Animated Text Wrapper */}
              <motion.div
                key={activeIndex} // Force animation re-run on slide change
                className='bg-black bg-opacity-50 text-secondary p-4 md:p-6 lg:p-8 rounded-lg font-poppins max-w-lg 
                          absolute inset-0 flex flex-col items-center justify-center text-center 
                          md:items-start md:justify-end md:text-left md:left-20 lg:left-40 md:bottom-20'
                initial={{ opacity: 0, y: 50 }}  
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 0.8, ease: "easeOut" }}  
              >
                <h2 className='text-lg md:text-2xl lg:text-4xl font-bold whitespace-pre-line mb-4 md:mb-5'>
                  {item.title}
                </h2>
                <button
                  onClick={about}
                  className="bg-[#AC231E] text-sm md:text-base lg:text-lg text-secondary font-semibold 
                             px-5 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 rounded-full flex items-center gap-2 
                             transition-all duration-300 hover:bg-[#8a1c18]"
                >
                  Learn More About Us
                  <IoIosArrowForward className="text-lg" />
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Reduced Arrow Size */}
        <div className='swiper-button-prev !text-secondary !text-xl md:!text-3xl'></div>
        <div className='swiper-button-next !text-secondary !text-xl md:!text-3xl'></div>
        
        <div className='swiper-pagination !text-secondary'></div>
      </Swiper>
    </div>
  );
};

export default Hero;
