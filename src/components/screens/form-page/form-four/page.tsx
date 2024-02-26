import React from 'react';

type Props = {};

const ThankyouPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center  h-[460px] ">
      <div className="bg-green-200 lg:w-[50%]  border-lime-500 shadow-lg justify-center grid  rounded-lg p-8 ">
        <h2 className="text-2xl font-bold text-center mb-4">That&apos;s all we need!</h2>
        <p className="text-lg text-gray-800">Thank you for your time. We will get back soon</p>
      </div>
    </div>
  );
};

export default ThankyouPage;
