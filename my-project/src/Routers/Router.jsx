import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import OurCompany from "../Pages/OurCompany";
import ManagementTeam from "../Pages/ManagementTeam";
import BoardOfDirector from "../Pages/BoardOfDirector";
import Careers from "../Pages/Careers";
import Contact from "../Pages/Contact";
import Sustainability from "../Pages/Sustainability";
import Csr from "../Pages/Csr";
import Hes from "../Pages/Hes";
import InvestorRelations from "../Pages/InvestorRelations";
import NewsDetail1 from "../Pages/NewsDetail1";
import NewsDetail2 from "../Pages/NewsDetail2";
import GasTerminalling from "../Pages/GasTerminalling";
import GTD from "../Pages/GTD";
import APL from "../Pages/APL";
import GTSCL from "../Pages/GTSCL";
import GTGOP from "../Pages/GTGOP";
import AZCL from "../Pages/AZCL";
import AHCL from "../Pages/AHCL";
import NewsMedia from "../Pages/NewsMedia";
import FootballPage from "../Pages/FootballPage";
import Townhall from "../Pages/Townhall";
import Featured from "../Pages/Featured";
import Update from "../Pages/Update";
import NewsMedia1 from "../Pages/NewsMedia1";
import NewsMedia2 from "../Pages/NewsMedia2";
import NewsMedia3 from "../Pages/NewsMedia3";
import NewsDetail3 from "../Pages/NewsDetail3";
import AsikoInP from "../Pages/AsikoInP";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ourCompany" element={<OurCompany />} />
      <Route path="managementTeam" element={<ManagementTeam />} />
      <Route path="boardOfDirector" element={<BoardOfDirector />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="sustainability" element={<Sustainability />} />
      <Route path="csr" element={<Csr />} />
      <Route path="hes" element={<Hes />} />
      <Route path="investorRelations" element={<InvestorRelations />} />
      <Route path="gasTerminalling" element={<GasTerminalling /> } />
      <Route path="gtd" element={<GTD /> } />
      <Route path="apl" element={<APL /> } />
      <Route path="gtscl" element={<GTSCL /> } />
      <Route path="gtgop" element={<GTGOP /> } />
      <Route path="azcl" element={<AZCL /> } />
      <Route path="ahcl" element={<AHCL /> } />
      <Route path="newsMedia" element={<NewsMedia /> } />
      <Route path="asikoInp" element={<AsikoInP /> } />
      
      {/* Separate Pages for News Articles */}
      <Route path="news/1" element={<NewsDetail1 />} />
      <Route path="news/2" element={<NewsDetail2 />} />
      <Route path="news/3" element={<NewsDetail3 />} />
      <Route path="news/13" element={<FootballPage />} />
      <Route path="news/12" element={<Townhall />} />
      <Route path="news/11" element={<Featured />} />
      <Route path="news/14" element={<Update />} />
      <Route path="news/15" element={<NewsMedia1 />} />
      <Route path="news/16" element={<NewsMedia2 />} />
      <Route path="news/17" element={<NewsMedia3 />} />
    </Routes>
  );
};

export default Router;
