"use client"
import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import StudentAckCard from './stundent-ack-card/page';
import TitleText from '../../title-text-common/page';

const StudentAckPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="w-9/12 text-[12px]  lg:text-[16px] overflow-x-hidden"> {/* Prevent horizontal overflow */}
      {/* Title Section */}
      <TitleText title={'What are students are saying'} />

      {/* Ack Card Section */}
      {isMobile ? (
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className="overflow-hidden "
        >
          <div className="flex justify-center">
            <StudentAckCard
              topText={
                'I valued working with professors on interesting projects for my final project requirement. Being given the opportunity to build them from scratch and have them serve useful purposes made the work fulfilling while also emulating real-world software development. '
              }
              bottomTextName={'Mohammad D'}
              bottomText={'Case Western Reserve University'}
            />
          </div>
          <div className="flex justify-center">
            <StudentAckCard
              topText={
                'The Career Management Center of CSU is a great resource. Fort Collins is a beautiful city, and CSU has an amazing campus.'
              }
              bottomTextName={'Winston K'}
              bottomText={'Case Western Reserve University'}
            />
          </div>
          <div className="flex justify-center">
            <StudentAckCard
              topText={
                'Going to CWRU gives you exposure to so many opportunities. The career centre mentored me through the interview process, and I already have a job at EY after graduation.'
              }
              bottomTextName={'Daniel O'}
              bottomText={'Case Western Reserve University'}
            />
          </div>
        </SwipeableViews>
      ) : (
        <div className="flex gap-x-10 justify-between">
          <StudentAckCard
            topText={
              'I valued working with professors on interesting projects for my final project requirement. Being given the opportunity to build them from scratch and have them serve useful purposes made the work fulfilling while also emulating real-world software development. '
            }
            bottomTextName={'Mohammad D'}
            bottomText={'Case Western Reserve University'}
          />
          <StudentAckCard
            topText={
              'The Career Management Center of CSU is a great resource. Fort Collins is a beautiful city, and CSU has an amazing campus.'
            }
            bottomTextName={'Winston K'}
            bottomText={'Case Western Reserve University'}
          />
          <StudentAckCard
            topText={
              'Going to CWRU gives you exposure to so many opportunities. The career centre mentored me through the interview process, and I already have a job at EY after graduation.'
            }
            bottomTextName={'Daniel O'}
            bottomText={'Case Western Reserve University'}
          />
        </div>
      )}
    </div>
  );
};

export default StudentAckPage;
