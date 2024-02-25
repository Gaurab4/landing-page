import React from 'react';

type Props = {};

const InbetweenSection = (props: Props) => {
  return (
    <div className='w-full lg:w-[40%] lg:p-8 flex flex-row pl-5 pr-5 md:pl-10 md:pr-10 justify-between items-center h-auto border  lg:mt-[-50px] z-10 bg-white p-3 rounded-lg mb-10 shadow-lg'>
      {/* First Column */}
      <div className='flex flex-col items-center'>
        <p className='font-bold text-xl lg:text-[36px]'>#1</p>
        <p className='font-semibold text-gray-500 text-sm lg:text-base'>Best Engineering Jobs</p>
      </div>

      {/* Second Column */}
      <div className='flex flex-col items-center'>
        <p className='font-bold text-xl lg:text-[36px]'>94%</p>
        <p className='font-semibold text-gray-500 text-sm lg:text-base'>Placement Rate</p>
      </div>

      {/* Third Column */}
      <div className='flex flex-col items-center'>
        <p className='font-bold text-xl lg:text-[36px]'>$96K</p>
        <p className='font-semibold text-gray-500 text-sm lg:text-base'>Average Salary</p>
      </div>
    </div>
  );
};

export default InbetweenSection;
