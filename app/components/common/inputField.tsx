"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState, useRef, useEffect } from "react";

type InputType = "text" | "email" | "tel" | "textarea" | "select";

interface InputFieldProps {
  type?: InputType;
  placeholder?: string;
  className?: string;
  options?: { label: string; value: string }[];
  isTelWithCode?: boolean;
  error?: string;
}

export const InputField: React.FC<
  InputFieldProps & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ type = "text", placeholder, className = "", options = [], isTelWithCode = false, error, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentValue = typeof props.value === "string" ? props.value : selectedValue;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseClasses =
    "w-full border-b border-gray-200 outline-none py-3 text-base text-white-color bg-transparent placeholder-(--placeholder-color) focus:border-gray-500 transition-colors font-medium font-inter";

  if (type === "textarea") {
    return (
      <div>
        <textarea
          placeholder={placeholder}
          className={`${baseClasses} min-h-[100px] resize-none ${className} ${error ? "border-red-500" : ""}`}
          {...(props as any)}
        />
        {error && <p className="mt-1 text-xs font-inter text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === "select") {
    const selectedOption = options.find((opt) => opt.value === currentValue);

    return (
      <div>
        <div className="relative w-full" ref={dropdownRef}>
          <button
            type="button"
            className={`${baseClasses} cursor-pointer flex justify-between items-center text-left ${className} ${!currentValue ? "text-(--placeholder-color)" : ""} ${error ? "border-red-500" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedOption ? selectedOption.label : placeholder}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} text-gray-500`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div
              data-lenis-prevent
              data-lenis-prevent-touch
              data-lenis-prevent-wheel
              className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg max-h-60 overflow-y-auto overscroll-contain"
            >
              <div className="py-1">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer hover:bg-gray-50 transition-colors text-black-color font-medium font-inter ${currentValue === opt.value ? "bg-gray-50" : ""}`}
                    onClick={() => {
                      setSelectedValue(opt.value);
                      setIsOpen(false);
                      if (props.onChange) {
                        const event = {
                          target: { name: props.name, value: opt.value },
                        } as any;
                        props.onChange(event);
                      }
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-xs font-inter text-red-500">{error}</p>}
      </div>
    );
  }

  if (isTelWithCode) {
    return <PhoneInputField {...props} placeholder={placeholder} className={className} />;
  }

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`${baseClasses} ${className} ${error ? "border-red-500" : ""}`}
        {...(props as any)}
      />
      {error && <p className="mt-1 text-xs font-inter text-red-500">{error}</p>}
    </div>
  );
};

const PhoneInputField = ({ placeholder, className, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+91");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const codeOptions = [
    { label: "+91", value: "+91" },
    { label: "+1", value: "+1" },
    { label: "+44", value: "+44" },
    { label: "+61", value: "+61" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`flex items-center border-b border-gray-200 ${className}`}>
      <div className="relative flex-shrink-0" ref={dropdownRef}>
        <div
          className="flex items-center bg-transparent py-3 pr-2 outline-none text-sm cursor-pointer border-none text-(--text-main-color)"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedCode}</span>
          <svg
            className={`w-3 h-3 text-gray-500 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {isOpen && (
          <div
            data-lenis-prevent
            data-lenis-prevent-touch
            data-lenis-prevent-wheel
            className="absolute z-10 top-full left-0 mt-1 w-24 bg-white border border-gray-100 rounded-xl shadow-lg max-h-48 overflow-y-auto overscroll-contain"
          >
            <div className="py-1">
              {codeOptions.map((opt, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors text-black-color font-medium font-inter ${selectedCode === opt.value ? "bg-gray-50" : ""}`}
                  onClick={() => {
                    setSelectedCode(opt.value);
                    setIsOpen(false);
                  }}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        type="tel"
        placeholder={placeholder}
        className="flex-1 outline-none py-3 text-base text-(--text-main-color) bg-transparent placeholder-(--placeholder-color) font-inter font-medium resize-none"
        {...(props as any)}
      />
    </div>
  );
};

export default InputField;
