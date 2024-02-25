"use client"
import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AlumniCard from './alumni-card/page';
import TitleText from '../../title-text-common/page';

const AlumiPage = () => {
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

  const alumni1 = '/alumni/alumni1.png';
  const alumni2 = '/alumni/Alumni2.png';
  const alumni3 = '/alumni/alumni3.png';

  return (
    <div className="w-9/12 overflow-x-hidden mb-12"> {/* Prevent horizontal overflow */}
      {/* Main Text Section */}
      <TitleText title={'Notable Alumni'} />

      {/* Card Section */}
      {isMobile ? (
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className="overflow-hidden"
        >
          <div className="flex justify-center">
            <AlumniCard
              name={'Paul Buchheit'}
              position={'Inventor of Gmail'}
              description={
                'Google employee #23, inventor of Gmail and now an angel investor. Credited with suggesting Google’s now-famous motto, “Don’t be evil.”'
              }
              imgSrc={alumni1}
            />
          </div>
          <div className="flex justify-center">
            <AlumniCard
              name={'Larry Hornbeck'}
              position={' Physics'}
              description={
                'Academy Award-National Academy of Engineering member and recipient of an Academy Award of Merit for innovations winning inventor.'
              }
              imgSrc={alumni2}
            />
          </div>
          <div className="flex justify-center">
            <AlumniCard
              name={'Felipe Gomez del Campo'}
              position={'Aerospace Engineering'}
              description={
                'CEO of FGC Plasma Solutions who was named to Forbes 30 Under 30 and honored by President Barack Obama as a global entrepreneur.'
              }
              imgSrc={alumni3}
            />
          </div>
        </SwipeableViews>
      ) : (
        <div className="flex gap-x-10 justify-center">
          <AlumniCard
            name={'Paul Buchheit'}
            position={'Inventor of Gmail'}
            description={
              'Google employee #23, inventor of Gmail and now an angel investor. Credited with suggesting Google’s now-famous motto, “Don’t be evil.”'
            }
            imgSrc={alumni1}
          />
          <AlumniCard
            name={'Larry Hornbeck'}
            position={' Physics'}
            description={
              'Academy Award-National Academy of Engineering member and recipient of an Academy Award of Merit for innovations winning inventor.'
            }
            imgSrc={alumni2}
          />
          <AlumniCard
            name={'Felipe Gomez del Campo'}
            position={'Aerospace Engineering'}
            description={
              'CEO of FGC Plasma Solutions who was named to Forbes 30 Under 30 and honored by President Barack Obama as a global entrepreneur.'
            }
            imgSrc={alumni3}
          />
        </div>
      )}
    </div>
  );
};

export default AlumiPage;
