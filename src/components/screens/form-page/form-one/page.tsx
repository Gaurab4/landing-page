// components/Form.js
"use client";

import { Form, Field } from "react-final-form";

interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
}

type Props = {
  setIsFirstSave: (value: boolean) => void;
};

const MyFormFirst = (props: Props) => {
  const { setIsFirstSave } = props;

  const onSubmit = () => {
    setIsFirstSave(true);
  };

  const validate = (values: any) => {
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
    <div className="w-[1300px] h-[647px]">
      {/*  Form 1 */}

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className=" bg-[#FFFFFF]  h-[90%] rounded-2xl "
          >
            {/* Form  Title  */}
            <div className="pl-6 pt-4 font-[700]">Complete Student Profile</div>

            {/* Divider  */}
            <div className="divider "></div>

            {/* Steps  */}
            <ul className="steps w-[100%]">
              <li
                data-content="●"
                className="step step-primary text-xs font-[500]"
              >
                General Details
              </li>

              <li
                data-content="●"
                className="step step-primary text-xs font-[500]"
              >
                Address Details
              </li>
            </ul>

            {/* Personal Info Text  */}
            <div className="pl-6 pt-4 pb-8 font-[400] text-[20px]">
              <p>Let&apos;s Enter Your Personal Details</p>
            </div>

            {/* Form Fields  */}

            <div className="grid grid-cols-3 grid-flow-row gap-4 pl-6">
              <div className="mb-4 ">
                <label
                  className="block text-gray-700 text-sm font-[500] mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="Enter your first name"
                  className="border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-[500] mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Enter your last name"
                  className=" border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-[500] mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Enter your email"
                  className=" border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-[500] mb-2"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <Field
                  name="dob"
                  component="input"
                  type="date"
                  placeholder="Select your date of birth"
                  className=" border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

            {/* Submit Button  */}
            <div className="mb-6 flex flex-row-reverse mt-[2rem] mr-6">
              <button
                type="submit"
                className="bg-[#443EFE] w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
