import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner';
import boardOfDirector from "../assets/BoardOfDirector.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import m6 from "../assets/m6.png";
import m7 from "../assets/m7.png";

// Data for management team members
const teamMembers = [
  {
    name: "Mr Felix Ekundayo",
    position: "MANAGING DIRECTOR",
    experience: "30 years",
    image: m1,
    degree: "B. Engineering (Hons) in Chemical Engineering (University College, London – 1990)",
    mba: "MBA (Gen) (Exeter University – 1998)",
  },
  {
    name: "Mr Abubakar Folami",
    position: "CHIEF COMMERCIAL OFFICER/CHIEF FINANCIAL OFFICER",
    experience: "30 years",
    image: m2,
    degree: "BSc degree in Accounting, Finance and Economics (University of Essex, UK, in 1987); ",
    mba: "A member of the Association of Certified Chartered Accountants (ACCA) as well as an associate member of the Institute of Chartered Accountants of Nigeria (ICAN).",
  },
  {
    name: "Oluwatayo Odetunde",
    position: "GM, Corporate Governance and Compliance",
    experience: "30 years",
    image: m3,
    degree: "B.Sc Degree in Accounting(Lagos State University); MBA (Pan Atlantic University) Associate Member of the Institute of Chartered Accountants of Nigeria (ICAN).",
  },
  {
    name: "Busayo Fabunmi",
    position: "GM, OPERATIONS",
    experience: "15 years",
    image: m4,
    degree: "Masters’ degree in Mechanical Engineering, Project Management Professional (PMP), Black Belt holder (Six-sigma), a registered Engineer (COREN), and a member of the American Society of Mechanical Engineers (ASME).",
  },
  {
    name: "Esther Nwokoro",
    position: "GM, Corporate services",
    experience: "15 years",
    image: m5,
    degree: "B.Sc in Accounting, Masters in Development Finance, an associate member of the Institute of Chartered Accountants in Nigeria (ICAN) and a Senior Professional in Human Resources Intl (SPHRi).",
    mba: "Expertise in application software, project management, human resources, administration and corporate services.",
  },
  {
    name: "Uwaezuoke Igbokwe",
    position: "manager, hseQ",
    experience: "15 years",
    image: m6,
    degree: "B.Eng. in Soil & Water Engineering; member, Nigeria Institute of Safety Professional; Institute of Safety and Risk Mgt. –UK; Certified Auditor for ISO 14001 & Management Systems. and NEBOSH Distinction in IGC & Technical Operations Safety",
  },
  {
    name: "Adeola Okoro",
    position: "head, internal AUDIT & compliance",
    experience: "15 years",
    image: m7,
    degree: "HND graduate of Accounting from Federal Polytechnic Offa, Kwara State; Bachelor’s in Business & Enterprise degree from Edinburgh Napier University, Scotland.",
  },
];

const ManagementTeam = () => {
  return (
    <div>
      <Banner contest={"Management Team"} bannerImg={boardOfDirector} />

      <div className="px-6 md:px-16 lg:px-24 py-12">
        <p className="text-gray text-center font-poppins">
          Our dedicated management team plays a vital role in driving the company’s strategy, operations, and growth. Meet our team of experienced professionals who lead with a commitment to innovation, excellence, and sustainability. Learn more about their roles and responsibilities in shaping the future of Asiko Energy Holdings.
        </p>
      </div>

      {/* Management Team Grid */}
      <div className="px-6 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-28">
          
          {/* Mapping over the teamMembers data */}
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center relative pt-16">
              
              {/* Image positioned at the center top edge */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 object-cover clip-triangle rounded-lg border-4 border-secondary shadow-md" 
                />
              </div>

              <h2 className="text-xl font-bold text-primary font-playfair italic mb-3 mt-14">{member.name}</h2>
              <h3 className="text-sm text-mainColor uppercase mb-6 font-poppins">{member.position}</h3>
              <h4 className="text-mainColor text-sm mb-6">Experience – {member.experience}</h4>
              <span className="block w-16 h-1 bg-mainColor my-2"></span>
              <p className="text-gray mt-5 font-poppins text-sm">{member.degree}</p>
              <p className="text-gray mt-5 font-poppins text-sm">{member.mba}</p>
            
            </div>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
