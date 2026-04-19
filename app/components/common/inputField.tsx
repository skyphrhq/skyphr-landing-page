/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputType = "text" | "email" | "tel" | "textarea" | "select";

interface InputFieldProps {
  type?: InputType;
  placeholder?: string;
  className?: string;
  options?: { label: string; value: string }[];
  isTelWithCode?: boolean; // specialized for the +91 layout if needed
}

export const InputField: React.FC<
  InputFieldProps & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ type = "text", placeholder, className = "", options = [], isTelWithCode = false, ...props }) => {
  const baseClasses =
    "w-full border-b border-gray-200 outline-none py-3 text-base text-(--text-main-color) bg-transparent placeholder-(--placeholder-color) focus:border-gray-500 transition-colors font-medium font-inter";

  if (type === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        className={`${baseClasses} min-h-[100px] resize-none ${className}`}
        {...(props as any)}
      />
    );
  }

  if (type === "select") {
    return (
      <select className={`${baseClasses} appearance-none cursor-pointer ${className}`} {...(props as any)}>
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  if (isTelWithCode) {
    return (
      <div className={`flex items-center border-b border-gray-200 ${className}`}>
        <select className="appearance-none bg-transparent py-3 pr-2 outline-none text-sm cursor-pointer border-none text-(--text-main-color)">
          <option value="+91">+91</option>
          <option value="+1">+1</option>
        </select>
        <svg className="w-3 h-3 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <input
          type="tel"
          placeholder={placeholder}
          className="flex-1 outline-none py-3 text-base text-(--text-main-color) bg-transparent placeholder-(--placeholder-color) font-inter font-medium resize-none"
          {...(props as any)}
        />
      </div>
    );
  }

  return <input type={type} placeholder={placeholder} className={`${baseClasses} ${className}`} {...(props as any)} />;
};

export default InputField;
