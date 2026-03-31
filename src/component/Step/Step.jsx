import React from 'react';
import Man from "../../assets/user.png"
import Package from "../../assets/package.png"
import Rocket from "../../assets/rocket.png"

const Step = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h1>
            <p className='text-sm text-gray-500 text-center'>Start using premium digital tools in minutes, not hours.</p>

            <div className='flex justify-center gap-4'>
                <div className='border rounded-2xl max-w-[380px] max-h-[380px] p-2'>
                    <div className='justify-end flex  '>
                        <p className='flex w-10 h-10 rounded-full  text-white bg-fuchsia-500 font-semibold justify-center items-center text-lg text-center'>01</p>
                    </div>
                    <img className='mx-auto bg-fuchsia-300 rounded-full p-2 mt-[30px]' src={ Man} alt="" />
                    <h3 className=' text-center text-3xl font-bold py-[16px]'>Create Account</h3>
                    <p className='text-center pb-[60px]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className='border rounded-2xl max-w-[380px] max-h-[380px] p-2 '>
                    <div className='justify-end flex  '>
                        <p className='flex w-10 h-10 rounded-full  text-white bg-fuchsia-500 font-semibold justify-center items-center text-lg text-center'>02</p>
                    </div>
                    <img className='mx-auto bg-fuchsia-300 rounded-full p-2 mt-[30px]' src={ Package} alt="" />
                    <h3 className=' text-center text-3xl font-bold py-[16px]'>Choose Products</h3>
                    <p className='text-center pb-[60px]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                <div className='border rounded-2xl max-w-[380px] max-h-[380px] p-2 '>
                    <div className='justify-end flex  '>
                        <p className='flex w-10 h-10 rounded-full  text-white bg-fuchsia-500 font-semibold justify-center items-center text-lg text-center'>03</p>
                    </div>
                    <img className='mx-auto bg-fuchsia-300 rounded-full p-2 mt-[30px]' src={ Rocket} alt="" />
                    <h3 className=' text-center text-3xl font-bold py-[16px]'>Start Creating</h3>
                    <p className='text-center pb-[60px]'>Download and start using your premium <br />tools immediately.</p>
                </div>
            </div>
        </div>
    );
}; 

export default Step;