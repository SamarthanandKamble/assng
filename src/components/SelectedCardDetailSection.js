import React from "react";

const SelectedCardDetailSection = ({ text }) => {
  return (
    <div className=" flex items-center">
      <span className="my-auto align-middle text-[#3B4043] text-[21px] font-semibold leading-[51px]">
        {text}
      </span>
    </div>
  );
};

export default SelectedCardDetailSection;
