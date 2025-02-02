import React from 'react'

// Images
import Banner from '../Component/UI/Banner/Banner'
import groupBanner from "../assets/groupBanner.jpeg"
import Gtdl from "../assets/GTDL.jpeg"

const GTD = () => {
  return (
    <div>
      <Banner contest={"Our Companies"} bannerImg={groupBanner}/>

      <div className="px-6 md:px-16 lg:px-24 py-12">
        <p className="text-gray-700 text-start font-poppins">
        Asiko Energy Holdings is committed to providing a diverse range of clean energy solutions, addressing the energy needs of various sectors in West Africa. By developing a comprehensive clean energy network, Asiko ensures increased access and energy security across the region. Our subsidiaries and divisions include:
        </p>
      </div>

      {/* Section 2 */}
             <div className="px-6 md:px-[10%] py-8 flex flex-col md:flex-row justify-between items-start gap-5 font-poppins">
             <div className="md:max-w-[50%] w-full">
              <h2 className="relative text-2xl font-semibold inline-block pb-2">
              Gas Terminalling and Distribution Limited (GTDL)
                <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-mainColor"></span>
              </h2>
      
              <p className="text-gray text-start mt-9 font-poppins">Gas Terminalling and Distribution in 2008 and today has distribution hubs in Lagos, Benin, Abuja and Kano. The division is committed to providing high-quality Propane, LPG and LNG to customers across Nigeria.</p>

              <button 
  className="bg-mainColor text-secondary  rounded-3xl font-medium mt-10 py-3 px-4" 
  onClick={() => window.open('https://www.gasterminalling.com/', '_blank')}
>
  Visit website
</button>

              </div>
      
             <div className="md:max-w-[50%] w-full flex justify-center">
                <img src={Gtdl} alt="Career User" className="w-full max-w-full object-cover"/>
             </div>
             </div>
      
    </div>
  )
}

export default GTD
