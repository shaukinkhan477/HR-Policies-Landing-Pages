import React, { useState } from "react";
import TableOfContents from "./TableOfContents";
import Disclaimer from "./Disclaimer";
import { label } from "framer-motion/client";
import { Link } from "react-router-dom";

const policies = [
  {
    nav: "/confidentiality",
    title: "Confidentiality Policy",
    content: [
      { id: "section1", label: "About Confidentiality" },
      { id: "section2", label: "Why We Have a Confidentiality Policy" },
      { id: "section3", label: "Our Confidentiality Policy" },
      { id: "section4", label: "Employee Responsibilities" },
      { id: "section5", label: "Safeguarding Confidential Information" },
      { id: "section6", label: "Reporting and Incident Management" },
      { id: "section7", label: "Post-Employment Obligations" },
      { id: "section8", label: "Training and Awareness" },
      { id: "section9", label: "Frequentily Asked Question" },
    ],
  },
  {
    nav: "/",
    title: "Exit Process",
    content: [
      { id: "section11", label: "What is an Employee Exit Process?" },
      {
        id: "section12",
        label: "Why Does Your Company Need an Employee Exit Process?",
      },
      { id: "section13", label: "Employee Offboarding Process" },
      { id: "section14", label: "Steps in the Employee Exit Process" },
    ],
  },
  {
    nav: "/",
    title: "Performance Expectations",
    content: [],
  },
  {
    nav: "/communication",
    title: "Communication Standards",
    content: [
      { id: "section21", label: "communication standards" },
      { id: "section22", label: "Communication Channels" },
      { id: "section23", label: "Effective Communication" },
      { id: "section24", label: "Communication Etiquette" },
      { id: "section25", label: "Meetings and Presentations" },
      { id: "section26", label: "Digital Communication" },
      { id: "section27", label: "Social Media Policy" },
      { id: "section28", label: "Conflict Resolution" },
      { id: "section29", label: "Resources and Support" },
      { id: "section291", label: "Contact Information" },
      { id: "section292", label: "Feedback" },
    ],
  },
  {
    nav: "/",
    title: "Payroll Processing and Related Details",
    content: [],
  },
  {
    nav: "/",
    title: "Leave Policy",
    content: [],
  },
  {
    nav: "/",
    title: "Anti-Harassment Policy",
    content: [],
  },
];

const HRPolicy = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex flex-col w-3/12">
      <div className=" ml-9 mt-7 bg-[#F3F3F3] shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 font-sans">
          HR Policy
        </h1>
        <ul className="space-y-2">
          {policies.map((policy, index) => (
            <li key={index}>
              <div
                className="cursor-pointer flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100 p-2 rounded"
                onClick={() => toggleDropdown(index)}
              >
                <Link to={`${policy.nav}`}>
                  <span className="text-[18px] hover:font-bold font-sans">
                    {policy.title}
                  </span>
                </Link>
              </div>
              {openDropdown === index && policy.content.length > 0 && (
                <ul className="bg-green-100 p-3 rounded mt-2 space-y-1">
                  {policy.content.map((item) => (
                    <TableOfContents
                      key={item.id}
                      items={item.label}
                      id={item.id}
                    />
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Disclaimer />
    </div>
  );
};

export default HRPolicy;
