import React from "react";

const TableOfContents = ({ items, id }) => {
  return (
    <div className="mx-2 rounded-lg">
      <p className="cursor-pointer py-1 hover:font-semibold font-sans ">
        <a href={`#${id}`}> {items}</a>
      </p>
    </div>
  );
};

export default TableOfContents;
