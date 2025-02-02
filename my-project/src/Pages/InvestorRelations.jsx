import React from "react";
import { Link } from "react-router-dom";

import Banner from "../Component/UI/Banner/Banner";
import investorBanner from "../assets/investorBanner.jpeg";

const InvestorRelations = () => {
  const data = [
    {
      title: "Growth",
      text: "YoY increase in volumes sold 2018 to 2022: 6%, 26%, 60%, 75%",
    },
    {
      title: "Approach",
      text: "Our primary advantage lies in our innovative approach to business operations regarding our scalability, product, and presence in market demand centers. At Asiko Energy, we ensure our approach to energy solutions reflects today's stakeholder needs while taking into consideration new business strategies for tomorrow's market.",
    },
    {
      title: "Leadership",
      text: "Our management team has 200+ combined years of experience in the oil and gas industry. This wealth of knowledge and expertise gives us the leverage to steer our business toward continued success.",
    },
    {
      title: "Financial Strength",
      text: "A Corporate Rating of Bb accorded by Augusto and Co with a positive outlook demonstrates the Group's financial strength, attained via a relentless focus on profitable expansion and long-term commercial viability.",
    },
    {
      title: "Partnership",
      text: "Our strategic affiliations and collaborative ventures strengthen our performance and drive meaningful impact. We have a proven track record of fostering valuable partnerships with diverse organisations, including public sector enterprises. These alliances directly contribute to our mission of establishing a comprehensive network of clean energy solutions across West Africa, while also bolstering our bottom line.",
    },
  ];

  const news = [
    { id: 1, title: "Lite Gas Supports Nigerian Team for Walking Football World Cup", date: "February 24, 2023" },
    { id: 2, title: "Asiko Energy Meeting With Ijora Community Leaders", date: "November 3, 2022" }
  ];

  return (
    <div>
      <Banner contest={"Investor Relations"} bannerImg={investorBanner} />

      <div className="px-6 md:px-16 lg:px-24 py-12">
        <p className="text-gray-700 text-start font-poppins">
          As a leading clean energy company in West Africa, we are building the
          region’s premier network of clean energy solutions, unlocking the
          clean energy potential by creating a future where sustainable,
          accessible, and innovative energy solutions power the region’s
          progress and prosperity.
        </p>
      </div>

      <section className="px-6 md:px-16 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-mainColor hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>

      {/* section 3*/}
      <div className="bg-[#f0f0f0] py-12">
  <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Press Releases</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item, index) => (
        <div
          key={index}
          className="bg-secondary shadow-lg rounded-2xl p-6 border-l-4 border-mainColor hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-3">{item.date}</p> {/* Display date */}
          <p className="text-gray-600">{item.text}</p>
          <Link
      to={`/news/${item.id}`}
      className="text-mainColor font-semibold hover:underline mt-4 inline-block"
    >
      Read more
    </Link>
        </div>
      ))}
    </div>
  </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 py-12">
        <p className="text-gray-700 text-start font-poppins">
        Join us in our mission to enable a comprehensive network of clean energy solutions across West Africa, and be a part of the clean energy revolution that’s powering the region’s progress and prosperity. For more information about investment opportunities with Asiko Energy Holdings, send an email to info@asikoenergy.com
        </p>
      </div>

    </div>
  );
};

export default InvestorRelations;
