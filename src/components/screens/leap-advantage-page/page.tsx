import React from 'react';
import TitleText from '../../title-text-common/page';
import googleLogo from '../../../../public/about/overview.png'; // Import company logos
import mastercardLogo from '../../../../public/about/overview.png';
import appleLogo from '../../../../public/about/overview.png';
import uberLogo from '../../../../public/about/overview.png';
import teslaLogo from '../../../../public/about/overview.png';
import amazonLogo from '../../../../public/about/overview.png';
import Image from 'next/image';

const CompanyList = [
  { name: 'Google', logo: googleLogo },
  { name: 'Mastercard', logo: mastercardLogo },
  { name: 'Apple', logo: appleLogo },
  { name: 'Uber', logo: uberLogo },
  { name: 'Tesla', logo: teslaLogo },
  { name: 'Amazon', logo: amazonLogo },
];

const LeapAdvantagePage = () => {
  return (
    <>
      {/* Title Section */}
      <TitleText title={'Get placed in'} />
      {/* Company Logos */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12 mb-10 mx-auto'>
        {CompanyList.map((company, index) => (
          <div key={index} className='flex justify-center items-center'>
            <Image width={80} src={company.logo} alt={company.name} className='max-h-16 md:max-h-full' />
          </div>
        ))}
      </div>

      {/* Leap Advantage Section */}
      <div className="card w-10/12 h-96 bg-gradient-to-br from-purple-100 via-pink-200 to-yellow-300 mt-10 mx-auto">
        {/* Heading Text */}
        <div>
          <p className='text-black text-4xl md:text-5xl lg:text-6xl font-bold pl-6 md:pl-20 pt-10 leading-relaxed'>Why should you consider</p>
          <p className='text-[#4936C1] text-4xl md:text-5xl lg:text-6xl font-bold pl-6 md:pl-20 leading-tight'>LeapAdvantage?</p>
        </div>

        {/* List Items */}
        <div className=''>
          {/* Add your list items here */}
        </div>
      </div>
    
    </>
  );
};

export default LeapAdvantagePage;
