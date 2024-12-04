import React from "react";

const Section = ({ id, title, children, subTitle, subTitle1, data, data3 }) => {
  return (
    <section id={id} className=" space-y-1">
      {title && (
        <h2 className="text-lg font-semibold  font-sans text-lg">{title}</h2>
      )}
      {/* <TableContent subTitle={subTitle} /> */}
      <p className="text-gray-900 font-sans text-base ">{children}</p>

      {/* <TableContent subTitle1={subTitle1} /> */}
      <p className="text-gray-900 font-sans ">
        {data} <br /> {data3}
      </p>
    </section>
  );
};

export default Section;
