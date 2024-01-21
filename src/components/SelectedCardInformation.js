import React from "react";
import SelectedCardDetailSection from "./SelectedCardDetailSection";
import { useSelector } from "react-redux";

const SelectedCardInformation = () => {
  const selectedCard = useSelector((state) => state.selectedCard?.selectedCard);

  return (
    <>
      <div className="absolute w-[103px] h-[52px] sm:top-[409.66px] top-[30rem] sm:left-[904.55px] left-[25rem]">
        <SelectedCardDetailSection text={"Information"} />
      </div>
      <div className="absolute w-[275.45px] sm:top-[469.16px] top-[33rem] sm:left-[904.55px] left-[25rem] flex flex-wrap justify-between pr-9 content-center">
        <div className="flex flex-col mb-3 w-[60px] h-[47.1px] ">
          <span className="w-[27px] h-[24px] font-semibold text-[12.44px] text-[#717579]">
            User
          </span>
          <span className="w-[60px] h-[24px] font-semibold text-[15.99px] text-[#3B4043]">
            {selectedCard?.user}
          </span>
        </div>
        <div className="flex flex-col w-[65px] h-[47.1px] ">
          <span className="w-[42px] h-[24px] font-semibold text-[12.44px] text-[#717579]">
            User ID
          </span>
          <span className="w-[46px] h-[24px] font-semibold text-[15.99px] text-[#3B4043]">
            {selectedCard?.user_id}
          </span>
        </div>
        <div className="flex flex-col w-[66px] h-[47.1px]">
          <span className="w-[29px] h-[24px] font-semibold text-[12.44px] text-[#717579]">
            Type
          </span>
          <span className="w-[45px] h-[24px] font-semibold text-[15.44px] text-[#3B4043]">
            {selectedCard?.type}
          </span>
        </div>
        <div className="flex flex-col w-[60px] h-[47.1px]">
          <span className=" text-[#717579] w-[29px] h-[24px] font-semibold text-[12.44px]">
            Views
          </span>
          <span className=" text-[#3B4043] w-[45px] h-[24px] font-semibold text-[15.99px]">
            {selectedCard?.views}
          </span>
        </div>
        <div className="flex flex-col w-[60px] h-[47.1px]">
          <span className="w-[66px] h-[24px] font-semibold text-[12.44px] text-[#717579]">
            Downloads
          </span>
          <span className="w-[43px] h-[23px] font-semibold text-[15.99px] text-[#3B4043]">
            {selectedCard?.downloads}
          </span>
        </div>
        <div className="flex flex-col w-[60px] h-[47.1px]">
          <span className="w-[30px] h-[24px] font-semibold text-[#717579] text-[12.44px]">
            likes
          </span>
          <span className="w-[29px] h-[24px] font-semibold text-[15.99px] text-[#3B4043]">
            {selectedCard?.likes}
          </span>
        </div>
      </div>
    </>
  );
};

export default SelectedCardInformation;
