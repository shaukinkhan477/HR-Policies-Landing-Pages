import React, { useState } from "react";

const FaqList = ({ faq, index, faqQ }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      key={index}
      className={` bg-white ${
        openIndex === index ? "border border-green-500" : ""
      } rounded-lg shadow-md`}
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 font-medium"
      >
        <span className="text-[16px] text-[#170F49] font-sans">{faqQ}</span>
        <div className="bg-[#238F23] rounded-full shadow-md">
          <svg
            className={`w-5 h-5 p-1 text-white transform ${
              openIndex === index ? "rotate-180" : "rotate-0"
            } transition-transform`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {openIndex === index && faq && (
        <div className="px-4 py-3  ">
          <span className="font-sans text-sm text-[#808191]">{faq}</span>
        </div>
      )}
    </div>
  );
};

export default FaqList;
