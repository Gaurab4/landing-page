import Image from 'next/image'
import React from 'react'

type Props = {}

const PlacementCareer = (props: Props) => {
    const placementImage = '/about/placement.png'
  return (
    <div className='flex items-center  justify-center mt-16 '>
        <div className=' w-6/12'>
        <p className='font-[300] lg:text-[16px] text-[13px] text-center lg:leading-loose'>
          MS in Computer Science opens up many career opportunities in various fields
          such as <b className='font-[700]'>software development, data science, artificial intelligence, 
          cyber security, cloud computing,</b>etc. 
        </p>
        {/* Image Section */}
        <div className='justify-center flex mt-4'>
        <Image  src={placementImage} width={398} height={398} alt='this is me' />
        </div>
    
        </div>
    

    </div>
  )
}

export default PlacementCareer