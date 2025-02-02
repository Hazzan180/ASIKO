import React from 'react';

const Banner = ({ contest, bannerImg }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[65vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute bottom-4 left-6 text-left text-white px-6">
        <h1 className="text-secondary text-3xl sm:text-5xl font-bold font-poppins">{contest}</h1>
      </div>
    </div>
  );
};

export default Banner;
