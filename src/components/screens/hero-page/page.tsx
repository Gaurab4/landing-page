import Navbar from '@/components/navbar/page'
import React from 'react'

type Props = {}

const Heropage = (props: Props) => {
    const bgImage = '/hero/hero-background.png';

    return (
        <>
            <div className="hero h-[585px] flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${bgImage})`}}>
                {/* Fist Half  */}
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                    {/* First Half Data */}
                    <div className="w-[80%] lg:w-[70%] xl:w-[60%] h-[80%] ">
                        {/* Rounded Text  */}
                        <div className='h-[40px] w-56 lg:w-[64px] rounded-full bg-[#F5FFF7] flex justify-center items-center'>
                            <p className='font-[500] text-[#2b7938] '>₹17L Scholarship Assued*</p>
                        </div>
                        {/* Title Text */}
                        <div  >
                            <p className='text-white font-[700] text-[32px] lg:text-[52px]'>Masters in </p>
                            <p className='text-white font-[700] text-[32px] lg:text-[52px]'>Computer Science</p>
                        </div>

                        {/* List  */}
                        <div className='mt-8 '>
                            <ul className=' gap-y-2 grid'>
                                <li className='text-white ml-2 font-[500] text-[16px] lg:text-[20px] flex items-center'>
                                    ✅ No IELTS or GRE* required 
                                </li>
                                <li className='text-white ml-2 font-[500] text-[16px] lg:text-[20px] flex items-center'>
                                    ✅  3 year work Visa 
                                </li>
                                <li className='text-white ml-2 font-[500] text-[16px] lg:text-[20px] flex items-center'>
                                    ✅ High admit chance with Leap
                                </li>
                            </ul>
                        </div>

                        {/* Eligible Button */}
                        <div className='mt-12'>
                            <button className=' bg-[#443eff] text-[white] text-xs lg:text-base font-[600] h-[40px] lg:h-[48px] w-56 lg:w-[224px] rounded-lg '>
                                Check Your Admit Eligibility
                            </button>

                        </div>
    
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 h-full">
                    {/* Right side remains empty */}
                </div>
            </div>
        </>
    );
}

export default Heropage;
