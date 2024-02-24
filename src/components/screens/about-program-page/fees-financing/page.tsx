import React from 'react'

type Props = {}

const FeesFinancing = (props: Props) => {
  return (
    <div className='flex mt-16'>
        {/* Left Section  */}
        <div className='w-1/2 h-full '>
            <p className='font-[400]  text-[18px] text-[#1B1D6A] mb-5'>With Leap Advantage, you save almost<b> ₹17 lakhs</b>  on tuition fees.</p>
            <p className='font-[400] text-[#1B1D6A] text-[18px]' >
                Leap has partnered with multiple loan providers to help 
                you get loans for both Indian (1st sem)
                and US parts (2nd, 3rd, 4th sem) of your education.
            </p>
            <div className='gap-x-12  mt-6'>
                <ul className='grid gap-y-5'>
                    <li className='font-[300] text-[#1B1D6A] text-[16px]'>🔘 Collateral-free loans available</li>
                    <li className='font-[300] text-[#1B1D6A] text-[16px]'>🔘 100% online process</li>
                    <li className='font-[300] text-[#1B1D6A] text-[16px]'>🔘 Flexible repayment</li>
                </ul>
            </div>
        </div>

        {/* Right Section */}
        <div className='w-1/2 h-full flex flex-row-reverse'>
            <div className=' w-[62%] h-56 '>
                {/* Right Side Card Section */}
            <div className=' flex  rounded-lg shadow-lg bg-[#140B4B] '>
                {/* Left Side */}
                <div className='text-[white] p-5'>
                    <div className='justify-center'>
                    <p className='items-self-center font-[700] justify-self-center'>With</p>
                    <p className='items-self-center font-[700] justify-self-center'>Leap Advantage</p>
                    <p className='font-[300] text-[#B8B6C9] text-xs' >(1st Sem in india + </p>
                    <p className='font-[300] text-[#B8B6C9] text-xs'>last 3 sem in USA)</p>

                    <p className='font-[300] mt-12 text-[#B8B6C9] text-xs'>Tuition Fees</p>
                    <p className='font-[700] text-[#7ADCA1] text-lg'>₹37 lakhs</p>
                    </div>
                </div>
                {/* Divider  */}
                <div className="divider lg:divider-horizontal"></div>
                {/* Right Side */}
                <div>
                <div className='justify-center text-[white] p-5'>
                    <p className='items-self-center font-[700] justify-self-center'>Studying at</p>
                    <p className='items-self-center font-[700] justify-self-center'>CWRU normallly</p>
                    <p className='font-[300] text-[#B8B6C9] text-xs' >(4 Semesters on </p>
                    <p className='font-[300] text-[#B8B6C9] text-xs'>campas)</p>

                    <p className='font-[300] mt-12 text-[#B8B6C9] text-xs'>Tuition Fees</p>
                    <p className='font-[700] text-[#7ADCA1] text-lg'>₹54 lakhs</p>
                    </div>
                </div>
            </div>

            {/* Right Side Text Section */}
            <div className='flex justify-center'>
                <p className='font-[300]  mt-2 text-xs italic'>
                    Tuition fee is subject to change
                </p>
            </div>
    
            </div>
        </div>
    </div>
  )
}

export default FeesFinancing