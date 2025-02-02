import React from 'react';

// Images
import Banner from '../Component/UI/Banner/Banner'
import CareerBanner from '../assets/CareerBanner.jpeg'
import CareerUser from "../assets/CareerUser.jpeg"
import svg from "../assets/careerSvg.svg"
import Ohandshake from "../assets/Ohandshake.svg"
import Osearch from "../assets/Osearch.svg"
import Oedit from "../assets/Oedit.svg"
import Oteam from "../assets/Oteam.svg"
import Otest from "../assets/test.svg"



// Data for the "How we hire" section
const hireSteps = [
  {
    icon: Osearch,
    title: "Browse New Roles",
    description: "Search for the role you are interested in and begin your journey.",
  },
  {
    icon: Oedit,
    title: "Apply",
    description: "When you find the role that aligns with your skills, apply. Click the job application link and follow the steps.",
  },
  {
    icon: Oteam,
    title: "Interview",
    description: "Your interviews could be virtual, in-person, or both. However, you can count on our process to be fair and transparent every step of the way.",
  },
  {
    icon: Otest,
    title: "Written Test",
    description: "Taking a proficiency test may be required of you. This enables us to identify areas for improvement and support where necessary.",
  },
  {
    icon: Ohandshake,
    title: "Accept Offer",
    description: "Review your offer and let us know what you think",
  }
];

const Careers = () => {

  return (
    <div>
       <Banner contest={"Careers"} bannerImg={CareerBanner}/>

       {/* section 1*/}
       <div className='px-6 md:px-[10%] py-8 text-center font-poppins'>
        <h2 className='text-xl text-mainColor font-semibold uppercase mb-4'>LIFE AT ASIKO</h2>
        <h1 className='text-2xl sm:text-3xl text-primary mb-10'>At Asiko Energy Holdings, people are our biggest strength and most competitive advantage. We are always looking for talented and driven people to join us.</h1>
        
        <div className='flex justify-center mb-6'>
        <iframe  className='w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg' src="https://www.youtube.com/embed/-U11jDNLMLI?si=E7n_E39AUVu6Qh3G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <p className='text-lg text-gray mt-20'>Join our team and be part of a leading clean energy company on a mission to unlock West Africa’s clean energy potential by creating a future where sustainable, accessible, and innovative energy solutions power the region’s progress and prosperity.</p>
       </div>

      {/* Section 2 */}
       <div className="px-6 md:px-[10%] py-8 flex flex-col md:flex-row justify-between items-start gap-5 font-poppins">
       <div className="md:max-w-[50%] w-full">
        <h2 className="relative text-2xl font-semibold inline-block pb-2">
          Why Work with Us?
          <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-mainColor"></span>
        </h2>

        <ul className="list-disc list-inside marker:text-gray space-y-3 mt-4">
          <li className='text-gray'>Be part of a company at the forefront of clean energy solutions in West Africa</li>
          <li className='text-gray'>Contribute to a sustainable future for the region</li>
          <li className='text-gray'>Experience a diverse and inclusive work environment</li>
          <li className='text-gray'>Develop your skills and grow professionally through continuous learning opportunities</li>
          <li className='text-gray'>Enjoy competitive compensation and benefits packages</li>
        </ul>
        </div>

       <div className="md:max-w-[50%] w-full flex justify-center">
          <img src={CareerUser} alt="Career User" className="w-full max-w-full object-cover"/>
       </div>
       </div>

      {/* Section 3 */}
      <div
  className="how-we-hire-section bg-cover bg-center bg-no-repeat py-16 font-poppins"
  style={{ backgroundImage: `url(${svg})`, backgroundSize: "cover" }}
>
  <h2 className="text-3xl font-semibold text-secondary text-center mb-8">How we hire</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    {hireSteps.map((step, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-start text-center p-6 bg-black bg-opacity-50 rounded-lg relative"
      >
        <img src={step.icon} alt={step.title} className="w-12 h-12 mb-4 flex-shrink-0" />
        <h3 className="text-xl text-secondary mb-2">{step.title}</h3>
        <p className="text-secondary">{step.description}</p>
        {index < hireSteps.length - 1 && (
          <div className="absolute right-0 top-0 h-full border-l border-secondary border-opacity-50 hidden lg:block"></div>
        )}
      </div>
    ))}
  </div>
      </div>

      {/*section 4*/}
      <div className="text-start bg-[#f7e7ea]  py-12 px-[10%]  mb-[10%] font-poppins">
        <h2 className="text-3xl font-semibold text-primary mb-4">Job Openings</h2>
        <p className="text-lg text-gray">There are currently no job openings.</p>
      </div>
    </div>
  )
}

export default Careers
