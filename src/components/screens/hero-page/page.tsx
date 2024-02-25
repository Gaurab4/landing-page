import Navbar from '@/components/navbar/page';
import React from 'react';

type Props = {};

const Heropage = (props: Props) => {
    const bgImage = '/hero/hero-background.png';

    return (
        <>
            <div className="hero h-[585px] flex flex-col lg:flex-row justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${bgImage})`}}>
                {/* Content Container */}
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center order-2 lg:order-1">
                    {/* First Half Data */}
                    <div className="w-[80%] lg:w-[70%] xl:w-[60%] h-[80%] flex flex-col lg:justify-start lg:text-left justify-center items-center">
                        {/* Rounded Text  */}
                        <div className='h-[40px] w-56 lg:w-[164px] rounded-full bg-[#F5FFF7] flex justify-center items-center mb-4 lg:mb-0 lg:ml-0 lg:mr-auto'>
                            <p className='font-[500] text-[#2b7938] text-xs'>₹17L Scholarship Assured*</p>
                        </div>
                        {/* Title Text */}
                        <div className="text-center lg:text-left mb-4">
                            <p className='text-white font-[700] text-[32px] lg:text-[52px] '>Masters in </p>
                            <p className='text-white font-[700] text-[32px] lg:text-[52px]'>Computer Science</p>
                        </div>

                        {/* List  */}
                        <div className='mt-8 text-center lg:text-left lg:items-left lg:flex lg:self-baseline'>
                            <ul className='gap-y-2 grid'>
                                <li className='text-white ml-2 font-[500] text-[16px] lg:text-[20px] flex items-center lg:items-left'>
                                    ✅ No IELTS or GRE* required 
                                </li>
                                <li className='text-white ml-2 font-[500] text-[16px] lg:text-[20px] flex items-center lg:items-left'>
                                    ✅  3 year work Visa 
                                </li>
                                <li className='text-white ml-2 font-[500] text-[16px] lg:text-[20px] flex items-center lg:items-left'>
                                    ✅ High admit chance with Leap
                                </li>
                            </ul>
                        </div>

                        {/* Eligible Button */}
                        <div className='mt-12 w-full'>
                            {/* Make the button full width on small devices */}
                            <button className='bg-[#443eff] text-[white] text-xs lg:text-base font-[600] h-[40px] lg:h-[48px] w-full lg:w-[224px] rounded-lg'>
                                Check Your Admit Eligibility
                            </button>
                        </div>
    
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full order-1 lg:order-2">
                    {/* Right side remains empty */}
                    <div className='w-[80%] h-[60%] items-center flex justify-end'>
                        <div className='w-80 h-16 rounded-lg bg-[white]'>
                            <p className='pl-10 pt-2 font-[700]'>CASE WESTERN RESERVE</p>
                            <p className='pt-2 pl-10 text-[12px] leading-[0.5px]'>UNIVERSITY</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heropage;
