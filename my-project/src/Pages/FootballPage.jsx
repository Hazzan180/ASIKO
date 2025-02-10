import React from 'react';
import Banner from '../Component/UI/Banner/Banner';

import news14B from '../assets/news14B.jpeg';
import football1 from '../assets/football/football1.jpeg';
import football2 from '../assets/football/football2.jpeg';
import football3 from '../assets/football/football3.jpeg';
import football4 from '../assets/football/football4.jpeg';
import football5 from '../assets/football/football5.jpeg';
import football7 from '../assets/football/football7.jpeg';
import football8 from '../assets/football/football8.jpeg';
import football9 from '../assets/football/football9.jpeg';
import football10 from '../assets/football/football10.jpeg';
import football11 from '../assets/football/football11.jpeg';
import football12 from '../assets/football/football12.jpeg';
import football13 from '../assets/football/football13.jpeg';
import football14 from '../assets/football/football14.jpeg';
import football15 from '../assets/football/football15.jpeg';
import football16 from '../assets/football/football16.jpeg';
import football17 from '../assets/football/football17.jpeg';
import football18 from '../assets/football/football18.jpeg';
import football19 from '../assets/football/football19.jpeg';
import football20 from '../assets/football/football20.jpeg';
import football21 from '../assets/football/football21.jpeg';
import football22 from '../assets/football/football22.jpeg';
import football23 from '../assets/football/football23.jpeg';
import football24 from '../assets/football/football24.jpeg';
import football25 from '../assets/football/football25.jpeg';
import football26 from '../assets/football/football26.jpeg';
import football28 from '../assets/football/football28.jpeg';
import football29 from '../assets/football/football29.jpeg';
import football30 from '../assets/football/football30.jpeg';
import Hnews3 from '../assets/Hnews3.jpeg';

const FootballPage = () => {
  const images = [
    football1, football2, football3, football4, football5, news14B, football7, football8,
    football9, football10, football11, football12, football13, football14, football15, football16,
    football17, football18, football19, football20, football21, football22, football23, football24,
    football25, football26, Hnews3, football28, football29, football30
  ];

  return (
    <div>
      <Banner contest={"Asiko Energy 2022 Football Game"} bannerImg={news14B} />

      <div className=" px-6 md:px-[10%] py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* Render images dynamically */}
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Football ${index + 1}`} className="w-full h-auto shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballPage;
