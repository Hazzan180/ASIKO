import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import groupBanner from "../assets/groupBanner.jpeg";
import CarbonZero1 from "../assets/ACZL/CarbonZero1.jpg";
import CarbonZero2 from "../assets/ACZL/CarbonZero2.jpg";
import CarbonZero3 from "../assets/ACZL/CarbonZero3.jpg";
import CarbonZero4 from "../assets/ACZL/CarbonZero4.jpg";
import CarbonZero5 from "../assets/ACZL/CarbonZero5.jpg";
import CarbonZero6 from "../assets/ACZL/CarbonZero6.jpg";
import CarbonZero7 from "../assets/ACZL/CarbonZero7.jpg";
import CarbonZero8 from "../assets/ACZL/CarbonZero8.jpg";

import Logo from '../assets/logo.png'

const images = [
  CarbonZero1, CarbonZero2, CarbonZero3, CarbonZero4,
  CarbonZero5, CarbonZero6, CarbonZero7, CarbonZero8
];

const AZCL = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full bg-secondary shadow-md z-50 py-4 px-8 flex items-center justify-between">
  {/* Logo on the left */}
  <Link to="/">
    <img src={Logo} alt="logo" className="w-[150px] h-auto" />
  </Link>

  {/* Navigation links in the center */}
  <ul className="flex-grow flex justify-center gap-8 text-lg font-semibold text-gray-900">
    <li>
      <a href="#home" className="hover:text-blue-500 transition">Home</a>
    </li>
    <li>
      <a href="#contact" className="hover:text-blue-500 transition">Contact Us</a>
    </li>
    <li>
      <a href="#services" className="hover:text-blue-500 transition">Services</a>
    </li>
  </ul>
</nav>


      {/* Home Section */}
      <section id="home" className="pt-24 min-h-screen flex flex-col items-center justify-center text-center">
        <img src={groupBanner} alt="Group Banner" className="w-full h-[300px] object-cover" />
        <h1 className="text-3xl font-bold mt-6">Asiko Carbon Zero Limited</h1>
        <p className="text-gray-700 mt-4 px-6 max-w-2xl">
          Asiko Energy Holdings provides diverse clean energy solutions, addressing the energy needs of various sectors in West Africa.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 px-6 md:px-16 lg:px-24 py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        <form className="bg-white shadow-lg rounded-lg p-8 mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">First Name</label>
              <input type="text" placeholder="First Name" className="w-full p-3 border rounded-md outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Last Name</label>
              <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-md outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
            <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Type of Inquiry</label>
            <select className="w-full p-3 border rounded-md outline-none">
              <option>Gas-Propane, LPG, LNG, NG, CNG</option>
              <option>Renewable, Solution</option>
              <option>Power</option>
              <option>Media</option>
              <option>Partnership</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea className="w-full p-3 border rounded-md outline-none" rows="5" placeholder="Type your message here"></textarea>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md uppercase font-bold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-24 px-6 md:px-16 lg:px-24 py-12">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AZCL;
