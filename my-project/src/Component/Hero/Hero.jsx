import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Images
import Banner1 from "../../assets/Banner1.jpeg";
import Banner2 from "../../assets/Banner2.jpeg";
import Banner3 from "../../assets/Banner3.jpeg";
import Banner4 from "../../assets/Banner4.jpeg";

const data = [
  {
    bgImg: Banner1,
    title: "Powering the clean energy\ntransition in West Africa"
  },
  {
    bgImg: Banner2,
    title: "Unlocking West Africa's potential\nwith our portfolio of sustainable\nenergy solutions"
  },
  {
    bgImg: Banner3,
    title: "Explore our comprehensive range\nof clean, efficient, and reliable\nenergy solutions"
  },
  {
    bgImg: Banner4,
    title: "Discover our commitment to sustainability\nand how we're shaping the future of energy"
  },
];

const Hero = () => {
  return (
    <div className='hero w-full h-screen cursor-pointer'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className='w-full h-full'
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div 
              className='w-full h-screen flex flex-col items-center justify-center bg-cover bg-center cursor-pointer' 
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${item.bgImg})` }}
            >
              <div className='bg-black bg-opacity-50 text-secondary p-5 rounded-lg text-center'>
                <h2 className='text-4xl font-bold whitespace-pre-line'>{item.title}</h2>
                <button className='bg-mainColor text-secondary rounded-full mt-6 font-medium border py-4 px-4'>
                  Learn more about us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-button-prev !text-secondary'></div>
        <div className='swiper-button-next !text-secondary'></div>
        <div className='swiper-pagination !text-secondary'></div>
      </Swiper>
    </div>
  );
};

export default Hero;
