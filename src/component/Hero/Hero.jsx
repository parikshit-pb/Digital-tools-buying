import React from 'react';
import HeroPng from "../../assets/banner.png"
import { BsCaretRight } from "react-icons/bs";

const Hero = () => {
    return (
      <div className="hero bg-base-200 min-h-[60vs] gap-5]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={HeroPng} alt="" />
    <div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold">Supercharge Your <br /> Digital Workflow
</h1>
      <p className="py-6 text-gray-500">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br /> Explore Products
      </p>
     <div className='flex gap-3'>
       <button className="btn  text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">Explore Products</button>
      <button className="btn  border-blue-500 text-blue-500 rounded-full"> <p> <BsCaretRight size={18}/></p> Watch Demo</button>
     </div>
    </div>
  </div>
</div>
    );
};

export default Hero;