import React from 'react';

const Achievements = () => {
    return (
        <div className='max-w-[1600px] py-10 flex w-full  text-center items-center bg-gradient-to-r from-blue-600 to-purple-600'>
            <div className=' flex-1 py-16'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white'>50k+</h1>
                <p className='text-sm text-white pt-3'>Active Users</p>
            </div>
            <div className=' flex-1 py-16'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white'>200+</h1>
                <p className='text-sm text-white pt-3'>Premium Tools</p>
            </div>
            <div className=' flex-1 py-16'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white'>4.9</h1>
                <p className='text-sm text-white pt-3'>Rating</p>
            </div>
        </div>
    );
};

export default Achievements;