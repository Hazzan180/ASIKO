import React from 'react';
import Banner from '../Component/UI/Banner/Banner';

import img1 from "../assets/terminal/b1.jpeg";
import img2 from "../assets/terminal/b2.jpeg";
import img3 from "../assets/terminal/b3.jpeg";
import img4 from "../assets/terminal/b4.jpeg";

const TerminalPro = () => {
  return (
    <div>
      <Banner contest={"Asiko Energy breaks ground on LNG, LPG Terminal"} bannerImg={img1} />

      <div className='px-6 md:px-16 lg:px-24 pt-12 mb-40'>
        {/* Row for the 3 smaller images */}
        <div className='flex gap-4 mb-4'>
          <img src={img2} alt="Image 2" className="w-1/3 object-cover" />
          <img src={img3} alt="Image 3" className="w-1/3 object-cover" />
          <img src={img1} alt="Image 1" className="w-1/3 object-cover" />
        </div>

        {/* Big image */}
        <div>
          <img src={img4} alt="Big Image" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TerminalPro;
