import React from 'react';
import TitleText from '../../title-text-common/page';
import googleLogo from '../../../../public/companyIcon/google.png'; // Import company logos
import mastercardLogo from '../../../../public/companyIcon/mastercard.png';
import appleLogo from '../../../../public/companyIcon/apple.png';
import uberLogo from '../../../../public/companyIcon/uber.png';
import teslaLogo from '../../../../public/companyIcon/tesla.png';
import amazonLogo from '../../../../public/companyIcon/amazon.png';
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
  const TeachersImage = '/about/teachers.png';

  return (
    <>
      {/* Title Section */}
      <TitleText title={'Get placed in'} />
      {/* Company Logos */}
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 w-9/12 mb-10 mx-auto'>
        {CompanyList.map((company, index) => (
          <div key={index} className='flex justify-center items-center'>
            <Image width={80} src={company.logo} alt={company.name} className='max-h-16 md:max-h-full' />
          </div>
        ))}
      </div>

      {/* Leap Advantage Section */}
      <div className="w-full md:w-9/12 rounded-lg flex flex-col md:flex-row h-auto bg-gradient-to-br from-purple-100 via-pink-200 to-yellow-300 mt-10 ">
        {/* Left Side */}
        <div className='w-full rounded-lg  md:w-1/2 bg-gradient-to-br from-purple-100 via-pink-200 to-yellow-300'>
          {/* Heading Text */}
          <div className='pt-10 md:pt-0 md:pl-20 '>
            <p className='flex lg:justify-start lg:pl-0 justify-center text-black text-2xl md:text-lg lg:text-3xl font-bold pl-6 md:pl-20 pt-10 leading-relaxed'>Why should you consider</p>
            <p className='text-[#4936C1] lg:pl-0 lg:justify-start flex justify-center text-2xl md:text-lg lg:text-3xl font-bold pl-6 md:pl-20 leading-tight'>LeapAdvantage?</p>
          </div>
          {/* List Items */}
          <div className='pl-20 mt-8'>
            <ul className='gap-y-8 text-lg grid'>
              <li>✅ GRE and IELTS waiver* </li>
              <li>✅ High admit chance </li>
              <li>✅ Scholarship of up to ₹17 lakhs </li>
              <li>✅ Education from a top-rank university </li>
            </ul>
          </div>
        </div>

        {/* Right Side Image */}
        <div className='w-full md:w-1/2 h-auto flex justify-center'>
          <Image src={TeachersImage} alt='teachers' width={422} height={452} />
        </div>
      </div>
    </>
  );
};

export default LeapAdvantagePage;
