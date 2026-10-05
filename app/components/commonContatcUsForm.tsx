"use client";

import ContactFormSuccessModal from "@/app/components/common/contactFormSuccessModal";
import InputField from "@/app/components/common/inputField";
import { PHONE_NUMBER_FORMATE } from "@/app/utils/constants/numberFormate.constants";
import { GetTurnstileToken, RemoveTurnstileWidget, SubmitClientInquiry } from "@/app/utils/helpers/clientInquiry";
import { formateAndVerifyPhoneNumber, verifyPhoneNumberLength } from "@/app/utils/helpers/helper";
import { FormErrors, FormValues, IpInfoLiteResponse } from "@/app/utils/interface/common.interface";
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";

const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "IN",
  phoneNumber: "",
  attachment: null,
  message: "",
};

const IP_INFO_LITE_URL = process.env.NEXT_PUBLIC_IP_INFO_LITE_URL;
const CLIENT_INQUIRY_FORM_ID = process.env.NEXT_PUBLIC_CLIENT_INQUIRY_FORM_ID;

if (!IP_INFO_LITE_URL) throw new Error("IP_INFO_LITE_URL is not defined in the environment variables.");
if (!CLIENT_INQUIRY_FORM_ID) throw new Error("CLIENT_INQUIRY_FORM_ID is not defined in the environment variables.");

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

const getCountryName = (countryCode: string) => {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) ?? countryCode;
  } catch {
    return countryCode;
  }
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
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const hasUserSelectedCountry = useRef(false);
  const hasSubmittedRef = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

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

        if (hasSubmittedRef.current) {
          setFormErrors(validateForm(nextValues));
        }

        return nextValues;
      });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    hasSubmittedRef.current = hasSubmitted;
  }, [hasSubmitted]);

  useEffect(() => {
    return () => RemoveTurnstileWidget(turnstileWidgetIdRef);
  }, []);

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

  const updateAttachment = (file: File | null) => {
    setFormValues((currentValues) => {
      const nextValues = { ...currentValues, attachment: file };

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

  const submitClientInquiry = async (turnstileToken: string) => {
    const payload = new FormData();
    payload.append("first_name", formValues.firstName.trim());
    payload.append("last_name", formValues.lastName.trim());
    payload.append("email", formValues.email.trim());
    payload.append("contact_number", formValues.phoneNumber);
    payload.append("country_name", getCountryName(formValues.country));
    payload.append("message", formValues.message.trim());
    if (formValues.attachment) {
      payload.append("attachment", formValues.attachment);
    } else {
      payload.append("attachment", new File([], "", { type: "application/octet-stream" }));
    }

    await SubmitClientInquiry(CLIENT_INQUIRY_FORM_ID, payload, turnstileToken);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);
    setSubmitState("idle");
    setSubmitMessage("");

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length) return;

    setSubmitState("submitting");

    try {
      const turnstileToken = await GetTurnstileToken(turnstileContainerRef.current, turnstileWidgetIdRef);
      await submitClientInquiry(turnstileToken);

      setFormValues(initialFormValues);
      setFormErrors({});
      setHasSubmitted(false);
      setSubmitState("success");
      setSubmitMessage("Your message has been submitted successfully.");
      setIsSuccessModalOpen(true);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      RemoveTurnstileWidget(turnstileWidgetIdRef);
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setSubmitState("idle");
  };

  return (
    <>
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
              <span className="text-xs font-inter text-(--text-secondary-color)">(optional)</span>
            </div>
            <span className="text-xs text-gray-400 italic text-start">
              Supported files: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
            </span>
          </label>
          <input
            ref={fileInputRef}
            id="uploadFile"
            className="hidden"
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.odt,.ods,.ppt,.pptx,.xls,.xlsx,.rtf,.txt"
            onChange={(event) => updateAttachment(event.target.files?.[0] ?? null)}
          />
          {formValues.attachment && (
            <p className="mt-2 text-xs font-inter text-(--text-secondary-color)">{formValues.attachment.name}</p>
          )}
        </div>

        <div ref={turnstileContainerRef} className="hidden" />

        {submitState === "error" && submitMessage && <p className="text-sm font-inter text-red-500">{submitMessage}</p>}

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="w-full min-h-11.25 rounded-full bg-(--root-black-color) text-(--root-white-color) font-bold font-instrument-sans text-sm md:text-base lg:text-lg px-5 sm:px-8 py-3 transition-transform duration-300 relative overflow-hidden border border-(--root-black-color) group cursor-pointer">
          <span className="w-full h-full flex items-center justify-center relative z-10 group-hover:text-(--root-black-color)">
            {submitState === "submitting" ? "Submitting..." : "Start a Conversation"}
          </span>
          <span className="absolute top-0 left-0 w-full h-full bg-(--root-black-color)"></span>
          <span className="absolute top-0 left-0 w-[110%] h-[110%] bg-(--root-white-color) scale-y-0 group-hover:scale-y-100 transition-all origin-bottom"></span>
        </button>
      </form>

      <ContactFormSuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseSuccessModal} />
    </>
  );
}

export default CommonContactUsForm;
