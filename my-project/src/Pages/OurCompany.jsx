import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner';
import companyBanner from '../assets/companyBanner.jpeg';
import cUser from "../assets/cUser.png";
import yellow from "../assets/yellow.jpeg"

import abouticon1 from "../assets/abouticon1.svg"
import abouticon2 from "../assets/abouticon2.svg"
import abouticon3 from "../assets/abouticon3.svg"

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

  const history = [
    {
      year: "2006",
      title: "The beginning",
      text: "Company founded as LINETRALE GAS in early 2006, a Special Purpose Vehicle (SPV), by founding companies: Asiko Gas, Linetrale Oil and Bronwen Energy. The company’s raison d'etre was to establish itself as the leading independent LPG supply, logistics and distribution company in Nigeria"
    },
    {
      year: "2007",
      title: "The original plan",
      text: "In early 2007 the company commenced the multimillion-dollar front-end engineering design (FEED) for a 30,000MT receiving terminal to be sited in the Apapa Port of Lagos. The development attains Department of Petroleum Approval and World Bank environmental and social impact clearance."
    },
    {
      year: "2007",
      title: "Introduction to the market",
      text: "27th of December 2007 the company commences trading LPG during a period of tight supply to the whole country. Our introduction into the market relieved a bottleneck in supply, which had to that point driven LPG prices sky high. As a consequence, national LPG had declined to 60,000MT. Within months of commencement of operations, the company, along with 5 other pioneer offtakers, had managed to reduce retail LPG prices nationally by 50%."
    },
    {
      year: "2008",
      title: "Realising plan",
      text: "Our company acquires land in Ijora for the Lagos depot to develop into its central distribution hub for South West. In October 2008, we acquired the Kano gas depot from a Kano family marking the commencement of our distribution business. We started our first retail/commercial operations selling to end users, distributors and a major national insecticide manufacturing company. We conclude investment discussions with Africa Capital Alliance, Nigeria’s largest Private Equity company, resulting in the injection of US$3.2 million in equity in the company by the CAPE II fund"
    },
    {
      year: "2008",
      title: "Realising plan",
      text: "Our company acquires land in Ijora for the Lagos depot to develop into its central distribution hub for South West. In October 2008, we acquired the Kano gas depot from a Kano family marking the commencement of our distribution business. We started our first retail/commercial operations selling to end users, distributors and a major national insecticide manufacturing company. We conclude investment discussions with Africa Capital Alliance, Nigeria’s largest Private Equity company, resulting in the injection of US$3.2 million in equity in the company by the CAPE II fund"
    },
    {
      year: "2008",
      title: "Introduction to the market",
      text: "By the end of 2008, the deepening global financial crisis derails the final investment decision (FID) for the planned 30,000MT coastal terminal bringing about a period of contraction for the company. Fortunately, though, the company had managed to place a large order for equipment just before the onset. This equipment was to sustain the company through some of the challenging years that followed."
    },
    {
      year: "2009",
      title: "Perseverance in a challenging period",
      text: "The company leases the Abuja gas depot from a local family, in keeping with our tradition of working with local communities and expertise. Amid some very challenging times the company re-strategizes to focus on its distribution depots and proceeds to upgrade the Kano and Abuja facilities with equipment procured f the abandoned terminal."
    },
    {
      year: "2011",
      title: "Getting back on track",
      text: "The Company secures additional funding through ACA from the CAPE II fund bringing ACA’s total investment to US$7.5 million."
    },
    {
      year: "2012",
      title: "Getting back on track",
      text: "A rudimentary gas operation is established at the Ijora site to service Guinness as its sole customer. Our Lite Gas® Brand is established and our first corporate branded cylinders (size 6.25kg) are fabricated and delivered."
    },
    {
      year: "2012",
      title: "Getting back on track",
      text: "The Company changes its name from Linetrale Gas Limited to Gas Terminalling Global Operations Limited."
    },
    {
      year: "2014",
      title: "Restructure",
      text: "Further to the approach of one of the World's largest physical commodity traders, the Company undergoes financial and management restructuring thereby commencing a new growth chapter. A controlling interest is acquired by Asiko Energy Holdings Limited (AEHL) under a group structure with the injection of new equity and via a rights issue."
    },
    {
      year: "2015",
      title: "Implementing the vision",
      text: "Gas Terminalling becomes the General Distributor for Bosch for their instantaneous water heaters. The company also secures a partnership relationship with Bosch for marketing their industrial boilers (hot water and steam)."
    },
    {
      year: "2015",
      title: "Implementing the vision",
      text: "The company purchases a brand-new fleet of LPG tankers with a 40% improved capacity than competing fleets. This introduces better economies of scale in transportation."
    },
    {
      year: "2015",
      title: "Implementing the vision",
      text: "The rollout of our Mini Gas Outlets takes LPG sales through our Lite Gas® brand to the last mile with the end user"
    },
    {
      year: "2019",
      title: "Implementing the vision",
      text: "The company secures a new round of investment from Africa Capital Alliance from the CAPE II fund."
    },
    {
      year: "2021",
      title: "Dawn of a Brighter Day",
      text: "The company gets awarded a DomLNG contract by Nigeria LNG Limited (NLNG) to facilitate domestic gas penetration."
    },
    {
      year: "2021",
      title: "Dawn of a Brighter Day",
      text: "Ground-breaking of fully-mounded Propane, LNG Terminal in Ijora."
    },
    {
      year: "May 2022",
      title: "New beginnings",
      text: "The company receives its 1st private corporate bond issued by infracredit for expansion"
    },
    {
      year: "July 2022",
      title: "New beginnings",
      text: "Financial close on Propane, LPG terminal received"
    },
  ]

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

      {/* Section 4*/}
<div className="px-6 md:px-[10%] py-16 bg-gray-100">
  <h2 className="text-3xl font-semibold text-primary text-center mb-10">
    Our Vision, Mission & Values
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Vision */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-300">
      <img src={abouticon1} alt="Vision Icon" className="mx-auto w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-mainColor mb-3">Our Vision</h3>
      <p className="text-gray-600 text-lg">
        Unlock West Africa's clean energy potential by creating a future where sustainable, accessible, and innovative energy solutions power the region's progress and prosperity.
      </p>
    </div>

    {/* Mission */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-300">
      <img src={abouticon2} alt="Mission Icon" className="mx-auto w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-mainColor mb-3">Our Mission</h3>
      <p className="text-gray-600 text-lg">
      Enabling a comprehensive network of clean energy solutions across West Africa.
      </p>
    </div>

    {/* Values */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-300">
      <img src={abouticon3} alt="Values Icon" className="mx-auto w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-mainColor mb-3">Our Values</h3>
      <p className="text-gray-600 text-lg">
      OPTI – Ownership, Professionalism, Teamwork and Integrity
      </p>
    </div>
  </div>
</div>

     {/* section 5 */}
  <div className="w-full h-[100vh]">
  <iframe 
    className="w-full h-full" 
    src="https://www.youtube.com/embed/2b8lBvL51p4?si=jwpRRIio7vrsP5Pe" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  />
</div>
       
 {/* Section 6 */}
 <div className='px-6 md:px-16 lg:px-24 py-12'>
        <h3 className="text-xl text-gray mb-3">OUR HISTORY</h3>
        <h2 className="text-3xl text-primary mb-10">
          Established in 2006, our company has grown to become a leader in the energy sector, with a strong focus on LPG, LNG, and renewable energy sources.
        </h2>

        {/* History Data Cards - Marquee Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-8">
            {history.map((item, index) => (
              <div key={index} className="history-card bg-white shadow-lg rounded-lg p-6 w-72 flex-shrink-0">
                <h3 className="text-xl font-semibold text-primary mb-4">{item.year} - {item.title}</h3>
                <p className="text-gray-600 text-base leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Marquee Effect */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Ensure text doesn't overflow and cards can expand */
        .history-card {
          max-height: none; /* No fixed max-height */
          overflow: visible; /* Allow content to flow */
        }
      `}</style>
    </div>
  );
};

export default OurCompany;
