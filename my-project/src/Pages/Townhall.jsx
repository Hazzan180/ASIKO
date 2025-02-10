import React from 'react';
import Banner from '../Component/UI/Banner/Banner';

import townhallB from '../assets/Townhall/townhallB.jpeg';
import img1 from "../assets/Townhall/1.jpeg";
import img2 from "../assets/Townhall/2.jpeg";
import img3 from "../assets/Townhall/3.jpeg";
import img4 from "../assets/Townhall/4.jpeg";
import img5 from "../assets/Townhall/5.jpeg";
import img6 from "../assets/Townhall/6.jpeg";
import img7 from "../assets/Townhall/7.jpeg";
import img8 from "../assets/Townhall/8.jpeg";
import img9 from "../assets/Townhall/9.jpeg";
import img10 from "../assets/Townhall/10.jpeg";
import img11 from "../assets/Townhall/11.jpeg";
import img12 from "../assets/Townhall/12.jpeg";
import img13 from "../assets/Townhall/13.jpeg";
import img14 from "../assets/Townhall/14.jpeg";
import img15 from "../assets/Townhall/15.jpeg";
import img16 from "../assets/Townhall/16.jpeg";
import img17 from "../assets/Townhall/17.jpeg";
import img18 from "../assets/Townhall/18.jpeg";
import img19 from "../assets/Townhall/19.jpeg";
import img20 from "../assets/Townhall/20.jpeg";
import img21 from "../assets/Townhall/21.jpeg";
import img22 from "../assets/Townhall/22.jpeg";
import img23 from "../assets/Townhall/23.jpeg";
import img24 from "../assets/Townhall/24.jpeg";
import img25 from "../assets/Townhall/25.jpeg";
import img26 from "../assets/Townhall/26.jpeg";
import img27 from "../assets/Townhall/27.jpeg";
import img28 from "../assets/Townhall/28.jpeg";
import img29 from "../assets/Townhall/29.jpeg";
import img30 from "../assets/Townhall/30.jpeg";
import img31 from "../assets/Townhall/31.jpeg";
import img32 from "../assets/Townhall/32.jpeg";
import img33 from "../assets/Townhall/33.jpeg";
import img34 from "../assets/Townhall/34.jpeg";
import img35 from "../assets/Townhall/35.jpeg";
import img36 from "../assets/Townhall/36.jpeg";
import img37 from "../assets/Townhall/37.jpeg";
import img38 from "../assets/Townhall/38.jpeg";
import img39 from "../assets/Townhall/39.jpeg";
import img40 from "../assets/Townhall/40.jpeg";
import img41 from "../assets/Townhall/41.jpeg";
import img42 from "../assets/Townhall/42.jpeg";
import img43 from "../assets/Townhall/43.jpeg";

const Townhall = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
    img17, img18, img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28, img29, img30, img31, img32,
    img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43
  ];

  return (
    <div>
      <Banner contest={"Asiko First Half Townhall and Awards Night​"} bannerImg={townhallB} />

      <div className="px-6 md:px-[10%] py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* Render images dynamically, except the last one */}
        {images.slice(0, images.length - 1).map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Townhall ${index + 1}`} className="w-full h-auto  shadow-md" />
          </div>
        ))}
        
        {/* Last image that spans all columns */}
        <div className="md:col-span-3 relative">
          <img src={images[images.length - 1]} alt={`Townhall Last`} className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Townhall;
