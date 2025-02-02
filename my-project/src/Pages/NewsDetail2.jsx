import Banner from "../Component/UI/Banner/Banner";
import newBanner1 from "../assets/newBanner1.jpeg";
import news1 from "../assets/news1.jpeg";
import news3 from "../assets/news3.jpeg";
import news4 from "../assets/news4.jpeg";
import news5 from "../assets/news5.jpeg";
import news6 from "../assets/news6.jpeg";

const NewsDetail2 = () => {
  return (
    <div>
      <Banner contest={"Asiko Energy Meeting With Ijora Community Leaders"} bannerImg={newBanner1} />

      <section className="px-6 md:px-[10%] py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={news1} alt="News 1" className="w-full h-60 object-cover rounded-lg" />
          <img src={newBanner1} alt="News 2" className="w-full h-60 object-cover rounded-lg" />
          <img src={news3} alt="News 3" className="w-full h-60 object-cover rounded-lg" />
          <img src={news4} alt="News 4" className="w-full h-60 object-cover rounded-lg" />
          <img src={news5} alt="News 5" className="w-full h-60 object-cover rounded-lg" />
          <img src={news6} alt="News 6" className="w-full h-60 object-cover rounded-lg" />

          {/* Last image takes the full width */}
          <img src={news4} alt="Featured News" className="w-full h-80 object-cover rounded-lg md:col-span-3" />
        </div>
      </section>
    </div>
  );
};

export default NewsDetail2;
