import CtaServiceButton from "@/app/components/common/ctaServiceBtn";
import InputField from "@/app/components/common/inputField";
function CommonContactUsForm() {
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField className="text-black-color" placeholder="First Name" />
        <InputField className="text-black-color" placeholder="Last Name" />
      </div>

      <InputField type="email" className="text-black-color" placeholder="Email Address" />

      <InputField
        className="text-black-color"
        type="select"
        placeholder="India"
        options={[
          { label: "India", value: "in" },
          { label: "United States", value: "us" },
          { label: "Canada", value: "ca" },
        ]}
      />

      <InputField className="text-black-color" isTelWithCode={true} placeholder="Contact Number" />

      <InputField className="text-black-color" type="textarea" placeholder="Type your message here..." />

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
          <span className="text-xs text-gray-400 italic">
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

      <CtaServiceButton
        label="Start a Conversation"
        href=""
        showArrow={false}
        theme="black"
        className="w-full text-center"
      />
    </form>
  );
}

export default CommonContactUsForm;
