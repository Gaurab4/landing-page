import React from "react";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  currentStep: number;
  
};


interface FormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
}

interface form2Values {
  address1?:string;
  pincode?:string;
  country?:string;
  state?:string;
  city?:string;
}


const ConfirmationFormPage = (props: Props) => {
  const { handleNextStep,handlePrevStep, currentStep, } = props;

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
  const getSecondFormLocalStorage = ():form2Values =>{
    let SecondFormData;
    if (typeof window !== 'undefined') {
      SecondFormData = localStorage.getItem("form2Values");
      }else {
        // Handle the case where localStorage is not available
        console.error("localStorage is not available");
      }
      return SecondFormData ? JSON.parse(SecondFormData) : {};
  }


  const initialValues: FormValues = getFormDataFromLocalStorage();
  const secondFormValues = getSecondFormLocalStorage();
  

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear formValues and form2Values from localStorage
    localStorage.removeItem("formValues");
    localStorage.removeItem("form2Values");
    handleNextStep();

  };

  const backButtonClicked = () => {
    handlePrevStep();
  };

  return (
    <div className="w-full lg:w-[1300px] lg:h-[647px] h-[1168px] relative">
      <form onSubmit={onSubmit} className="bg-white h-[95%] rounded-2xl">
        {/* Form Title */}
        <div className="pl-6 pt-4 font-semibold">Comfirmation Page</div>

        {/* Slider Component for Form 2 */}
        <div className="w-[90%] rounded-lg bg-[#6b3bd0] h-1 relative mx-auto my-4">
          <div  className="absolute rounded-lg top-0 bg-[#6b3bd0] h-1 transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep -1) / 2) * 100}%` }}
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

        {/* Personal Info Text */}
        <div className="pl-6 pt-4 pb-8 font-normal text-lg">
          <p>Confirm Your Personal Details</p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6 pr-6">
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
              First Name
            </label>
            <p className="border p-2 w-60 rounded-lg border-lime-600">{initialValues.firstName}</p>
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <p className="border p-2 w-60 rounded-lg border-lime-600">{initialValues.lastName}</p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <p className="border p-2 w-60 rounded-lg border-lime-600">{initialValues.email}</p>
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <p className="border p-2 w-60 rounded-lg border-lime-600">{initialValues.dob}</p>
          </div>

          {/* Address  */}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="address">
              Address
            </label>
            <p className="border p-2 w-60 rounded-lg border-lime-600">{secondFormValues.address1}</p>
          </div>
          
          {/* Country  */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="country">
              Country
            </label>
            <p className="border p-2 w-56 rounded-lg border-lime-600">{secondFormValues.country}</p>
          </div>

          {/* State  */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="state">
              State
            </label>
            <p className="border p-2 w-56 rounded-lg border-lime-600">{secondFormValues.state}</p>
          </div>


          {/* City  */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="city">
              City
            </label>
            <p className="border p-2 w-56 rounded-lg border-lime-600">{secondFormValues.city}</p>
          </div>

          {/* Pincode  */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="pincode">
              Pincode
            </label>
            <p className="border p-2 w-60 rounded-lg border-lime-600">{secondFormValues.pincode}</p>
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
    </div>
  );
};

export default ConfirmationFormPage;
