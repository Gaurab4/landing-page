import React from 'react'
import AlumniCard from './alumni-card/page';
import TitleText from '../../title-text-common/page';

type Props = {}

const AlumiPage = (props: Props) => {
  return (

    <>
    {/* Main Text Section */}
    <TitleText title={'Notable Alumni'}/>

    {/* Card Section */}
    <div className='flex gap-x-10' >
    <AlumniCard
        name={'Paul Buchheit'}
        position={'Inventor of Gmail'}
        description={'Google employee #23, inventor of Gmail and now an angel investor.Credited with suggesting Googles now-famous motto, “Dont be evil.”'}
        imgSrc={'/public/alumni/alumni1.png'}
    />
    <AlumniCard
        name={'Larry Hornbeck'}
        position={' Physics'}
        description={'Academy Award-National Academy of Engineering member and recipient of an Academy Award of Merit for innovationswinning inventor.'}
        imgSrc={'/public/alumni/alumni1.png'}
    />
    <AlumniCard
        name={'Felipe Gomez del Campo'}
        position={'Aerospace Engineering'}
        description={'CEO of FGC Plasma Solutions who was named to Forbes 30 Under 30 and honored by President Barack Obama as a global entrepreneur.'}
        imgSrc={'/public/alumni/alumni1.png'}
    />
    </div>
    
    
    </>

  )
}

export default AlumiPage;