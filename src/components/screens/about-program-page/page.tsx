"use client"

import React, { useEffect, useState } from 'react';
import Overview from './overview/page';
import PlacementCareer from './placement-career/page';
import FeesFinancing from './fees-financing/page';
import ProgramEligibility from './program-eligibility/page';

type Props = {};

const AboutProgramPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string | null>('Overview'); // Initialize activeTab with 'Overview'
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);

  };

  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial mobile status
    handleResize();

    // Add event listener to update mobile status on resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };


  return (
    <div className="w-9/12 mt-10 mb-10 items-center justify-center">
      <p className="text-center mb-2 font-semibold text-primary">About Case Western University</p>
      <p className="text-3xl font-bold text-center">Learn about the program, fees, jobs & more</p>
      {/* Render tabs as buttons */}
    {isMobile &&  <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:justify-between mt-12">
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Overview' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
          onClick={() => handleTabClick('Overview')}
        >
          Overview
        </button>
        <div>
          {activeTab === 'Overview' && <Overview />}
        </div>
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Program & Eligibility' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
          onClick={() => handleTabClick('Program & Eligibility')}
        >
          Program & Eligibility
        </button>
        <div>
          {activeTab === 'Program & Eligibility' && <ProgramEligibility />}
        </div>
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Placement & Career' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
          onClick={() => handleTabClick('Placement & Career')}
        >
          Placement & Career
        </button>
        <div>
          {activeTab === 'Placement & Career' && <PlacementCareer />}
        </div>
        <button
          className={`btn text-[#332EBF] ${activeTab === 'Fees & Financing' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
          onClick={() => handleTabClick('Fees & Financing')}
        >
          Fees & Financing
        </button>
        <div>
          {activeTab === 'Fees & Financing' && <FeesFinancing />}
        </div>
      </div>}
    {!isMobile &&(   
      <>
      <div className="hidden md:flex flex-col gap-y-4 md:flex-row md:gap-x-12 md:justify-between mt-12">
          <button
            className={`btn text-[#332EBF] ${activeTab === 'Overview' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
            onClick={() => handleTabClick('Overview')}
          >
            Overview
          </button>
          <button
            className={`btn text-[#332EBF] ${activeTab === 'Program & Eligibility' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
            onClick={() => handleTabClick('Program & Eligibility')}
          >
            Program & Eligibility
          </button>
          <button
            className={`btn text-[#332EBF] ${activeTab === 'Placement & Career' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
            onClick={() => handleTabClick('Placement & Career')}
          >
            Placement & Career
          </button>
          <button
            className={`btn text-[#332EBF] ${activeTab === 'Fees & Financing' ? 'bg-[#332EBF] text-white' : ''} px-4 py-2`}
            onClick={() => handleTabClick('Fees & Financing')}
          >
            Fees & Financing
          </button>
        </div>
        <div className="mt-8">
        {activeTab === 'Overview' && <Overview />}
        {activeTab === 'Program & Eligibility' && <ProgramEligibility />}
        {activeTab === 'Placement & Career' && <PlacementCareer />}
        {activeTab === 'Fees & Financing' && <FeesFinancing />}
      </div>
      </>   
      )}

    </div>
  );
};

export default AboutProgramPage;
