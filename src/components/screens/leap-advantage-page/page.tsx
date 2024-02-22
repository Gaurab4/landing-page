import React from 'react'
import TitleText from '../../title-text-common/page'


const CompanyList = [
  'google',
  'mastercard',
  'apple',
  'uber',
  'tesla',
  'amazon',
];

type Props = {}

const LeapAdvantagePage = (props: Props) => {
  return (
    <>
    {/* Title Section */}
    <TitleText title={'Get placed in'}/>

    {/* Map of CompanyList */}
    <div className='flex justify-between w-9/12 mb-10'>
      {CompanyList.map((companyName, index) => (
          <div key={index}>{companyName}</div>
      ))}
    </div>


    {/* Leap Advantage Section  */}

    <div className="card w-10/12 h-96 bg-gradient-to-br from-purple-100 via-pink-200 to-yellow-300 mt-10 ">

      {/* Heading Text  */}
        <div>
          <p className='text-black text-4xl font-bold pl-20 pt-10 leading-relaxed'>Why should you consider</p>
          <p className='text-[#4936C1] text-4xl font-bold pl-20 leading-tight'>LeapAdvantage?</p>
        </div>

      {/* List Items */}
      <div className=''>
        
      </div>
    </div>
    </>
    
  )
}

export default LeapAdvantagePage