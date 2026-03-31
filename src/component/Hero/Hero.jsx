import React from 'react';
import HeroPng from "../../assets/banner.png"
import { BsCaretRight } from "react-icons/bs";

const Hero = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={HeroPng} alt="" />
    <div>
      <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow
</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br /> Explore Products
      </p>
      <button className="btn btn-primary">Explore Products</button>
      <button className="btn border-b-fuchsia-500 text-fuchsia-500"> <p> <BsCaretRight /></p> Watch Demo</button>
    </div>
  </div>
</div>
    );
};

export default Hero;