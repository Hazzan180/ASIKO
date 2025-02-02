import React from 'react';
// Images
import Banner from '../Component/UI/Banner/Banner';
import csrBanner from '../assets/CSR.jpeg';
import img1 from '../assets/csrImg1.png'
import img2 from '../assets/csrImg2.jpeg'
const Csr = () => {
  return (
    <div>
      <Banner contest={"CSR"} bannerImg={csrBanner} />

      <div className="px-6 md:px-[10%] py-[10%] text-start font-poppins">
        <h2 className="text-xl text-primary font-semibold mb-4">
          At Asiko, our commitment to Corporate Social Responsibility is unwavering. We're constantly striving to make positive impacts within host communities by encouraging local engagement, empowerment, and sustainable development.
        </h2>
        <p className="text-lg text-gray">
          Through our collaborations with industry associations, environmental, and social advocacy groups, we’re setting industry standards, driving thought leadership, and aiding the transition towards sustainable clean energy in West Africa.
        </p>

        {/* Cards Layout with 60/40 Split */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
          {/* First Card - 60% Width */}
          <div className="col-span-3 h-[450px] rounded overflow-hidden shadow-lg group flex flex-col">
            <div className="overflow-hidden flex-1">
              <img 
                className="w-full h-full object-cover transform transition duration-300 ease-in-out group-hover:scale-110" 
                src={img1} 
                alt="CodeTheFuture Program" 
              />
            </div>
            <div className="px-6 py-4 flex flex-col justify-between h-[200px]">
              <div className="font-bold text-primary text-xl mb-2">#CodeTheFuture empowerment programme</div>
              <p className="text-gray text-base">
                As the world progresses in science and technology, so do we in our support of STEM programmes. We believe in empowering young minds to develop skills that help boost their ability in problem-solving, creativity, and critical thinking.
              </p>
            </div>
          </div>

          {/* Second Card - 40% Width */}
          <div className="col-span-2 h-[450px] rounded overflow-hidden shadow-lg group flex flex-col">
            <div className="overflow-hidden flex-1">
              <img 
                className="w-full h-full object-cover transform transition duration-300 ease-in-out group-hover:scale-110" 
                src={img2} 
                alt="CodeTheFuture Program" 
              />
            </div>
            <div className="px-6 py-4 flex flex-col justify-between h-[200px]">
              <div className="font-bold text-primary text-xl mb-2">Community employment programme</div>
              <p className="text-gray text-base">
              In collaboration with stakeholders in our host community, we identify, train and integrate qualified community residents into the workforce in different capacities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Csr;
