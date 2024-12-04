import React from "react";
import Section from "./Section";

const ContentsContainer = () => {
  const info = [
    {
      id: "section1",
      title: "About Confidentiality",
      data1:
        "a. Confidential information includes any non-public or proprietary data, documents, trade secrets, business plans, financial information, customer lists, software, technical specifications, employee records, or any other information that is not publicly disclosed.",
    },
    {
      id: "section2",
      title: "Why We Have a Confidentiality Policy",
      data1:
        "A confidentiality policy ensures the protection of sensitive information, fosters trust among employees and stakeholders, and safeguards the organization's competitive advantage. It establishes clear guidelines for handling data, minimizes risks of breaches, and promotes compliance with legal and ethical standards, thereby securing the organization’s reputation and integrity.",
    },
    {
      id: "section3",
      title: "Our Confidentiality Policy",

      data1:
        "At Reecocefe, we are committed to protecting sensitive information, whether it pertains to our employees, clients, partners, or operations. This policy ensures that all confidential data is handled responsibly, safeguarded from unauthorized access, and used only for its intended purpose. Adherence to this policy helps maintain trust, comply with legal requirements, and uphold the integrity and reputation of our organization. Breaches of confidentiality will be taken seriously and addressed in accordance with organizational guidelines and applicable laws.",
    },
    // {
    //   id: "section4",
    //   title: "Employee Responsibilities",
    //   subTitle: "1. Duty of Confidentiality:",
    //   datas: {
    //     info: "a. Employees must safeguard the company’s and clients’ confidential information during and after their employment.",
    //     info1:
    //       "b. This duty applies to all forms of communication and data, including verbal discussions, written documents, emails, and electronic files.",
    //   },
    //   subTitle1: "2. Non-Disclosure Agreement (NDA):",
    //   dummyData: {
    //     ans: "a. Employees may be required to sign an NDA upon joining, confirming their understanding of confidentiality expectations.",
    //     ans1: "b. The NDA outlines the responsibility to maintain confidentiality and details the consequences of any breaches.",
    //   },
    // },
    {
      id: "section4",
      title: "Employee Responsibilities",
      data1:
        "a. Employees must safeguard the company’s and clients’ confidential information during and after their employment. ",
      data2:
        "b. This duty applies to all forms of communication and data, including verbal discussions, written documents, emails, and electronic files.",
    },
    {
      id: "section5",
      title: "Safeguarding Confidential Information",
      data1:
        "a. Employees must take appropriate measures to safeguard confidential information, including password protection, secure storage, limited access, and adherence to data security protocols. ",
      data2:
        "b. Physical documents and electronic devices containing confidential information should be properly secured when not in use.",
    },
    {
      id: "section6",
      title: "Reporting and Incident Management",
      data1:
        "a. Employees must promptly report any suspected or actual breaches of confidentiality to their supervisor, manager, or the designated point of contact within the company.",
      data2:
        "b. In the event of a breach, employees should cooperate fully in investigations, corrective actions, and any required remediation efforts.",
    },
    {
      id: "section7",
      title: "Post-Employment Obligations",
      data1:
        "Confidentiality obligations continue even after the termination of employment. Former employees must refrain from disclosing or using any confidential information obtained during their employment.",
    },
    {
      id: "section8",
      title: "Consequences of Violations",
      data1:
        "Violation of this confidentiality policy may result in disciplinary actions, up to and including termination of employment, and may also lead to legal consequences if applicable laws are violated.",
    },
  ];
  return (
    <main className="w-full lg:w-9/12 mt-11 mr-11">
      {info.map((data) => (
        <Section
          id={data.id}
          title={data?.title}
          subTitle={data?.subTitle}
          subTitle1={data?.subTitle1}
          data={data?.dummyData?.ans}
          data3={data?.dummyData?.ans1}
        >
          {data?.data1} <br /> {data?.data2} {data?.datas?.info} <br />
          {data?.datas?.info1}
        </Section>
      ))}
    </main>
  );
};

export default ContentsContainer;
