import React from 'react'
import Banner from "../Component/UI/Banner/Banner";
import gthBanner from "../assets/gthBanner.jpeg";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import gth1 from "../assets/gth1.jpeg"
import gth2 from "../assets/gth2.jpeg"
import gth3 from "../assets/gth3.jpeg"
import gth4 from "../assets/gth4.jpeg"

const data = [
  {
      title: "In the Arena: 19 Years of Excellence in the Energy Industry",
      date: "January 20, 2025"
  },
  {
      title: "Asiko MD Joins Panel Session at 2024 Gas Investment Forum",
      date: "November 15, 2024"
  },
  {
      title: "Asiko Attends Nigeria Liquefied and Compressed Gases Association Conference",
      date: "November 13 2024"
  },
]

const GasTerminalling = () => {
  return (
    <div>
       <Banner
        contest={"Gas Terminalling Holds 2022 Customers Forum in Lagos"}
        bannerImg={gthBanner}
      />

<section className="px-6 md:px-[10%] py-8 grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 font-poppins">
        {/* Left side (70%) */}
        <div className="space-y-6">
          <p className='text-gray'>Asiko Energy, we believe in the power of building and maintaining strong relationships, whether it is with our community, employees, or customers. Our subsidiary, Gas Terminalling, exemplified this during their 2022 Customers Forum on the 29th of October, where they brought together customers from far and wide to learn what they need and how best to serve them.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <img src={gth1} alt="" className="w-full h-auto rounded-lg" />
  <img src={gth2} alt="" className="w-full h-auto rounded-lg" />
  <img src={gth3} alt="" className="w-full h-auto rounded-lg" />
  <img src={gth4} alt="" className="w-full h-auto rounded-lg sm:col-span-2 md:col-span-3" />
</div>

          <p className="text-gray">
          Through this people-centered event, we connected with customers from across the country to share some of our exciting news, projects, and opportunities for the future. It remains a priority for our Group and subsidiaries to grow and nurture relationships built on mutual respect and value with our stakeholders. 
          </p>
        </div>

        {/* Right side (30%) */}
        <div className="space-y-8">
          {/* Share Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Share This</h2>
            <div className="bg-mainColor p-5  text-secondary flex items-center justify-between gap-4 text-white rounded-lg">
              <FaFacebook className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaXTwitter className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaEnvelope className="text-2xl cursor-pointer hover:text-gray-300" />
              <FaWhatsapp className="text-2xl cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* Recent News Section */}
          <div>
            <h2 className="text-xl font-semibold pb-4 border-b">Recent News & Insights</h2>

            {/* News Cards */}
            <div className="space-y-4 mt-4 mb-24">
              {data.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mainColor">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GasTerminalling
