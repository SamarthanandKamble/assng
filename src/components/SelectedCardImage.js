import React from "react";
import { useSelector } from "react-redux";
const SelectedCardImage = () => {
  const card = useSelector((state) => state.selectedCard?.selectedCard);
  return (
    card && (
      <div className="absolute top-[114.32px] sm:left-[31.99px] w-full p-4 sm:p-0">
        <img
          src={`${card?.largeImageURL}`}
          alt={`${card?.name}`}
          className="sm:w-[832.11px] h-[350px] sm:h-[555.34px] mx-auto sm:mx-0 rounded-[7.11px]"
        />
      </div>
    )
  );
};

export default SelectedCardImage;
