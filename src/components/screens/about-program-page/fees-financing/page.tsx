import React from 'react';

type Props = {};

const FeesFinancing = (props: Props) => {
  return (
    <div className='flex flex-col  lg:flex-reverse lg:flex-row mt-16'>
        {/* Left Section  */}
        <div className='w-full lg:w-1/2 h-full mb-8 lg:mb-0'>
            <p className='font-semibold text-lg text-[#1B1D6A] mb-5'>With Leap Advantage, you save almost ₹17 lakhs on tuition fees.</p>
            <p className='font-normal text-[#1B1D6A]'>
                Leap has partnered with multiple loan providers to help 
                you get loans for both Indian (1st sem)
                and US parts (2nd, 3rd, 4th sem) of your education.
            </p>
            <div className='mt-6'>
                <ul className='grid gap-y-5'>
                    <li className='text-[#1B1D6A] text-sm'>🔘 Collateral-free loans available</li>
                    <li className='text-[#1B1D6A] text-sm'>🔘 100% online process</li>
                    <li className='text-[#1B1D6A] text-sm'>🔘 Flexible repayment</li>
                </ul>
            </div>
        </div>

        {/* Right Section */}
        <div className='w-full   lg:w-1/2  h-full '>
            <div className='lg:w-[60%]  h-56 mb-8 lg:mb-0'>
                <div className='flex rounded-lg  shadow-lg bg-[#140B4B]'>
                    {/* Left Side */}
                    <div className='p-5 text-white'>
                        <p className='font-semibold'>With</p>
                        <p className='font-semibold'>Leap Advantage</p>
                        <p className='font-light text-xs' >(1st Sem in India +</p>
                        <p className='font-light text-xs'>last 3 sem in USA)</p>

                        <p className='mt-12 text-xs'>Tuition Fees</p>
                        <p className='font-semibold text-lg text-[#7ADCA1]'>₹37 lakhs</p>
                    </div>
                    {/* Divider  */}
                    <div className="w-px bg-gray-400"></div>
                    {/* Right Side */}
                    <div className='p-5 text-white'>
                        <p className='font-semibold'>Studying at</p>
                        <p className='font-semibold'>CWRU normally</p>
                        <p className='font-light text-xs' >(4 Semesters on</p>
                        <p className='font-light text-xs'>campus)</p>

                        <p className='mt-12 text-xs'>Tuition Fees</p>
                        <p className='font-semibold text-lg text-[#7ADCA1]'>₹54 lakhs</p>
                    </div>
                </div>
                {/* Right Side Text Section */}
                <div className='flex justify-center'>
                    <p className='italic text-xs mt-2'>
                        Tuition fee is subject to change
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FeesFinancing;
