import NMcard2 from "../assets/NMcard2.png";

import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Banner from '../Component/UI/Banner/Banner';




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

const NewsMedia2 = () => {
  return (
    <div>
      <Banner
        contest={"Asiko MD Joins Panel Session at 2024 Gas Investment Forum"}
        bannerImg={NMcard2}
      />

      <section className="px-6 md:px-[10%] py-[8%] grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 font-poppins">
        {/* Left side (70%) */}
        <div className="space-y-6 text-lg">

          <img src={NMcard2} alt=""  className="w-[100%] h-[315]"/>

          <p className="text-gray">
          Our MD, Felix Ekundayo, attended this year’s Gas Investment Forum themed, ‘Powering Nigeria’s Gas Future: Energy Security, Industrialisation & Economic Growth’ at the Oriental Hotel in Lagos.
          </p>

          <p className="text-gray">
          Our MD, Felix Ekundayo, attended this year’s Gas Investment Forum themed, ‘Powering Nigeria’s Gas Future: Energy Security, Industrialisation & Economic Growth’ at the Oriental Hotel in Lagos.
          </p>

          <p className="text-gray">
          As a company committed to improving access to clean energy solutions, we remain focused on advancing the Nigerian energy sector through both our work and contributions to discussions on actualising a cleaner, safer tomorrow.
          </p>

          <p className="text-gray">
          Follow our energy journey, explore our website here.
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
  );
};

export default NewsMedia2;
