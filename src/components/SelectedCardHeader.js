import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSelectedCard } from "../utils/Redux/selectedCardSlice";
const SelectedCardHeader = () => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.selectedCard?.selectedCard);
  const closeHeader = () => {
    dispatch(closeSelectedCard());
  };
  return (
    <div className="flex sm:w-[1217.32px] w-[47rem] h-[76.42px] top-[196.37px] sm:left-[31.1px]  items-center bg-[#F5F5F5] rounded-lg">
      <div className="flex w-[176px] absolute h-[52px] top-[14.22px] left-[31.99px]  items-center">
        <span className="text-[#3B4043] font-semibold">Preview ID:</span>
        <span className="text-[#3B4043] font-semibold">{selectedCard?.id}</span>
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/selectedCardPopUpClose.svg"}
          alt="close-icon"
          className="absolute w-[29.63px] h-[29.63px] top-[24.96px] left-[42rem] sm:left-[1152.22px] rounded-[2.22px] cursor-pointer"
          onClick={() => closeHeader()}
        />
      </div>
    </div>
  );
};

export default SelectedCardHeader;
