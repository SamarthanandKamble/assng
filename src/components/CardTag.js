import React from "react";

const CardTag = ({ tag }) => {
  return (
    <>
      <span className="bg-[#F5F5F5] mx-1 px-2 py-1 " key={tag}>
        {tag}
      </span>
    </>
  );
};

export default CardTag;
