import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";

type Props = {
  setIsFirstSave: (value: boolean) => void;
  currentStep:number;
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
  const { setIsFirstSave, currentStep } = props;
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

  const onSubmitFinal = (values: any) => {
    try {
      localStorage.setItem('form2Values', JSON.stringify(values));
      setIsFirstSave(true);
    } catch (error) {
      // Handle the error gracefully, such as logging it or providing fallback behavior
      console.error("Error setting form values:", error);
      // Provide fallback behavior, such as redirecting or displaying an error message
    }
  
  };

  const backButtonClicked = () => {
    setIsFirstSave(false);
  };

  return (
    <div className="w-full  lg:w-[1300px] h-[900px] lg:h-[650px] relative"> {/* Responsive container */}
      <Form
        onSubmit={onSubmitFinal}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="bg-white  h-[95%] rounded-2xl"
          >
            {/* Form Title */}
            <div className="font-bold pl-6 pt-3 text-xl ">
              Complete Student Profile
            </div>

            {/* Divider  */}
            <div className="divider"></div>

              {/* Slider Component for Form 2 */}
              <div className="w-[90%] rounded-lg bg-[#6b3bd0] h-1 relative mx-auto my-4">
                <div  className="absolute rounded-lg top-0 bg-[#6b3bd0] h-1 transition-all duration-300 ease-in-out"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              ></div>
              <div className="flex justify-between mt-2">
              <div className="w-1/2  flex text-center items-center justify-center text-lg z-10 mt-[-11px]">
                <div className="w-6 h-6 bg-[#f7f2ff] rounded-full z-10">
                <div className="w-2 h-2 bg-[#6b3bd0] mt-2 ml-2 rounded-full"></div>
                </div>
              </div>
                <div className="w-1/2  flex text-center items-center justify-center text-lg z-10 mt-[-11px]">
                  <div className="w-6 h-6 bg-[#f7f2ff] rounded-full ">
                    <div className="w-2 h-2 bg-[#6b3bd0] mt-2 ml-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

              {/* Personal Info Text  */}
              <div className="pt-4 pl-6 pb-8 font-normal text-lg">
              <p>Let&apos;s Enter Your Personal Details</p>
            </div>

            {/* Address Section */}
            <div className=" pl-6  pr-6 lg:flex  justify-between">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address1"
              >
                Address Line 1*
              </label>
              <Field
                name="address1"
                component="input"
                type="text"
                placeholder="Enter your Address "
                required
                className="border rounded w-full lg:w-[560px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500 text-xs italic">
                <Field
                  name="address1"
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
                className="flex text-gray-700 text-sm font-bold mb-2"
                htmlFor="address1"
              >
                Address Line 2 <p className="text-xs font-[300] mt-[2px] pl-2">(optional)</p>
              </label>
              <Field
                name="address2"
                component="input"
                type="text"
                placeholder="Enter your Address 2"
                
                className="border rounded w-full lg:w-[560px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500 text-xs italic">
                <Field
                  name="address1"
                  subscription={{ touched: true, error: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                  }
                </Field>
              </p>
            </div>

            </div>
          

            {/* Country, State, City, Pincode */}
            <div className="grid pl-6 pr-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select City</option>
                  {cities.map((city: any) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </Field>
              </div>

              {/* Pincode input */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="pincode"
                >
                  Pincode
                </label>
                <Field
                  name="pincode"
                  component="input"
                  type="text"
                  placeholder="Enter Pincode "
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500 text-xs italic">
                  <Field
                    name="pincode"
                    subscription={{ touched: true, error: true }}
                  >
                    {({ meta: { touched, error } }) =>
                      touched && error ? <span>{error}</span> : null
                    }
                  </Field>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between ">
              {/* Back Button */}
              <div className=" absolute bottom-16 left-10">
                <button
                  onClick={backButtonClicked}
                  type="submit"
                  className="btn btn-outline"
                >
                  Back
                </button>
              </div>

              {/* Submit Button */}
              <div className=" absolute bottom-16 right-10">
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
    </div>
  );
};

export default SecondFormPage;
