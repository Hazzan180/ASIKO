import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import Helment from '../Component/Helment/Helment';

import News from '../Component/UI/News/News';
import Hero from '../Component/Hero/Hero';
import {useNavigate,} from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

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

import Ellipse from "../assets/Ellipse.svg"

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
   const navigae = useNavigate() 

   const investorRelations = () => {
    navigae('/investorRelations')
     window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  const sustainability = () => {
    navigae('/sustainability')
     window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: false, // Ensures animation runs every time it's in view
      mirror: true, // Allows animations to trigger when scrolling up
      delay: 100, // Adds a slight delay for smooth effect
    });
  }, []);
  return (
    <Helment title='Home'>
      <Hero />

      {/* Section 2 */}
      <div className="px-6 py-24 md:px-[10%] flex flex-col md:flex-row justify-center items-center text-center sm:text-start gap-5 font-poppins">
      <div className="md:max-w-[50%] w-full">
        {/* Heading Animation */}
        <h3 className="text-lg sm:text-xl mb-4 sm:mb-6" data-aos="fade-up">WHO WE ARE</h3>
        
        {/* Text Animation */}
        <h1 className="text-3xl sm:text-5xl font-medium" data-aos="fade-up" data-aos-delay="200">
          Building a network of
        </h1>
        <h1 className="text-3xl sm:text-5xl font-bold font-playfair italic text-mainColor" data-aos="fade-up" data-aos-delay="400">
          clean energy solutions.
        </h1>
        
        {/* Paragraph Animation */}
        <p className="text-gray text-base sm:text-lg mt-4 sm:mt-5">
          At Asiko Energy, we are passionate about transforming West Africa’s energy landscape and driving sustainable development by providing clean energy solutions. With years of expertise and a dedicated team of professionals, we are committed to helping meet today’s energy needs through various solutions, including Propane, LPG, LNG, and renewable energy sources.
        </p>
      </div>

      {/* Image Animation */}
      <div className="md:max-w-[50%] w-full flex justify-center relative" data-aos="fade-up" data-aos-delay="200">
        <img src={Ellipse} alt="" className="absolute top-0 left-0 z-0" />
        <img src={whoweare} alt="Career User" className="w-full max-w-full object-cover z-10" />
      </div>
    </div>

    
    {/* Section 3 */}
    <div className="relative px-6 md:px-[10%] py-8 font-poppins">
  {/* Background */}
  <img src={homebg1} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
    
    {/* Card 1 (Top Left) */}
    <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
      <img src={homeicon3} alt="" className="mb-4 w-20 h-20 object-contain" />
      <h3 className="text-lg font-bold">Operations in 4 out of 6 Geopolitical Zones</h3>
    </div>

    {/* Card 2 (Tall, Centered) */}
    <div className="md:row-span-2 bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Year-on-year increase in volumes sold from 2018 to 2022</h2>
      <div className="w-full space-y-4">
        {[{ year: '2018 - 2019', percent: 6 }, { year: '2019 - 2020', percent: 26 }, { year: '2020 - 2021', percent: 60 }, { year: '2021 - 2022', percent: 75 }].map((item, index) => (
          <div key={index} className="flex flex-col bg-gray-100 p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-base font-medium text-gray">YEAR {item.year}</h2>
              <h2 className="text-base font-bold text-gray">{item.percent}%</h2>
            </div>
            <span className="w-full h-2 bg-[#f0f0f0]  overflow-hidden">
              <span className="block h-full bg-[green]" style={{ width: `${item.percent}%` }}></span>
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Card 3 (Top Right) */}
    <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
      <img src={homeicon1} alt="" className="mb-4 w-20 h-20 object-contain" />
      <h1 className="text-3xl font-bold">100+</h1>
      <h3 className="text-lg text-gray">Employees</h3>
    </div>

    {/* Card 4 (Bottom Left) */}
    <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
      <img src={homeicon2} alt="" className="mb-4 w-20 h-20 object-contain" />
      <h1 className="text-3xl font-bold">16+</h1>
      <h3 className="text-lg">Years In Existence</h3>
    </div>

    {/* Card 5 (Bottom Right) */}
    <div className="bg-secondary p-6 shadow-lg flex flex-col items-center text-center rounded-lg">
      <img src={homeicon4} alt="" className="mb-4 w-20 h-20 object-contain" />
      <h1 className="text-3xl font-bold">70+</h1>
      <h3 className="text-lg">Road Tanker Trucks</h3>
    </div>

  </div>
    </div>

    {/*section 5 */}
    <News />

    {/* Section 4 */}
    <div className="relative px-6 md:px-[3%] py-12 font-poppins text-center">
   {/* Background Image */}
   <img src={svg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover -z-10 " />

   <div className="px-6 md:px-[5%] py-8 text-start flex items-center">
      <span className="w-16 h-[2px] bg-secondary mr-4 inline-block"></span>
      <h3 className="font-semibold text-[12px] text-secondary">WHAT WE DO</h3>
   </div>

   <p className="text-secondary max-w-2xl text-[35px] md:px-[5%] text-start" data-aos="fade-down" data-aos-delay="100">
     At Asiko Energy, we deliver comprehensive energy solutions to meet the diverse needs of our clients. Our portfolio includes clean energy solutions such as Propane, LPG, LNG, and renewable energy, supporting a sustainable future.
   </p>

   {/* Card Section */}
   <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 font-poppins">
      {services.map((service, index) => (
       <motion.div  
       key={index}
       className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer group flex flex-col justify-center text-start min-h-[400px]"
    >
       {/* Background Image with Hover Zoom Effect */}
       <div 
          className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110 z-0"
          style={{ 
             backgroundImage: `url(${service.img})`,
             backgroundSize: "cover",
             backgroundPosition: "center"
          }}
       ></div>
    
       {/* Black Overlay (Appears on Hover) */}
       <div 
          className="absolute inset-0 bg-[#000] opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"
       ></div>
    
       {/* Text Content (Remains on Top) */}
       <div className="relative p-6 z-20">
          <h2 className="text-xl text-secondary font-semibold">{service.title}</h2>
          <p className="text-sm mt-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             {service.text}
          </p>
       </div>
    </motion.div>
    
     
      ))}
   </div>
    </div>


      {/*section 6 */}
      <div className="px-6 md:px-[10%] py-20 text-center font-poppins cursor-pointer">
  <h2 className="text-3xl text-primary mb-8">Discover More...</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1 */}
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Text Section */}
      <div className="p-6 flex flex-col justify-center text-left w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold text-mainColor mb-2">Investor Relations</h3>
        <p className="text-base text-gray mb-4">
          Explore the ways we are rapidly growing in the energy space for the African market.
        </p>
        <button onClick={investorRelations} className="bg-secondary text-mainColor px-3 py-2 rounded-full font-medium border-2 hover:bg-mainColor hover:text-secondary transition">
          Explore
        </button>
      </div>

      {/* Image Section with Zoom Effect */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-tr-xl rounded-br-xl"
      data-aos="fade-up" data-aos-delay="100"
      >
      <img
       src={homeimgc1}
       alt="Investor Relations"
       className="w-full h-72 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
     </div>
    </div>

     {/* Card 2 */}
     <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Text Section */}
      <div className="p-6 flex flex-col justify-center text-left w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold text-mainColor mb-2">Sustainability</h3>
        <p className="text-base text-gray mb-4">
        Discover how we stay in touch with our host community through engagement with stakeholders.
        </p>
        <button onClick={investorRelations} className="bg-secondary text-mainColor px-3 py-2 rounded-full font-medium border-2 hover:bg-mainColor hover:text-secondary transition">
          Explore
        </button>
      </div>

      {/* Image Section with Zoom Effect */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-tr-xl rounded-br-xl"
      data-aos="fade-up" data-aos-delay="100"
      >
      <img
       src={homeimgc2}
       alt="Investor Relations"
       className="w-full h-72 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
     </div>
     </div>
     </div>
      </div>

    </Helment>
  );
};

export default Home;
