import NMcard1 from "../assets/NMcard1.png";

import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Banner from '../Component/UI/Banner/Banner';

import Newsmedia1 from "../assets/Newsmedia1.png"


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

const NewsMedia1 = () => {
  return (
    <div>
      <Banner
        contest={"In the Arena: 19 Years of Excellence in the Energy Industry"}
        bannerImg={NMcard1}
      />

      <section className="px-6 md:px-[10%] py-[8%] grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 font-poppins">
        {/* Left side (70%) */}
        <div className="space-y-6 text-lg">

          <img src={NMcard1} alt=""  className="w-[100%] h-[315]"/>

          <p className="text-gray">
          In the Arena
          </p>

          <p className="text-gray">
          As we begin the year and reflect on our journey so far, we are reminded of this apt quote famously shared by the 26th president of the United States, Theodore Roosevelt, titled, “The man in the arena”, which celebrates dreaming boldly, committing to a worthy cause, and finding fulfilment in the journey, whether it leads to triumph or defeat.
          </p>

          <p className="text-gray">
          For 19 years, we have been the “man in the arena” in the energy sector. From starting as a downstream gas company to now being well on our way to a midstream gas company with added investments in power and renewables, we have stayed the course in daring greatly in our worthy cause of building a network of clean energy solutions. The journey has not always been smooth; just like with a sailor treading great and troubled waters, we have faced and still face our fair share of challenges and have come out more skilled at every turn.
          </p>

          <p className="text-gray">
          Since our inception, we have operated with a clear purpose: to make clean energy available and accessible for utilisation and to elevate standards in the energy industry. From supplying gas to end users, retailers, and wholesalers to building cutting-edge infrastructure, we have never shied away from rolling up our sleeves and taking bold steps to move the industry forward. Our commitment to quality, safety, and innovation has been our hallmark, and our dedication to this worthy cause has brought us closer to the triumph of high achievement.
          </p>

          <p className="text-gray">
          Today, we are proud to be building a state-of-the-art propane terminal in Ijora Lagos, a clear evidence of our relentless pursuit of excellence. Designed with cutting-edge technology, this terminal will significantly enhance propane storage, distribution, and availability, helping to meet the growing energy demands of Nigeria and beyond.
          </p>

          <img src={Newsmedia1} alt=""  className="w-[100%] h-[315]"/>
          <p className="text-gray">
          As we approach our 20th year, we remain steadfast in our mission to be the benchmark for excellence in the LPG industry. In the words of Theodore Roosevelt, “the credit belongs to the man who is actually in the arena.” At Asiko Energy, we are proud to stand in that arena every day, striving, innovating, and leading with passion and purpose.
          </p>

          <p className="text-gray">
          Here’s the full quote by Theodore Roosevelt
          </p>

          <p className="text-gray">
          “It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”
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

export default NewsMedia1;
