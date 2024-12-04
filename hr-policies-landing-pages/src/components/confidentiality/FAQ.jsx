import React, { useState } from "react";
import FaqList from "./FaqList";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a confidentiality policy?",
      answer:
        "A confidentiality policy is a set of guidelines that outline how sensitive and private information is handled, shared, and protected within an organization.",
    },
    {
      question: "What are the key benefits of a property legal title check?",
      answer:
        "A property legal title check ensures that the property has a clear and transferable ownership, protecting buyers from potential legal disputes or claims. It confirms the seller's right to sell and identifies any encumbrances or issues affecting the property's title.",
    },
    {
      question: "Why is a confidentiality policy important?",
      answer:
        "It ensures the protection of sensitive data, builds trust with employees, clients, and partners, and complies with legal and regulatory requirements.",
    },
    {
      question:
        "What type of information is considered confidential in the workplace?",
      answer:
        "Examples include employee records, financial data, business strategies, customer information, trade secrets, and intellectual property",
    },
    {
      question:
        "What are my responsibilities under the confidentiality policy?",
      answer:
        "Employees are expected to safeguard confidential information, avoid unauthorized sharing, and report breaches promptly.",
    },
  ];

  return (
    <div id="section9" className=" p-8">
      <div className="space-y-4  mb-5 rounded-lg shadow-md bg-gray-100 max-w-4xl mx-auto">
        <h1 className="text-[18px] font-semibold text-[#0A0909] py-3 px-4  font-sans">
          FAQs About Employee Exit Process
        </h1>
      </div>

      <div className="space-y-4 px-7 py-9 rounded-lg shadow-md bg-gray-100 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqList
            key={index}
            index={index}
            faq={faq.answer}
            faqQ={faq.question}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
