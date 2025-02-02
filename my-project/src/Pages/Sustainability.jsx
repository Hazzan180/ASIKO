import React from 'react'

//images
import Banner from '../Component/UI/Banner/Banner'
import Bannerimg from '../assets/sustainability.jpeg'
import sustainabilityUser from '../assets/sustainabilityUser.jpeg'
import community from '../assets/Communitie.png'
import regulator from '../assets/Regulator.jpeg'

const Sustainability = () => {
  return (
    <div>
      <Banner contest={"Stakeholder Engagement"} bannerImg={Bannerimg}/>

      {/* Section 1 */}
      <div className="py-[10%] px-[10%] flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-primary text-2xl font-semibold ">
            Employees
          </h2>

          <p className="text-lg text-gray">
            Asiko provides a nurturing work environment that promotes professional growth and personal development, with a collective aim to propel a cleaner, more sustainable future for West Africa.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img src={sustainabilityUser} alt="Sustainability user" className="w-full h-[400px] object-cover rounded-lg"/>
        </div>
      </div>

       {/* Section 2 */}
      <div className="py-[10%] px-[10%] flex flex-col lg:flex-row items-center justify-between bg-[#f0f0f0]">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-primary text-2xl font-semibold ">
          Communities
          </h2>

          <p className="text-lg text-gray">
          We’re deeply invested in acting as responsible and active members within host communities, with a focus on local engagement, empowerment, and sustainable development initiatives.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img src={community} alt="Sustainability user" className="w-full h-[400px] object-cover rounded-lg"/>
        </div>
      </div>


      {/* Section 3 */}
      <div className="py-[10%] px-[10%] flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-primary text-2xl font-semibold ">
          Regulators
          </h2>

          <p className="text-lg text-gray">
          We’re actively engaged with government bodies and regulators to ensure compliance, endorse policy initiatives, and accelerate West Africa’s transition towards a sustainable, clean energy future.
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img src={regulator} alt="Sustainability user" className="w-full h-[400px] object-cover rounded-lg"/>
        </div>
      </div>
    </div>
  )
}

export default Sustainability
