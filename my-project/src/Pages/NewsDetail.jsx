import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import investorBanner from "../assets/investorBanner.jpeg"; // Default banner
import Banner from "../Component/UI/Banner/Banner";

const newsData = [
  {
    id: 1,
    title: "Lite Gas Supports Nigerian Team for Walking Football World Cup",
    date: "February 24, 2023",
    content: "Lite Gas has partnered with the Nigerian team to provide support for the Walking Football World Cup. This initiative aligns with our commitment to community engagement and sports development.",
    image: "/images/news1.jpg",
    layout: "layout1", // custom layout type
  },
  {
    id: 2,
    title: "Asiko Energy Meeting With Ijora Community Leaders",
    date: "November 3, 2022",
    content: "Asiko Energy recently met with community leaders in Ijora to discuss energy sustainability and partnerships to drive economic growth.",
    image: "/images/news2.jpg",
    layout: "layout2", // custom layout type
  },
  {
    id: 3,
    title: "Asiko Expands Gas Distribution Network",
    date: "July 15, 2023",
    content: "Asiko Energy has expanded its gas distribution network to improve access to clean energy in rural communities.",
    image: "/images/news3.jpg",
    layout: "layout3", // custom layout type
  },
];

const NewsDetail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const foundNews = newsData.find((item) => item.id === parseInt(id));
    setNewsItem(foundNews);
  }, [id]);

  if (!newsItem) {
    return (
      <div className="text-center py-12 text-gray-700">
        <h2 className="text-2xl font-semibold">News not found</h2>
      </div>
    );
  }

  // Define layout variations based on `layout` type
  const renderLayout = () => {
    if (newsItem.layout === "layout1") {
      return (
        <div>
          {/* Layout 1: Image on the left */}
          <div className="flex">
            <img src={newsItem.image} alt={newsItem.title} className="w-1/3" />
            <div className="ml-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">{newsItem.title}</h2>
              <p className="text-gray-600 mb-4">{newsItem.date}</p>
              <p className="text-gray-700">{newsItem.content}</p>
            </div>
          </div>
        </div>
      );
    }
    if (newsItem.layout === "layout2") {
      return (
        <div>
          {/* Layout 2: Full-width image and text below */}
          <div>
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-80 object-cover mb-6" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{newsItem.title}</h2>
            <p className="text-gray-600 mb-4">{newsItem.date}</p>
            <p className="text-gray-700">{newsItem.content}</p>
          </div>
        </div>
      );
    }
    if (newsItem.layout === "layout3") {
      return (
        <div>
          {/* Layout 3: Centered content */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{newsItem.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{newsItem.date}</p>
            <p className="text-lg text-gray-700">{newsItem.content}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <Banner contest={newsItem.title} bannerImg={newsItem.image || investorBanner} />
      <div className="px-6 md:px-16 lg:px-24 py-12">
        {renderLayout()} {/* Dynamically rendered layout */}
      </div>
    </div>
  );
};

export default NewsDetail;
