import React from 'react';
// Images
import Banner from '../Component/UI/Banner/Banner';
import contactUs from '../assets/contactUs.png';

const Contact = () => {
  return (
    <div>
      <Banner contest={"Contact Us"} bannerImg={contactUs} />
      
      <div className="px-6 md:px-16 lg:px-24 py-12 font-poppins"> 
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center font-poppins">
            <h2 className="text-3xl font-bold text-mainColor mb-4">Get in touch with us today!</h2>
            <p className="text-gray mb-8">
              We'd really love to hear from you. Please reach out to our team via any of the channels highlighted on this page.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-mainColor">Annexe Office</h3>
              <p className="text-gray-600">10 Ijora Causeway, Ijora Lagos.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-mainColor">Contact Details</h3>
              <p className="text-gray-600">info@asikoenergy.com</p>
              <p className="text-gray-600">+234 (2) 293 2292</p>
              <p className="text-gray-600">+234 908 782 6680</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6 font-poppins">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">First Name</label>
                <input type="text" placeholder="First Name" 
                  className="w-full p-3 border rounded-md text-gray-700 placeholder-gray-400 outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Last Name</label>
                <input type="text" placeholder="Last Name" 
                  className="w-full p-3 border rounded-md text-gray-700 placeholder-gray-400 outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="text" placeholder="Email" 
                className="w-full p-3 border rounded-md text-gray-700 placeholder-gray-400 outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
              <input type="text" placeholder="Phone Number" 
                className="w-full p-3 border rounded-md text-gray-700 placeholder-gray-400 outline-none" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Type of Inquiry</label>
              <select className="w-full p-3 border rounded-md text-gray-700 placeholder-gray-400 outline-none">
                <option>Gas-Propane, LPG, LNG, NG, CNG</option>
                <option>Renewable, Solution</option>
                <option>Power</option>
                <option>Media</option>
                <option>Partnership</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea className="w-full p-3 border rounded-md text-gray-700 placeholder-gray-400 outline-none" 
                rows="5" placeholder="Type in your message here"></textarea>
            </div>

            <button className="w-full bg-mainColor text-white py-3 rounded-md text-secondary uppercase">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
