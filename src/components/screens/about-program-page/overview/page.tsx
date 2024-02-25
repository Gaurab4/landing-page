import Image from 'next/image'
import React from 'react'

type Props = {}

const Overview = (props: Props) => {

    const overViewImage = '/about/overview.png'
  return (
    <div className='mt-16 flex flex-col-reverse lg:flex-row'>
        {/* First Half  */}
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
        <div className='w-full lg:w-[90%]'>
            <p className='mb-8 lg:mt-[0] mt-[12px] font-[300]'>
            The Case Western Reserve University is located in Cleveland,
            Ohio, US. The Masters in Computer Science from Case Western Reserve
            University provides students with experiential and applied learning
            that ensures a higher level of understanding of the field.
            It is a 30-credit STEM-designated program. 
            </p>
            <p className='font-[300]'>
            The degree is delivered in collaboration with Case Western Reserve University’s
            College of Engineering and includes 6 months in India and 1.5 years on campus in Ohio,
            US. The curriculum offers a challenging study experience for individuals with technical
            credentials.
            </p>
            
        </div>
        </div>
        {/* Image Half */}
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center relative'>
                <Image style={{borderRadius:16}} width={398} height={398} src={overViewImage} alt='overview Image'/>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90  h-32 rounded-lg text-white">

                </div>
            </div>  
        </div>
        
    </div>
  )
}

export default Overview
