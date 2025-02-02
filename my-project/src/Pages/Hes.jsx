import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner';
import HesBanner from '../assets/HesBanner.jpeg';
import Hicon1 from "../assets/Hicon1.png";
import Hicon2 from "../assets/Hicon2.png";
import Hicon3 from "../assets/Hicon3.png";
import Hicon4 from "../assets/Hicon4.png";

const Hes = () => {
  return (
    <div>
      <Banner contest={"Health, Safety and Environment"} bannerImg={HesBanner} />

      {/* Introduction Section */}
      <div className="px-6 md:px-[10%] py-[10%] text-start font-poppins">
        <h2 className="text-xl text-primary font-semibold mb-4">
          Health and safety are a priority for us at Asiko Energy.
        </h2>
        <p className="text-lg text-gray">
          We have a robust HSEQ policy that guides our operations for compliance with QMS ISO 0991:2015, EMS ISO 1400:2015, and OHSAS ISO 45001:2018 requirements. 
          We also work closely with the Nigerian Environmental Impact Assessment Agency and Lagos State Ministry of Environment and Water Resources to ensure our activities align with their standards.
        </p>
      </div>

      {/* HSE Principles Section */}
      <div className="px-6 md:px-[10%] py-[5%] font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-start hover:shadow-xl transition duration-300 flex flex-col">
            <img src={Hicon1} alt="Regulatory Compliance" className="w-16 h-16 mb-4"/>
            <h2 className="text-mainColor font-semibold text-lg">Regulatory and standards compliance</h2>
            <p className="text-gray mt-2">
              Ensure that we are in full compliance with all local and international laws, codes of practice, standards, and regulations that apply to our operations in any location.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-start hover:shadow-xl transition duration-300 flex flex-col">
            <img src={Hicon2} alt="Quality Products" className="w-16 h-16 mb-4"/>
            <h2 className="text-mainColor font-semibold  text-lg">Quality products, always</h2>
            <p className="text-gray mt-2">
              Continually ensure the delivery of quality products and services in a manner that guarantees our customers’ satisfaction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-start hover:shadow-xl transition duration-300 flex flex-col">
            <img src={Hicon3} alt="Manage Risks" className="w-16 h-16 mb-4"/>
            <h2 className="text-mainColor font-semibold text-lg">Manage risks</h2>
            <p className="text-gray mt-2">
              Purposely carry out an adequate assessment of business operational activities to identify risks and opportunities and inaugurate adequate mitigation measures.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-start hover:shadow-xl transition duration-300 flex flex-col">
            <img src={Hicon4} alt="Increase Awareness" className="w-16 h-16 mb-4"/>
            <h2 className="text-mainColor font-semibold text-lg">Increase awareness</h2>
            <p className="text-gray mt-2">
              Stimulate openness and discussion on HSE&Q issues with both internal and external stakeholders, effectively communicating risk, performance, and progress.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hes;
