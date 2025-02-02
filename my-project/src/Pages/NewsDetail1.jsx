import Banner from "../Component/UI/Banner/Banner";
import newBanner2 from "../assets/newsBanner2.png";
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

const NewsDetail1 = () => {
  return (
    <div>
      <Banner
        contest={"Lite Gas Supports Nigerian Team for Walking Football World Cup"}
        bannerImg={newBanner2}
      />

      <section className="px-6 md:px-[10%] py-8 grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 font-poppins">
        {/* Left side (70%) */}
        <div className="space-y-6">
        <p>
  <Link to="/gasTerminalling" className="text-mainColor underline">
    Gas Terminalling
  </Link>, through its brand Lite Gas, is supporting the Nigeria Walking Football team as they gear up for the sport’s World Cup, in Manchester England come August.
</p>

          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/WHYpBGVVyts?si=o_TIjYFi7KViYu6R"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>

          <p className="text-gray">
            The Walking Football, as the name indicates, follows the rules of conventional football except running. This type of football is slow-paced and aimed at increasing the physical activity of people above 50 for health purposes. The game allows former players or lovers of football to experience the joy of football without being limited by their health conditions.
          </p>

          <p className="text-gray">
            The Walking football 1-day tournament, which held in Lagos last weekend in Surulere, was to prepare and raise a formidable team for the upcoming World Cup. The game saw the emergence of the Mangers All Stars football club as winners of the 4-team match.
          </p>

          <p className="text-gray">
            As a company passionate about improving the health of Nigerians through the adoption of clean energy, we were happy to sponsor an initiative that contributes to the overall health, quality of life and wellbeing of people, through Lite Gas.
          </p>

          <p className="font-semibold text-gra">
  Read more about the Nigeria Walking Football{" "}
  <a 
    href="https://guardian.ng/sport/nigerias-walking-football-team-begins-rwandan-tour-today/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-mainColor underline"
  >
    here
  </a>
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

export default NewsDetail1;
