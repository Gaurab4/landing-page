"use client "
import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
}

type Props = {
  handleNextStep: () => void;
  currentStep: number;
};

const MyFormFirst = (props: Props) => {
  const { handleNextStep, currentStep } = props;

  const getFormDataFromLocalStorage = (): FormValues => {
    let formData;
    if (typeof window !== 'undefined') {
    formData = localStorage.getItem("formValues");
    }else {
      // Handle the case where localStorage is not available
      console.error("localStorage is not available");
    }
    return formData ? JSON.parse(formData) : {};
  };

  const initialValues: FormValues = getFormDataFromLocalStorage();

  const onSubmit = (values: FormValues) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formValues', JSON.stringify(values));
      handleNextStep();
    } else {
      // Handle the case where localStorage is not available
      console.error("localStorage is not available");
    }
  };


  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.dob) {
      errors.dob = "Date of birth is required";
    }

    return errors;
  };

  return (
    <div className="w-full lg:w-[1300px] h-[647px] relative">
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="bg-white h-[95%] rounded-2xl">
            {/* Form Title */}
            <div className="pl-6 pt-4 font-semibold">Complete Student Profile</div>

            {/* Stepper */}
            <div className="w-[90%] rounded-lg bg-gray-200 h-1  relative mx-auto my-4">
              <div
                className="absolute rounded-lg top-0 bg-[#6b3bd0] h-1 transition-all duration-300 ease-in-out"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              ></div>
              <div className="flex justify-between mt-2">
                <div className="w-1/2  flex text-center items-center justify-center text-lg z-10 mt-[-11px]">
                  <div className="w-6 h-6 bg-[#f7f2ff] rounded-full z-10">
                    <div className="w-2 h-2 bg-[#6b3bd0] mt-2 ml-2 rounded-full"></div>
                  </div>
                </div>
                <div className="w-1/2  flex text-center items-center justify-center text-lg z-10 mt-[-11px]">
                  <div className="w-6 h-6 bg-gray-300 rounded-full ">
                    <div className="w-2 h-2 bg-[white] mt-2 ml-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info Text */}
            <div className="pl-6 pt-4 pb-8 font-normal text-lg">
              <p>Let&apos;s Enter Your Personal Details</p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6 pr-6">
              {/* First Name */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="Enter your first name"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500 text-xs italic">
                  <Field
                    name="firstName"
                    subscription={{ touched: true, error: true }}
                  >
                    {({ meta: { touched, error } }) =>
                      touched && error ? <span>{error}</span> : null
                    }
                  </Field>
                </p>
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Enter your last name"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500 text-xs italic">
                  <Field
                    name="lastName"
                    subscription={{ touched: true, error: true }}
                  >
                    {({ meta: { touched, error } }) =>
                      touched && error ? <span>{error}</span> : null
                    }
                  </Field>
                </p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500 text-xs italic">
                  <Field
                    name="email"
                    subscription={{ touched: true, error: true }}
                  >
                    {({ meta: { touched, error } }) =>
                      touched && error ? <span>{error}</span> : null
                    }
                  </Field>
                </p>
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <Field
                  name="dob"
                  component="input"
                  type="date"
                  placeholder="Select your date of birth"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500 text-xs italic">
                  <Field
                    name="dob"
                    subscription={{ touched: true, error: true }}
                  >
                    {({ meta: { touched, error } }) =>
                      touched && error ? <span>{error}</span> : null
                    }
                  </Field>
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-2 mt-4 pr-8 absolute bottom-10 right-0">
              <button
                type="submit"
                className="bg-[#443EFE] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save & Continue
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default MyFormFirst;
