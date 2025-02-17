import React from 'react';
import Banner from '../Component/UI/Banner/Banner';
import bannerImg from '../assets/15th.jpeg';

import img1 from '../assets/NLPGA/1.jpeg';
import img2 from '../assets/NLPGA/2.jpeg';
import img3 from '../assets/NLPGA/3.jpeg';
import img4 from '../assets/NLPGA/4.jpeg';
import img5 from '../assets/NLPGA/5.jpeg';
import img6 from '../assets/NLPGA/6.jpeg';
import img7 from '../assets/NLPGA/7.jpeg';
import img8 from '../assets/NLPGA/8.jpeg';
import img9 from '../assets/NLPGA/9.jpeg';
import img10 from '../assets/NLPGA/10.jpeg';
import img11 from '../assets/NLPGA/11.jpeg';
import img12 from '../assets/NLPGA/12.jpeg';
import img13 from '../assets/NLPGA/13.jpeg';
import img14 from '../assets/NLPGA/14.jpeg';
import img15 from '../assets/NLPGA/15.jpeg';

const NewsDetail3 = () => {
  return (
    <div>
      <Banner contest={"Asiko Attends NLPGA 15th Anniversary"} bannerImg={bannerImg} />

      <div className='px-6 md:px-16 lg:px-24 pt-12 mt-10 mb-40'>
        {/* Grid Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={img1} alt="" className='w-full h-[200px] object-cover' />
          <img src={img2} alt="" className='w-full h-[200px] object-cover' />
          <img src={img3} alt="" className='w-full h-[200px] object-cover' />
          <img src={img4} alt="" className='w-full h-[200px] object-cover' />
          <img src={img5} alt="" className='w-full h-[200px] object-cover' />
          <img src={img6} alt="" className='w-full h-[200px] object-cover' />
          <img src={img7} alt="" className='w-full h-[200px] object-cover' />
          <img src={img8} alt="" className='w-full h-[200px] object-cover' />
          <img src={img9} alt="" className='w-full h-[200px] object-cover' />
          <img src={img10} alt="" className='w-full h-[200px] object-cover' />
          <img src={img11} alt="" className='w-full h-[200px] object-cover' />
          <img src={img12} alt="" className='w-full h-[200px] object-cover' />
          <img src={img13} alt="" className='w-full h-[200px] object-cover' />
          <img src={img14} alt="" className='w-full h-[200px] object-cover' />
          <img src={img15} alt="" className='w-full h-[200px] object-cover' />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail3;
