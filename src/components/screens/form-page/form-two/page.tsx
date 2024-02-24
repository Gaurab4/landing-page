import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";

type Props = {
  setIsFirstSave: (value: boolean) => void;
};

// Function to fetch data from the API
async function fetchData(url: string, headers: Record<string, string>) {
  try {
    const response = await fetch(url, {
      headers: headers, // Add the headers to the fetch options
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Fetch countries data
async function fetchCountries() {
  const url = "https://api.countrystatecity.in/v1/countries";
  const headers = {
    "X-CSCAPI-KEY": "fbd",
  };
  const countries = await fetchData(url, headers);
  return countries;
}

// Fetch states data for a specific country by country code
async function fetchStates(countryCode: string) {
  const url = `https://api.countrystatecity.in/v1/countries/${countryCode}/states`;
  const headers = {
    "X-CSCAPI-KEY": "fbd",
  };
  const states = await fetchData(url, headers);
  return states;
}

// Fetch cities data for a specific country and state by country code and state code
async function fetchCities(countryCode: string, stateCode: string) {
  const url = `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`;
  const headers = {
    "X-CSCAPI-KEY": "fbd",
  };
  const cities = await fetchData(url, headers);
  return cities;
}

const SecondFormPage = (props: Props) => {
  const { setIsFirstSave } = props;
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch countries data on component mount
  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData || []);
    };
    getCountries();
  }, []);

  // Fetch states data when country is selected
  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const countryCode = event.target.value;
    const statesData = await fetchStates(countryCode);
    setStates(statesData || []);
  };

  // Fetch cities data when state is selected
  const handleStateChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const countryCode = event.target.form?.country.value;
    const stateCode = event.target.value;
    const citiesData = await fetchCities(countryCode, stateCode);
    setCities(citiesData || []);
  };

  const onSubmitFinal = () => {
    // setIsFirstSave(true);
    console.log("finisheddd");
  };

  const backButtonClicked = () => {
    setIsFirstSave(false);
  };

  return (
    <Form
      onSubmit={onSubmitFinal}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFFFF]  h-[90%] rounded-2xl"
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

          {/* Address Section */}

          <div className="pl-6 flex">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-[500] mb-2"
                htmlFor="Address"
              >
                Address Line 1*
              </label>
              <Field
                name="Address"
                component="input"
                type="text"
                placeholder="Enter your Address "
                required
                className=" border rounded w-[554px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500 text-xs italic">
                <Field
                  name="Adresss"
                  subscription={{ touched: true, error: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                  }
                </Field>
              </p>
            </div>

            <div className="mb-4 ml-5">
              <label
                className="flex  text-gray-700 text-sm font-[500] mb-2"
                htmlFor="Address 2"
              >
                Address Line 2{" "}
                <p className="text-[grey] ml-2 mt-[1.5px] font-[300] text-xs">
                  (optional)
                </p>
              </label>
              <Field
                name="Address 2"
                component="input"
                type="text"
                placeholder="Enter your Address 2 "
                className=" border rounded w-[554px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500 text-xs italic">
                <Field
                  name="Adresss"
                  subscription={{ touched: true, error: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                  }
                </Field>
              </p>
            </div>
          </div>

          {/* Country , State , City, Pincode */}
          <div className="grid grid-cols-3 grid-flow-row gap-4 pl-6">
            {/* Country dropdown */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <Field
                name="country"
                component="select"
                className=" border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleCountryChange}
              >
                <option value="">Select Country</option>
                {countries.map((country: any) => (
                  <option key={country.iso2} value={country.iso2}>
                    {country.name}
                  </option>
                ))}
              </Field>
            </div>
            {/* State dropdown */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <Field
                name="state"
                component="select"
                className="border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleStateChange}
              >
                <option value="">Select State</option>
                {states.map((state: any) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Field>
            </div>
            {/* City dropdown */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <Field
                name="city"
                component="select"
                className=" border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select City</option>
                {cities.map((city: any) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Field>
            </div>

            {/* PinCode dropdown */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-[500] mb-2"
                htmlFor="Pincode"
              >
                Pincode
              </label>
              <Field
                name="Pincode"
                component="input"
                type="text"
                placeholder="Enter Pincode "
                className=" border rounded w-[330px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500 text-xs italic">
                <Field
                  name="Pincode"
                  subscription={{ touched: true, error: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                  }
                </Field>
              </p>
            </div>
          </div>

          {/* Buttons  */}
          <div className="flex justify-between ">
            {/* Back Button  */}
            <div className=" ml-6">
              <button
                onClick={backButtonClicked}
                type="submit"
                className="btn btn-outline"
              >
                Back
              </button>
            </div>

            {/* Submit Button  */}
            <div className="mr-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default SecondFormPage;
