import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Component/UI/Banner/Banner';

// Images
import NMBanner from "../assets/NMBanner.jpeg";
import NMcard1 from "../assets/NMcard1.png";
import NMcard2 from "../assets/NMcard2.png";
import NMcard3 from "../assets/NMcard3.jpeg";

import card1img from "../assets/15th.jpeg" 
import card2img from "../assets/newBanner1.jpeg"
import card3img from "../assets/football/football22.jpeg"
import card4img from "../assets/Townhall/townhallB.jpeg"

import { IoIosArrowForward } from "react-icons/io";

const NewsMedia = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specific path
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Banner contest={"News & Media Centre"} bannerImg={NMBanner} />

      {/*section 1 */}
      <div className='px-6 md:px-16 lg:px-24 pt-12 mb-40 font-poppins'>
        <h2 className='text-3xl mb-8'>News & Insights</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Section 1 */}
          <div className='flex flex-col gap-6'>
            {/* Card 1 */}
            <div 
              className='group p-0 border' 
              style={{ borderColor: '#E5E7EB' }} 
              onClick={() => handleCardClick('/news/15')} // Change path here
            >
              <div className='relative'>
                <img src={NMcard1} alt="Card 1" className='w-full h-44 object-cover' />
                {/* Overlay */}
                <div className='absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 cursor-pointer transition-all duration-300'></div>
              </div>
              <div className='p-5'>
                <h3 className='text-base font-semibold hover:text-[#1A56DB] transition-all duration-300 cursor-pointer'>
                  In the Arena: 19 Years of Excellence in the Energy Industry
                </h3>
                <li className='text-mainColor text-base transition-all duration-300'>
                  January 20, 2025
                </li>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className='group p-0 border' 
              style={{ borderColor: '#E5E7EB' }} 
              onClick={() => handleCardClick('/news/16')} // Change path here
            >
              <div className='relative'>
                <img src={NMcard2} alt="Card 2" className='w-full h-44 object-cover' />
                {/* Overlay */}
                <div className='absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 cursor-pointer transition-all duration-300'></div>
              </div>
              <div className='p-5'>
                <h3 className='text-base font-semibold hover:text-[#1A56DB] transition-all cursor-pointer duration-300'>
                  Asiko MD Joins Panel Session at 2024 Gas Investment Forum
                </h3>
                <li className='text-mainColor text-base transition-all duration-300'>
                  November 15, 2024
                </li>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className='flex flex-col gap-6'>
            {/* Card 3 */}
            <div 
              className='border border-[#E5E7EB] py-8 px-5' 
              onClick={() => handleCardClick('/news/11')} // Change path here
            >
              <h3 className='text-lg font-medium hover:text-mainColor cursor-pointer transition-all duration-300'>
                Asiko Attends Nigeria Liquefied and Compressed Gases Association Conference
              </h3>
              <li className='text-mainColor text-base mt-4'>November 13, 2024</li>
            </div>

            {/* Card 4 */}
            <div 
              className='border border-[#E5E7EB] py-8 px-5' 
              onClick={() => handleCardClick('/news/17')} // Change path here
            >
              <h3 className='text-lg font-medium hover:text-mainColor cursor-pointer transition-all duration-300'>
                Felix Ekundayo Joins Former Secretary of State John Kerry at 2024 Gas Tech
              </h3>
              <li className='text-mainColor text-base mt-4'>October 12, 2024</li>
            </div>

            {/* Card 5 */}
            <div 
              className='border border-[#E5E7EB] py-8 px-5' 
              onClick={() => handleCardClick('/news/14')} // Change path here
            >
              <h3 className='text-lg font-medium hover:text-mainColor cursor-pointer transition-all duration-300'>
                Asiko, 5 Others Receive First Ever Midstream and Downstream Gas Infrastructure Fund
              </h3>
              <li className='text-mainColor text-base mt-4'>October 2, 2024</li>
            </div>
          </div>

          {/* Section 3 */}
          <div className='border p-0 relative overflow-hidden' style={{ borderColor: '#E5E7EB' }}>
            {/* Image with zoom effect */}
            <img
              src={NMcard3}
              alt="Card 3"
              className='w-full h-56 cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'
              onClick={() => handleCardClick('/news/6')} // Change path here
            />

            {/* Content below the image */}
            <div className='p-4 bg-[#AC231E]'>
              <h2 className='text-2xl font-medium text-center text-secondary mt-12'>Join Our Mailing List</h2>
              <form className='flex flex-col gap-6 p-4'>
                <input type="text" placeholder='Name' className='p-5 outline-none bg-[#771D1D]' />
                <input type="email" placeholder='Email Address' className='p-5 outline-none bg-[#771D1D]' />
                <button className='mt-10 bg-primary text-secondary p-4 rounded-lg hover:bg-[#111827]'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*section 2 */}
      <div className='px-6 md:px-16 lg:px-24 pt-12 mb-40 font-poppins'>
  <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
    <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-0 text-center sm:text-left'>News & Insights</h2>
    <button className="bg-[#AC231E] text-[14px] sm:text-[16px] lg:text-[18px] text-secondary font-semibold px-4 sm:px-10 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-[#8a1c18]">
      View More
      <IoIosArrowForward className="text-lg sm:text-xl" />
    </button>
  </div>

  {/* Card section */}
  <div className='flex flex-wrap justify-between gap-4 mt-10'>
    <div className='flex-1 min-w-[250px] bg-[#E5E7EB] border-b-4 border-[#AC231E]' onClick={() => handleCardClick('/news/3')}>
      <img src={card1img} alt="" className='h-[200px] object-cover w-full cursor-pointer' />
      <h3 className='mt-4 p-4 text-primary text-lg font-medium'>Asiko Attends NLPGA 15th Anniversary</h3>
      <p className='p-4 text-base font-semibold text-mainColor cursor-pointer'>{'VIEW IMAGE >'}</p>
    </div>

    <div className='flex-1 min-w-[250px] bg-[#E5E7EB] border-b-4 border-[#AC231E]'  onClick={() => handleCardClick('/news/2')}>
      <img src={card2img} alt="" className='h-[200px] object-cover w-full cursor-pointer' />
      <h3 className='mt-4 p-4 text-primary text-lg font-medium'>Asiko Energy Meeting With Ijora Community Leaders</h3>
      <p className='p-4 text-base font-semibold text-mainColor cursor-pointer'>{'VIEW IMAGE >'}</p>
    </div>

    <div className='flex-1 min-w-[250px] bg-[#E5E7EB] border-b-4 border-[#AC231E]'  onClick={() => handleCardClick('/news/13')}>
      <img src={card3img} alt="" className='h-[200px] object-cover w-full cursor-pointer' />
      <h3 className='mt-4 p-4 text-primary text-lg font-medium'>Asiko Energy 2022 Football Game</h3>
      <p className='p-4 text-base font-semibold text-mainColor cursor-pointer'>{'VIEW IMAGE >'}</p>
    </div>

    <div className='flex-1 min-w-[250px] bg-[#E5E7EB] border-b-4 border-[#AC231E]'  onClick={() => handleCardClick('/news/12')}> 
      <img src={card4img} alt="" className='h-[200px] object-cover w-full cursor-pointer' />
      <h3 className='mt-4 p-4 text-primary text-lg font-medium'>Asiko First Half Townhall and Awards Night​</h3>
      <p className='p-4 text-base font-semibold text-mainColor cursor-pointer'>{'VIEW IMAGE>'}</p>
    </div>
  </div>
      </div>

    </div>
  );
}

export default NewsMedia;
