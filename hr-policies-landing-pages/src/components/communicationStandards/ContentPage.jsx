import React from "react";
import Section from "../confidentiality/Section";

const ContentPage = () => {
  const info = [
    {
      id: "section21",
      title: "What is Communication Standards.",
      data1:
        "Communication standards refer to the agreed-upon norms, protocols, or frameworks that ensure consistency, interoperability, and reliability in the transmission of information across devices, systems, or organizations. These standards are critical in enabling seamless communication, whether it is through electronic devices, software applications, or between individuals and entities.",
    },
    {
      id: "section22",
      title: "Enforcing Communication Standards.",
      data1:
        "Enforcing communication standards involves ensuring that organizations, devices, systems, or individuals adhere to established norms and protocols for effective and reliable communication. This enforcement is crucial to maintaining interoperability, security, and consistency across various domains.",
    },
    {
      id: "section23",
      title: "Golden Rules for Effective Workplace Communication",

      data1:
        "Effective workplace communication is critical for fostering collaboration, boosting productivity, and maintaining a positive work environment. Here are some golden rules to ensure clear and impactful communication:",
    },

    {
      id: "section24",
      title: "Meetings and Presentations",
      data1: "a. Preparation: Share agends and materials in advance.",
      data2:
        "b. Conduct: This duty applies to all forms of communication and data, including verbal discussions, written documents, emails, and electronic files.",
    },
    {
      id: "section25",
      title: "Digital Communication Guidelines",
      data1:
        "a. Email Protocols: Employees must take appropriate measures to safeguard confidential information, including password protection, secure storage, limited access, and adherence to data security protocols. ",
      data2:
        "b. Instant Messaging: Physical documents and electronic devices containing confidential information should be properly secured when not in use.",
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
          {data?.data1} <br /> {data?.data2} <br />
        </Section>
      ))}
    </main>
  );
};

export default ContentPage;