import React from 'react'

// Images
import Banner from '../Component/UI/Banner/Banner'
import groupBanner from "../assets/groupBanner.jpeg"
import Apl from "../assets/APL.png"

const APL = () => {
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
              Asiko Power Limited (APL)
                <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-mainColor"></span>
              </h2>
      
              <p className="text-gray text-start mt-9 font-poppins">Dedicated to providing clean, reliable, and sustainable power solutions, including developing gas-to-power, gas-to-cooling and gas-to-heating projects.</p>
              </div>
      
             <div className="md:max-w-[50%] w-full flex justify-center">
                <img src={Apl} alt="Career User" className="w-full max-w-full object-cover"/>
             </div>
             </div>
      
    </div>
  )
}

export default APL
