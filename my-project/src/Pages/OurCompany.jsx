import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner';
import companyBanner from '../assets/companyBanner.jpeg';
import cUser from "../assets/cUser.png";
import yellow from "../assets/yellow.jpeg"

import { useNavigate } from 'react-router-dom';

const OurCompany = () => {
  const data = [
    {
      title: "Gas Terminalling Global Operations Limited (GTGOL)",
      link: "/gtgop" // Add appropriate link
    },
    {
      title: "Gas Terminalling and Distribution Limited (GTDL)",
      link: "/gtd"
    },
    {
      title: "Asiko Power Limited (APL)",
      link: "/apl"
    },
    {
      title: "Gas Terminalling Storage Limited (GTSL)",
      link: "/gtscl" // Add appropriate link
    },
    {
      title: "Asiko Hydrocarbon Company Limited (AHCL)",
      link: "/ahcl" // Add appropriate link
    },
    {
      title: "Asiko Carbon Zero Limited (ACZL)",
      link: "/azcl" // Add appropriate link
    },
  ];

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (    
    <div>
      <Banner contest={"About Us"} bannerImg={companyBanner} />

      {/* Section 1 - Hero Section */}

      {/* Section 2 */}
     <div className='px-6 md:px-16 lg:px-24 py-12'>
     <h1 className='text-2xl sm:text-3xl text-primary mb-20 text-center'>Asiko Energy Holdings Limited (AEHL) is the holding company for a group of clean energy and renewable solutions companies</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.link)}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-mainColor hover:shadow-2xl transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl text-center font-semibold text-primary mb-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
     </div>

     {/* Section 3  */}
      <div className="px-6 md:px-[10%] py-8 flex flex-col md:flex-row justify-between items-start gap-5 font-poppins">
            <div className="md:max-w-[50%] w-full">
             <h2 className=" text-2xl  pb-2">
             Welcome to Asiko Energy Holdings, a leading provider of clean energy solutions in West Africa.
             </h2>
             <p className='text-lg text-gray mt-5'>At Asiko Energy Holdings, we are dedicated to enabling a comprehensive network of clean energy solutions across West Africa. Our vision is to unlock the region’s clean energy potential by creating a future where sustainable, accessible, and innovative energy solutions power progress and prosperity.</p>
             </div>
     
            <div className="md:max-w-[50%] w-full flex justify-center">
               <img src={yellow} alt="Career User" className="w-full max-w-full object-cover"/>
            </div>
      </div>

      {/*section 4 */}
     
    </div>
  );
};

export default OurCompany;
