import React from 'react';

const Workflow = () => {
    return (
       <div className=" max-w-[1600px] hero bg-gradient-to-r from-blue-600 to-purple-600 pt-15 pb-10">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-lg sm:text-2xl font-bold text-center text-white">Ready to Transform Your Workflow?</h1>
      <p className="py-5 text-sm text-white ">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>
      <div className='flex gap-3 justify-center'>
        <button className="btn bg-white text-purple-500 rounded-full">Explore Products</button>
      <button className="btn text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">View Pricing</button>
      </div>
      <p className="py-6 text-sm text-white opacity-60">
       14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  </div>
</div>
    );
};

export default Workflow;