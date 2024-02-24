"use client"

import React, { useState } from 'react';
import Overview from './overview/page';
import PlacementCareer from './placement-career/page';
import FeesFinancing from './fees-financing/page';
import ProgramEligibility from './program-eligibility/page';

type Props = {};

const AboutProgramPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='w-9/12 mt-10 mb-10 items-center justify-center'>
      <p className='flex justify-center mb-2 font-[300] text-[#1b1d6a]'>About Case Western University</p>
      <p className='text-3xl font-bold flex justify-center'>Learn about the program, fees, jobs & more</p>
      <div className='flex gap-x-12 justify-between mt-12'>
        <button
          className={`btn w-[268px] text-[#332EBF] ${activeTab === 'Overview' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Overview')}
        >
          Overview
        </button>
        <button
          className={`btn w-[268px] text-[#332EBF] ${activeTab === 'Program & Eligibility' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Program & Eligibility')}
        >
          Program & Eligibility
        </button>
        <button
          className={`btn w-[268px] text-[#332EBF] ${activeTab === 'Placement & Career' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Placement & Career')}
        >
          Placement & Career
        </button>
        <button
          className={`btn w-[268px] text-[#332EBF] ${activeTab === 'Fees & Financing' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Fees & Financing')}
        >
          Fees & Financing
        </button>
      </div>
      {activeTab === 'Overview' && <Overview />}
      {activeTab === 'Program & Eligibility' && <ProgramEligibility />}
      {activeTab === 'Placement & Career' && <PlacementCareer />}
      {activeTab === 'Fees & Financing' && <FeesFinancing />}
    </div>
  );
};

export default AboutProgramPage;
