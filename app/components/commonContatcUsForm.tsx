"use client";

import InputField from "@/app/components/common/inputField";
import { PHONE_NUMBER_FORMATE } from "@/app/utils/constants/numberFormate.constants";
import { formateAndVerifyPhoneNumber, verifyPhoneNumberLength } from "@/app/utils/helpers/helper";
import { FormErrors, FormValues, IpInfoLiteResponse } from "@/app/utils/interface/common.interface";
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";

const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "IN",
  phoneNumber: "",
  message: "",
};

const IP_INFO_LITE_URL = "https://api.ipinfo.io/lite/me?token=13cd1dabec5b5b";

const getSupportedCountryCode = (countryCode?: string) => {
  if (!countryCode) return null;

  const normalizedCountryCode = countryCode.toUpperCase();

  return PHONE_NUMBER_FORMATE[normalizedCountryCode] ? normalizedCountryCode : null;
};

const getVisitorCountryCode = async () => {
  return await fetch(IP_INFO_LITE_URL)
    .then((response) => {
      if (!response.ok) return null;

      return response.json() as Promise<IpInfoLiteResponse>;
    })
    .then((data) => {
      return getSupportedCountryCode(data?.country_code);
    })
    .catch(() => null);
};

const validateForm = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.country) errors.country = "Country is required.";
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Contact number is required.";
  } else if (!verifyPhoneNumberLength(values.phoneNumber, values.country)) {
    errors.phoneNumber = "Enter a valid contact number for the selected country.";
  }
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
};

function CommonContactUsForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const hasUserSelectedCountry = useRef(false);

  const countryOptions = useMemo(() => {
    const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

    return Object.keys(PHONE_NUMBER_FORMATE)
      .map((countryCode) => ({
        label: displayNames.of(countryCode) ?? countryCode,
        value: countryCode,
      }))
      .sort((firstCountry, secondCountry) => firstCountry.label.localeCompare(secondCountry.label));
  }, []);

  useEffect(() => {
    let isMounted = true;

    getVisitorCountryCode().then((countryCode) => {
      if (!isMounted || !countryCode || hasUserSelectedCountry.current) return;

      setFormValues((currentValues) => {
        if (currentValues.country === countryCode) return currentValues;

        const nextValues = {
          ...currentValues,
          country: countryCode,
          phoneNumber: formateAndVerifyPhoneNumber(currentValues.phoneNumber, countryCode),
        };

        if (hasSubmitted) {
          setFormErrors(validateForm(nextValues));
        }

        return nextValues;
      });
    });

    return () => {
      isMounted = false;
    };
  }, [hasSubmitted]);

  const updateFormValue = (name: keyof FormValues, value: string) => {
    if (name === "country") {
      hasUserSelectedCountry.current = true;
    }

    setFormValues((currentValues) => {
      const nextValues = { ...currentValues, [name]: value };

      if (name === "country") {
        nextValues.phoneNumber = formateAndVerifyPhoneNumber(currentValues.phoneNumber, value);
      }

      if (name === "phoneNumber") {
        nextValues.phoneNumber = formateAndVerifyPhoneNumber(value, currentValues.country);
      }

      if (hasSubmitted) {
        setFormErrors(validateForm(nextValues));
      }

      return nextValues;
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    updateFormValue(name as keyof FormValues, value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length) return;
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          className="text-black-color"
          placeholder="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
          error={formErrors.firstName}
        />
        <InputField
          className="text-black-color"
          placeholder="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
          error={formErrors.lastName}
        />
      </div>

      <InputField
        type="email"
        className="text-black-color"
        placeholder="Email Address"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        error={formErrors.email}
      />

      <InputField
        className="text-black-color"
        type="select"
        placeholder="Country"
        name="country"
        value={formValues.country}
        options={countryOptions}
        onChange={(event) => updateFormValue("country", event.target.value)}
        error={formErrors.country}
      />

      <InputField
        className="text-black-color"
        type="tel"
        placeholder="Contact Number"
        name="phoneNumber"
        value={formValues.phoneNumber}
        onChange={handleInputChange}
        error={formErrors.phoneNumber}
      />

      <InputField
        className="text-black-color"
        type="textarea"
        placeholder="Type your message here..."
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        error={formErrors.message}
      />

      <div className="mt-2 relative">
        <label
          htmlFor="uploadFile"
          className="w-full rounded-xl bg-gray-50 border border-gray-100 p-6 flex flex-col items-start justify-start text-center cursor-pointer hover:bg-gray-100 transition-colors border-dashed">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-gray-400 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
            </svg>
            <span className="text-gray-600 font-medium font-inter">Attach a file</span>
          </div>
          <span className="text-xs text-gray-400 italic text-start">
            Supported files: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
          </span>
        </label>
        <input
          id="uploadFile"
          className="hidden"
          type="file"
          accept=".pdf,.doc,.docx,.odt,.ods,.ppt,.pptx,.xls,.xlsx,.rtf,.txt"
        />
      </div>

      <button
        type="submit"
        className="w-full min-h-11.25 rounded-full bg-(--root-black-color) text-(--root-white-color) font-bold font-instrument-sans text-sm md:text-base lg:text-lg px-5 sm:px-8 py-3 transition-transform duration-300 relative overflow-hidden border border-(--root-black-color) group cursor-pointer">
        <span className="w-full h-full flex items-center justify-center relative z-10 group-hover:text-(--root-black-color)">
          Start a Conversation
        </span>
        <span className="absolute top-0 left-0 w-full h-full bg-(--root-black-color)"></span>
        <span className="absolute top-0 left-0 w-[110%] h-[110%] bg-(--root-white-color) scale-y-0 group-hover:scale-y-100 transition-all origin-bottom"></span>
      </button>
    </form>
  );
}

export default CommonContactUsForm;
