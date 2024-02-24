// components/Form.js
"use client"

// components/Form.js

// components/Form.js

import { Form, Field } from 'react-final-form';

const MyForm = () => {
  const onSubmit = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.dob) {
      errors.dob = 'Date of birth is required';
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className=" flex justify-evenly">
          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="Enter your first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500 text-xs italic">
              <Field name="firstName" subscription={{ touched: true, error: true }}>
                {({ meta: { touched, error } }) =>
                  touched && error ? <span>{error}</span> : null
                }
              </Field>
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Enter your last name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500 text-xs italic">
              <Field name="lastName" subscription={{ touched: true, error: true }}>
                {({ meta: { touched, error } }) =>
                  touched && error ? <span>{error}</span> : null
                }
              </Field>
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500 text-xs italic">
              <Field name="email" subscription={{ touched: true, error: true }}>
                {({ meta: { touched, error } }) =>
                  touched && error ? <span>{error}</span> : null
                }
              </Field>
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <Field
              name="dob"
              component="input"
              type="date"
              placeholder="Select your date of birth"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500 text-xs italic">
              <Field name="dob" subscription={{ touched: true, error: true }}>
                {({ meta: { touched, error } }) =>
                  touched && error ? <span>{error}</span> : null
                }
              </Field>
            </p>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;

