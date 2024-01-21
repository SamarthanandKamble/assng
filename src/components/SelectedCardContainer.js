import React from "react";
import { useSelector } from "react-redux";
import SelectedCardHeader from "./SelectedCardHeader";
import SelectedCardHeroSection from "./SelectedCardHeroSection";
import CardTag from "./CardTag";
const SelectedCardContainer = () => {
  const selectedCard = useSelector((state) => state.selectedCard?.selectedCard);
  const selectedCardFlag = useSelector(
    (state) => state.selectedCard?.selectedCardFlag
  );

  return (
    selectedCardFlag && (
      <div className="absolute sm:w-[1217.32px] w-[47rem] h-[773.26px] top-[196.37px] flex flex-col bg-white rounded-lg sm:transform sm:left-[50%] sm:translate-x-[-50%]">
        <SelectedCardHeader />
        <SelectedCardHeroSection />
        <div className="absolute top-[714.84px] sm:left-[31.12px] left-[25rem]">
          <span className="w-[51.54px] h-[21.33px] font-bold text-[17.77px] text-[#3B4043]">
            Tags:
          </span>
          {selectedCard?.tags.split(",").map((tag) => (
            <CardTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    )
  );
};

export default SelectedCardContainer;
