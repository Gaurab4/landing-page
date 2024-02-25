"use client"


import React, { useState } from 'react';
import Overview from './overview/page';
import PlacementCareer from './placement-career/page';
import FeesFinancing from './fees-financing/page';
import ProgramEligibility from './program-eligibility/page';

type Props = {};

const AboutProgramPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string | null>('Overview'); // Initialize activeTab with 'Overview'

  const handleTabClick = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="w-full mt-10 mb-10 items-center justify-center">
      <p className="text-center mb-2 font-semibold text-primary">About Case Western University</p>
      <p className="text-3xl font-bold text-center">Learn about the program, fees, jobs & more</p>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:justify-between mt-12">
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Overview' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Overview')}
        >
          Overview
        </button>
        {activeTab === 'Overview' && (
          <div className="w-full">
            {activeTab === 'Overview' && <Overview />}
          </div>
        )}
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Program & Eligibility' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Program & Eligibility')}
        >
          Program & Eligibility
        </button>
        {activeTab === 'Program & Eligibility' && (
          <div className="w-full">
            {activeTab === 'Program & Eligibility' && <ProgramEligibility />}
          </div>
        )}
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Placement & Career' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Placement & Career')}
        >
          Placement & Career
        </button>
        {activeTab === 'Placement & Career' && (
          <div className="w-full">
            {activeTab === 'Placement & Career' && <PlacementCareer />}
          </div>
        )}
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Fees & Financing' ? 'bg-[#332EBF] text-white' : ''}`}
          onClick={() => handleTabClick('Fees & Financing')}
        >
          Fees & Financing
        </button>
        {activeTab === 'Fees & Financing' && (
          <div className="w-full">
            {activeTab === 'Fees & Financing' && <FeesFinancing />}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutProgramPage;
