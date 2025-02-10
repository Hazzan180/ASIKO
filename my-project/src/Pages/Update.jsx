import Banner from "../Component/UI/Banner/Banner";
import updateB from "../assets/updateB.png";
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

const Update = () => {
    return (
        <div>
          <Banner
            contest={"Lite Gas Supports Nigerian Team for Walking Football World Cup"}
            bannerImg={updateB}
          />
    
          <section className="px-6 md:px-[10%] py-[8%] grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 font-poppins">
            {/* Left side (70%) */}
            <div className="space-y-6 text-lg">
    
              <img src={updateB} alt=""  className="w-[100%] h-[315]"/>
    
              <p className="text-gray">
              Asiko Energy is honoured to be one of the six companies selected to receive a funding from the Midstream and Downstream Gas Infrastructure Fund (MDGIF), a vital initiative aimed at boosting gas distribution across the country. The 122 Billion Naira fund is part of the Federal Government’s commitment to advance our ongoing terminal project, which will significantly enhance gas availability and utilisation in the country.
              </p>
    
              <p className="text-gray">
              This funding comes at a crucial time for the Nigerian gas industry. As Ekperikpe Ekpo, the honourable Minister of State for Petroleum Resources (Gas) highlighted, the Midstream and Downstream Gas Infrastructure Fund will help position Nigeria as a nation driven by cleaner energy, aligning with the government’s broader goal of transitioning from crude oil to natural gas. The fund is in line with the Petroleum Industry Act (PIA) 2021, which facilitated the establishment of the Midstream and Downstream Gas Infrastructure Fund (MDGIF).
              </p>
    
              <p className="text-gray">
              According to the Minister, “Today, the federal government through MDGIF is committing N122 billion into the hands of the six investors to help in the dissemination of gas to all sectors of the country. This is not going to be the last. We are going through another round of screening for more investors to get into the line, to drive home the aspiration and the intention. The intention of President Bola Tinubu is to make sure that Nigeria is being driven by gas in a cleaner way.”
              </p>

              <p>The contract signing event took place on the 30th of September, in Abuja.</p>
    
              <p className="text-gray">
              By moving forward with our <a href=""
               target="_blank" 
               rel="noopener noreferrer"
               className="text-mainColor hover:text-primary transition"> terminal project </a> , we are taking concrete steps toward increasing Liquefied Petroleum Gas (LPG) availability and improving its distribution. This aligns with the government’s Decade of Gas Initiative and the long-term vision for energy security and economic prosperity. We are excited to be part of this journey, and we are committed to making sure that this investment benefits both the industry and the wider Nigerian economy.
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

export default Update;
