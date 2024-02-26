"use client"

import React, { useState } from "react";
import MyFormFirst from "./form-one/page";
import TitleText from "@/components/title-text-common/page";
import SecondFormPage from "./form-two/page";
import ConfirmationFormPage from "./form-three/page";
import ThankyouPage from "./form-four/page";

const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(1); // State to track current step

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1); // Increment current step
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1); // Decrement current step
  };

  return (
    <div className="bg-[#FAF9FF] w-full h-[90%] justify-center flex">
      <div className="w-10/12">
        <div className="justify-center flex">
          <TitleText title={"Fill this form to check your eligibility"} />
        </div>
    
        {/* Render Form Component */}
        {currentStep === 1 && (
          <MyFormFirst
            handleNextStep={handleNextStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 2 && (
          <SecondFormPage
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            currentStep={currentStep}
          />
        )}
        {
          currentStep === 3 && (
            <ConfirmationFormPage 
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            currentStep={currentStep}
            />  
          )}
            {
          currentStep === 4 && (
            <ThankyouPage />  
          )}
      </div>
    </div>
  );
};

export default FormPage;
