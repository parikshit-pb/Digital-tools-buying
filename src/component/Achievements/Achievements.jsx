import React from 'react';

const Achievements = () => {
    return (
        <div className='flex w-full  text-center items-center px-'>
            <div className='bg-blue-500 flex-1 py-16'>
                <h1 className='text-6xl font-bold text-white'>50k+</h1>
                <p className='text-sm text-white pt-3'>Active Users</p>
            </div>
            <div className='bg-blue-500 flex-1 py-16'>
                <h1 className='text-6xl font-bold text-white'>200+</h1>
                <p className='text-sm text-white pt-3'>Premium Tools</p>
            </div>
            <div className='bg-blue-500 flex-1 py-16'>
                <h1 className='text-6xl font-bold text-white'>4.9</h1>
                <p className='text-sm text-white pt-3'>Rating</p>
            </div>
        </div>
    );
};

export default Achievements;