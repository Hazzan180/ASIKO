import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner';
import boardOfDirector from "../assets/BoardOfDirector.png";

// Board Members Data
const boardMembers = [
  { name: "Engr Alex Ogedegbe", title: "CHAIRMAN", bio: "45+ years of engineering and business management experience in the oil and gas industry. " },
  { name: "Mr Felix Ekundayo", title: "MANAGING DIRECTOR", bio: "30+ years of engineering and business management experience in the oil and gas industry." },
  { name: "Mr Abubakar Folami", title: "EXECUTIVE DIRECTOR", bio: "30+ years of financial management and commercial experience in the oil and gas industry." },
  { name: "Mr Kamar Bakrin", title: "Independent, Non-Executive Director", bio: "30+ years of business management experience in the FMCG, energy, and oil and gas industries." },
  { name: "Mr Mustapha Fasinro", title: "Non-Executive Director", bio: "25+ years of procurement management experience in the oil and gas industry." },
  { name: "Mr Martin Ekundayo", title: "Non-Executive Director", bio: "30+ years of legal practice in the oil and gas industry." },
];

// Bigger Directors (Last 2)
const executiveBoard = [
  { name: "Mr Babatunde Edun", title: "Non-Executive Director", bio: "20+ years of business and investment experience in the telecommunications, logistics, distributed power and oil and gas industries." },
  { name: "Ms Fadeke Ajao", title: "Hawkes Legal, Company Secretary Officer", bio: "Legal practitioner and chartered arbitrator with many years of corporate company secretarial experience." },
];

const BoardOfDirector = () => {
  return (
    <div>
      <Banner contest={"Board Of Director"} bannerImg={boardOfDirector} /> 

      <div className="px-6 md:px-16 lg:px-24 py-12">
        <p className="text-gray text-center font-poppins">
          Meet the visionary leaders who guide Asiko Energy Holdings. Our board of directors brings extensive expertise and industry knowledge to steer the company towards its mission. Get to know our board members and their contributions to the energy sector.
        </p>
      </div>  

      {/* Board Members Grid */}
      <div className="px-6 md:px-16 lg:px-24 py-12">
        {/* First 6 Directors - Normal Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-primary font-playfair italic mb-2">{member.name}</h2>
              <h3 className="text-sm text-mainColor uppercase mb-6 font-poppins">{member.title}</h3>
              <span className="block w-16 h-1 bg-mainColor mx-auto my-2"></span> {/* Centered */}
              <p className="text-gray mt-5 font-poppins">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Last 2 Directors - Bigger (50% width each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {executiveBoard.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-primary font-playfair italic mb-2">{member.name}</h2>
              <h3 className="text-sm text-mainColor uppercase mb-6 font-poppins">{member.title}</h3>
              <span className="block w-16 h-1 bg-mainColor mx-auto my-2"></span> {/* Centered */}
              <p className="text-gray mt-5 font-poppins">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
}

export default BoardOfDirector;
