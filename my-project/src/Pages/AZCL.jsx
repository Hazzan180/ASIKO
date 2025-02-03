import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import ACzl from "../assets/ACZL.png"
import CarbonZero1 from "../assets/ACZL/CarbonZero1.jpg";
import CarbonZero2 from "../assets/ACZL/CarbonZero2.jpg";
import CarbonZero3 from "../assets/ACZL/CarbonZero3.jpg";
import CarbonZero4 from "../assets/ACZL/CarbonZero4.jpg";
import CarbonZero5 from "../assets/ACZL/CarbonZero5.jpg";
import CarbonZero6 from "../assets/ACZL/CarbonZero6.jpg";
import CarbonZero7 from "../assets/ACZL/CarbonZero7.jpg";

import Carbon1 from "../assets/ACZL/Carbon1.jpg"
import Carbon2 from "../assets/ACZL/Carbon2.jpg"
import Carbon3 from "../assets/ACZL/Carbon3.jpg"
import Carbon4 from "../assets/ACZL/Carbon4.jpg"
import Carbon7 from "../assets/ACZL/Carbon7.jpg"
import Carbon8 from "../assets/ACZL/Carbon8.jpg"

import Logo from '../assets/logo.png'

const images = [
  CarbonZero1, CarbonZero2, CarbonZero3, CarbonZero4,
  CarbonZero5, CarbonZero6, CarbonZero7, Carbon1, Carbon2,
  Carbon3, Carbon4, Carbon7, Carbon8
];

const AZCL = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function for smooth scrolling
  const scrollToSection = (id) => {
    setIsOpen(false); // Close mobile menu on click
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjust for fixed navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="scroll-smooth font-poppins">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-secondary shadow-md z-50 py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[150px] h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-grow justify-center gap-8 text-lg font-semibold">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-500 transition">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("services")} className="hover:text-blue-500 transition">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 transition">
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-secondary shadow-md flex flex-col items-center justify-center space-y-6 text-lg font-semibold text-gray-900 md:hidden">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl">
              ✖
            </button>
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-500 transition">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-blue-500 transition">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 transition">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 px-6 md:px-16 lg:px-24 mt-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">Welcome To Asiko Carbon Zero Limited</h1>
            <p className="text-gray-700 mt-4 max-w-xl leading-relaxed">
              Asiko Energy Holdings provides diverse clean energy solutions, addressing the energy needs of various sectors in West Africa.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={ACzl} 
              alt="Asiko Carbon Zero" 
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="pt-24 px-6 md:px-16 lg:px-24 py-12">
  <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {images.map((image, index) => (
      <div key={index} className="rounded-lg shadow-md overflow-hidden">
        <img
          src={image}
          alt={`Service ${index + 1}`}
          className="w-full  object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 px-6 md:px-16 lg:px-24 py-12">
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

    </div>
  );
};

export default AZCL;
