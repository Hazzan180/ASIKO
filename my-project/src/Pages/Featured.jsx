import Banner from "../Component/UI/Banner/Banner";
import featureB from "../assets/featureB.png";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import { Link } from "react-router-dom";



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

const Featured = () => {
  return (
    <div>
      <Banner
        contest={"Lite Gas Supports Nigerian Team for Walking Football World Cup"}
        bannerImg={featureB}
      />

      <section className="px-6 md:px-[10%] py-[8%] grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 font-poppins">
        {/* Left side (70%) */}
        <div className="space-y-6 text-lg">

          <img src={featureB} alt=""  className="w-[100%] h-[315]"/>

          <p className="text-gray">
          We attended this year’s NLPGA conference and exhibition, marked by the Association’s unveiling of its new rebrand to    <a href="https://www.nigerialpgas.com/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-mainColor hover:text-primary transition"
          >Nigeria Liquefied and Compressed Gases Association (NLCGA). </a>  
          This rebranding spotlights an exciting expansion of the Association’s scope to include LNG (Liquefied Natural Gas), Hydrogen, Biogas, and CNG (Compressed Natural Gas), which reflect the evolving landscape of the energy sector.
          </p>

          <p className="text-gray">
          The official unveiling of the rebranded logo and name of the association occurred during the 14th NLCGA Conference and Exhibition on November 6th, 2024, where industry leaders and stakeholders gathered to discuss the future of gas and its crucial role in economic recovery.
          </p>

          <p className="text-gray">
          Our MD, <a href="https://www.linkedin.com/in/felix-ekundayo-b0932980/"
              target="_blank" 
             rel="noopener noreferrer"
             className="text-mainColor hover:text-primary transition">Felix Ekundayo</a> , who also serves as the President of the Association, gave prominent guests and attendees a tour of the exhibition booths and introduced them to some exhibited gas-powered solutions
             such as <a href="https://www.linkedin.com/company/asiko-power-limited/"
             target="_blank" 
             rel="noopener noreferrer"
             className="text-mainColor hover:text-primary transition"> Asiko Power Limited </a> gas gas-fired cold room, gas-powered water heaters and gas-powered generators.
          </p>

          <p className="text-gray">
          Our subsidiary, Gas Terminalling, was also present at the event with our top-quality, propane-rated gas cylinders.
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

export default Featured;
