"use client";
import React, { useState } from "react";
import MyFormFirst from "./form-one/page";
import TitleText from "@/components/title-text-common/page";
import SecondFormPage from "./form-two/page";

type Props = {};

const Formpage = (props: Props) => {
  const [isFirstSave, setIsFirstSave] = useState(false);
  return (
    <div className="bg-[#FAF9FF] w-full  h-[90%]   justify-center flex">
      <div className=" ">
        <div className="justify-center flex">
          <TitleText title={"Fill this form to check your eligibility"} />
        </div>
        <div>
          {!isFirstSave && <MyFormFirst setIsFirstSave={setIsFirstSave} />}
          {isFirstSave && <SecondFormPage setIsFirstSave={setIsFirstSave} />}
        </div>
      </div>
    </div>
  );
};

export default Formpage;
