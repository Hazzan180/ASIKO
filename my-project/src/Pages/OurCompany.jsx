import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner';
import companyBanner from '../assets/companyBanner.jpeg';
import cSvg from "../assets/cSVG.png";
import cUser from "../assets/cUser.png";
import CareerUser from "../assets/CareerUser.jpeg"

const OurCompany = () => {
  return (
    <div>
      <Banner contest={"About Us"} bannerImg={companyBanner} />
    </div>
  );
}

export default OurCompany;
