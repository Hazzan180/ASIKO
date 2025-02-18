import React from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from '../Component/UI/Banner/Banner';
import yellow from '../assets/yellow.jpeg';

import card1img from "../assets/15th.jpeg"; 
import card2img from "../assets/newBanner1.jpeg";
import card3img from "../assets/football/football22.jpeg";
import card4img from "../assets/Townhall/townhallB.jpeg";
import card5img from "../assets/terminal/b1.jpeg";

const AsikoInP = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  
    const handleCardClick = (path) => {
      navigate(path); // Navigate to the specific path
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

  return (
    <div className='bg-[#F3F4F6]'>
      <Banner contest={"Asiko In Pictures"} bannerImg={yellow} />

      <div className='px-6 md:px-16 lg:px-24 pt-12 pb-40 font-poppins'>
        {/* Grid layout to display 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col h-full">
            <div className='bg-white shadow-lg  overflow-hidden flex flex-col' onClick={() => handleCardClick('/news/3')}>
              <img src={card1img} alt="Event 1" className='w-full h-72 object-cover cursor-pointer' />
              <div className='p-7 flex-grow bg-secondary'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Asiko Attends NLPGA 15th Anniversary</h3>
                <p className='text-base font-semibold text-mainColor cursor-pointer hover:underline'>{'VIEW IMAGES >>'}</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full">
            <div className='bg-white shadow-lg overflow-hidden flex flex-col' onClick={() => handleCardClick('/news/2')}>
              <img src={card2img} alt="Event 2" className='w-full h-72 object-cover cursor-pointer' />
              <div className='p-7 flex-grow bg-secondary'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Asiko Energy Meeting With Ijora Community Leaders</h3>
                <p className='text-base font-semibold text-mainColor cursor-pointer hover:underline'>{'VIEW IMAGES >>'}</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full">
            <div className='bg-white shadow-lg  overflow-hidden flex flex-col' onClick={() => handleCardClick('/news/13')}>
              <img src={card3img} alt="Event 3" className='w-full h-72 object-cover cursor-pointer' />
              <div className='p-7 flex-grow bg-secondary'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Asiko Energy 2022 Football Game</h3>
                <p className='text-base font-semibold text-mainColor cursor-pointer hover:underline'>{'VIEW IMAGES >>'}</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col h-full">
            <div className='bg-white shadow-lg  overflow-hidden flex flex-col' onClick={() => handleCardClick('/news/12')}>
              <img src={card4img} alt="Event 4" className='w-full h-72 object-cover cursor-pointer' />
              <div className='p-7 flex-grow bg-secondary'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Asiko First Half Townhall and Awards Night​</h3>
                <p className='text-base font-semibold text-mainColor cursor-pointer hover:underline'>{'VIEW IMAGES >>'}</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col h-full">
            <div className='bg-white shadow-lg overflow-hidden flex flex-col' onClick={() => handleCardClick('/news/18')}>
              <img src={card5img} alt="Event 5" className='w-full h-72 object-cover cursor-pointer' />
              <div className='p-7 flex-grow bg-secondary'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>Asiko Energy breaks ground on LNG, LPG Terminal​</h3>
                <p className='text-base font-semibold text-mainColor cursor-pointer hover:underline'>{'VIEW IMAGES >>'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsikoInP;
