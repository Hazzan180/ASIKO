import React from 'react';
import { motion } from 'framer-motion';
import Helment from '../Component/Helment/Helment';
import Hero from '../Component/Hero/Hero';

// Images
import whoweare from "../assets/whoweare.png";
import homebg1 from "../assets/homebg1.jpeg";
import homeicon1 from "../assets/homeicon1.svg";
import homeicon2 from "../assets/homeicon2.svg";
import homeicon3 from "../assets/homeicon3.png";
import homeicon4 from "../assets/homeicon4.png";

import svg from "../assets/careerSvg.svg"
import homicons1 from "../assets/homicons1.jpeg"
import homicons2 from "../assets/homicons2.jpeg"
import homicons3 from "../assets/homicons3.jpeg"
import homicons4 from "../assets/homicons4.jpeg"
import homicons5 from "../assets/homicons5.jpeg"

import homeimgc1 from "../assets/homeimgc1.jpeg"
import homeimgc2 from "../assets/homeimgc2.jpeg"

const services = [
  {
    img: homicons1,
    title: "Sustainable Fuels",
    text: "Our LNG and LPG solutions are a reliable, environmentally friendly alternative to traditional fossil fuels, contributing to carbon emission reduction and supporting sustainable development across industries."
  },
  {
    img: homicons2,
    title: "Renewable Energy",
    text: "Our innovative solutions harness the power of renewable resources such as solar and biogas, enabling businesses and communities to reduce their carbon footprint and promote a cleaner, sustainable future."
  },
  {
    img: homicons3,
    title: "Power",
    text: "From LPG vehicle conversions to gas-powered power plants, we leverage our Power-as-a-service model to improve gas adoption and utilisation, contributing to reduced emissions and improved energy efficiency."
  },
  {
    img: homicons4,
    title: "Logistics",
    text: "Asiko Energy embodies operational excellence. Our streamlined supply chain practices and stringent quality control ensure the delivery of superior energy solutions that adhere to the highest industry standards."
  },
  {
    img: homicons5,
    title: "Supply & Trading",
    text: "Our efficient sales and top-notch distribution methods ensure that we can guarantee our clients' energy security while remaining competitively priced."
  },
]

const Home = () => {
  return (
    <Helment title='Home'>
      <Hero />

      {/* Section 2 */}
      <div className="px-6 md:px-[10%] py-8 flex flex-col md:flex-row justify-center items-center text-start gap-5 font-poppins">
        <div className="md:max-w-[50%] w-full">
          <h3 className="text-lg mb-6">WHO WE ARE</h3>
          <h1 className="text-3xl font-medium">Building a network of</h1>
          <h2 className="text-4xl font-bold font-playfair italic text-mainColor">clean energy solutions.</h2>
          <p className="text-gray mt-5">At Asiko Energy, we are passionate about transforming West Africa’s energy landscape and driving sustainable development by providing clean energy solutions. With years of expertise and a dedicated team of professionals, we are committed to helping meet today’s energy needs through various solutions, including Propane, LPG, LNG, and renewable energy sources.</p>
        </div>

        <div className="md:max-w-[50%] w-full flex justify-center">
          <img src={whoweare} alt="Career User" className="w-full max-w-full object-cover" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative px-6 md:px-[10%] py-8 font-poppins">
        {/* Background */}
        <img src={homebg1} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-cente rounded-lg">
            <img src={homeicon3} alt="" className="mb-4 w-20 h-20 object-contain" />
           
            <h3 className="text-lg">Operations in 4 out of 6 Geopolitical Zones</h3>
          </div>

          {/* Card 2 (Takes more space) */}
          <div className="md:col-span-2 bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Year-on-year increase in volumes sold from 2018 to 2022</h2>
            <div className="w-full space-y-4">
              {[{ year: '2018 - 2019', percent: 6 }, { year: '2019 - 2020', percent: 26 }, { year: '2020 - 2021', percent: 60 }, { year: '2021 - 2022', percent: 75 }].map((item, index) => (
                <div key={index} className="flex flex-col bg-gray-100 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-medium">YEAR {item.year}</h2>
                    <h2 className="text-xl font-bold text-mainColor">{item.percent}%</h2>
                  </div>
                  <span className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                    <span className="block h-full bg-mainColor" style={{ width: `${item.percent}%` }}></span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
            <img src={homeicon1} alt="" className="mb-4 w-20 h-20 object-contain" />
            <h1 className="text-3xl font-bold">100+</h1>
            <h3 className="text-lg">Employees</h3>
          </div>

          {/* Card 4 (Under Card 1) */}
          <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
            <img src={homeicon2} alt=""  className="mb-4 w-20 h-20 object-contain" />
            <h1 className="text-3xl font-bold">16+</h1>
            <h3 className="text-lg">Years In Existence</h3>
          </div>

          {/* Card 5 (Under Card 3) */}
          <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
            <img src={homeicon4} alt="" className="mb-4 w-20 h-20 object-contain" />
            <h1 className="text-3xl font-bold">70+</h1>
            <h3 className="text-lg">Road Tanker Trucks</h3>
          </div>
        </div>
      </div>

     {/* Section 4 */}
     <div className="relative px-6 md:px-[3%] py-12 font-poppins text-center">
        {/* Background Image */}
        <img src={svg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover -z-10 " />

       <div className="px-6 md:px-[10%] py-8 text-start">
       <h3 className="text-lg font-semibold text-secondary ">WHAT WE DO</h3>
        <h2 className="text-3xl font-bold text-secondary my-4">Comprehensive Energy Solutions</h2>
        <p className="text-secondary max-w-2xl  text-start">
          At Asiko Energy, we deliver comprehensive energy solutions to meet the diverse needs of our clients. Our portfolio includes clean energy solutions such as Propane, LPG, LNG, and renewable energy, supporting a sustainable future.
        </p>
       </div>

     {/* Card Section */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
  {services.map((service, index) => (
    <motion.div 
      key={index}
      className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer group p-6 flex flex-col justify-center text-start min-h-[400px]"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${service.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="relative text-xl text-secondary font-semibold z-10">{service.title}</h2>
      <p className="relative text-sm mt-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {service.text}
      </p>
    </motion.div>
  ))}
</div>




      </div>

      {/*section 5 */}
      <div>
        <h2>Discover More...</h2>
        
      </div>
    </Helment>
  );
};

export default Home;
