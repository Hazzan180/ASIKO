import NMcard2 from "../assets/nl2.png";

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

const NewsMedia3 = () => {
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
          Creating a cleaner, more sustainable future for developing countries like Nigeria demands swift action, massive financing and global collaboration. An estimated US $1 trillion is needed annually, an investment necessary to reduce reliance on polluting cooking fuels and improve access to electricity – a topic well dissected at this year’s Gastech Exhibition & Conference.
          </p>

          <p className="text-gray">
          Engr Felix Ekundayo, Managing Director of Asiko Energy and President of the Nigeria Liquefied and Compressed Gases Association (NLCGA) attended the 2024 Gastech Exhibition and Conference in Houston, USA, where he joined a Roundtable discussion on “financing energy transitions and ensuring energy inclusion in emerging economies” with former US Secretary of State John F. Kerry alongside other leaders from around the world, including Dr Philip Mshelbila, Managing Director and Chief Executive Officer of NLNG and Ainojie Alexander Irune (PhD), Executive Director of Oando Plc and Chief Operating Officer of Oando Energy Resources.
          </p>

          <h3 className="text-gray text-2xl font-semibold">Key themes</h3>

          <p className="text-gray">
          During the discussions, Felix said decarbonisation cannot be approached with a one-size-fits-all solution. “Consider that 48 African nations contribute just 0.55% of global emissions, while 20 OECD countries are responsible for 80%,” he said, paraphrasing John Kerry. “The burden of reducing emissions shouldn’t come at the expense of Africa’s development, particularly when we aim to utilise our gas resources for progress.”
          </p>

          <p className="text-gray">
          He opined that expecting African nations to bear the brunt of mitigation efforts—when OECD countries are responsible for the vast majority of emissions—creates an unjust dynamic, ultimately limiting access to capital and growth potential across the continent.
          </p>

          <p className="text-gray">
          The Gas Tech Roundtable session, moderated by Gavin Thompson, Vice Chair Energy – Europe, Middle East and Africa at Wood Mackenzie, highlighted how governments can enhance national policies, regulations, and governance to create environments that attract greater investment in clean energy. It explored the role of international partners in facilitating knowledge and technology transfers to drive research and development, ultimately making clean energy more affordable and accessible. Key themes included policy reform, investment signals, and global collaboration for advancing clean energy innovation.
          </p>

          
          <p className="text-gray">
          Ultimately, Asiko remains committed to advancing the Nigerian energy sector and contributing to conversations that foster growth, positive change and clean energy availability, accessibility, adoption and utilisation.
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

export default NewsMedia3;
