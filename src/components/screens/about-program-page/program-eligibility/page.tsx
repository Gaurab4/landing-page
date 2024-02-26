import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const ProgramEligible = (props: Props) => {
  const placementImage = "/about/placement2.png";

  const [accordion1Open, setAccordion1Open] = useState<boolean>(false);
  const [accordion2Open, setAccordion2Open] = useState<boolean>(false);

  const toggleAccordion1 = () => {
    setAccordion1Open(!accordion1Open);
  };

  const toggleAccordion2 = () => {
    setAccordion2Open(!accordion2Open);
  };

  return (
    <div className="flex flex-col mt-16 w-full md:flex-row">
      {/* Left Side (Timeline) */}
      <div className="w-full md:w-1/2 h-full order-2 md:order-1">
        <p className="font-semibold text-2xl text-center md:text-left mb-5">
          Program Timeline
        </p>
        <div className="md:hidden grid justify-center">
          <button
            className="w-full text-sm bg-gray-200 text-[#6b3bd0] text-center font-semibold py-2 px-4 mb-2 rounded-md focus:outline-none"
            onClick={toggleAccordion1}
          >
            {accordion1Open ? "Hide List" : "1st Semester (In India)"}
          </button>
          {accordion1Open && (
            <div className="mt-2">
              <ul className="list-disc ml-4 py-2">
                <li>Start 1st semester in India</li>
                <li>Study while working part-time in India</li>
                <li>Get Visa support and mentorship from Leap</li>
                <li>Move to USA after 1st semester</li>
              </ul>
            </div>
          )}
          <button
            className="w-full text-sm bg-gray-200 text-[#6b3bd0] text-center font-semibold py-2 px-4 mb-2 rounded-md focus:outline-none"
            onClick={toggleAccordion2}
          >
            {accordion2Open ? "Hide List" : "2nd, 3rd & 4th Semester (In USA)"}
          </button>
          {accordion2Open && (
            <div className="mt-2">
              <ul className="list-disc  ml-4 py-2">
                <li>Move to the USA for 2nd, 3rd and 4th semester</li>
                <li>Get access to on-campus jobs, fellowships and more</li>
                <li>Graduate and get a 3-year post study work visa</li>
                <li>Get placement support and land a full-time job!</li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:block">
            <div className="flex">
            <div>
            <ul className="timeline timeline-vertical  w-[20px]">
              <li>
                <div className="timeline-start  h-[80px]"></div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#6b3bd0"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start   h-[250px]"></div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#6b3bd0"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        <div className="ml-4 mt-8">
        <div>
            <p className="text-lg font-semibold">1st Semester (In India)</p>
            <ol className="list-disc ml-8 py-2">
              <li>Start 1st semester in India</li>
              <li>Study while working part-time in India</li>
              <li>Get Visa support and mentorship from Leap</li>
              <li>Move to USA after 1st semester</li>
            </ol>
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold">
              2nd, 3rd & 4th Semester (In USA)
            </p>
            <ol className="list-disc ml-8 py-2">
              <li>Move to the USA for 2nd, 3rd and 4th semester</li>
              <li>Get access to on-campus jobs, fellowships and more</li>
              <li>Graduate and get a 3-year post study work visa</li>
              <li>Get placement support and land a full-time job!</li>
            </ol>
          </div>
        </div>
            </div>
    
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 h-full mb-8 md:mb-0 order-1 md:order-2">
        <div className="mx-auto md:mr-6 max-w-[368px]">
          <Image
            src={placementImage}
            alt="placement image"
            width={368}
            height={368}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramEligible;
