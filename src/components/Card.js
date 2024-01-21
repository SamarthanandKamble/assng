import React from "react";
import CardTag from "./CardTag";

import { useDispatch } from "react-redux";
import {
  openSelectedCard,
  updateSelectedCard,
} from "../utils/Redux/selectedCardSlice";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const handleImagePopUp = (selectedCard) => {
    dispatch(updateSelectedCard(selectedCard));
    dispatch(openSelectedCard());
  };

  return (
    <div
      className=" mt-6 w-[350px] h-full mb-4 "
      onClick={() => handleImagePopUp(card)}
    >
      <img
        src={`${card?.largeImageURL}`}
        alt={`${card?.tags?.split(",")[0]}`}
        className=" w-full h-[200px]  rounded-lg aspect-video hover:scale-110 transition-transform transform"
      />

      <div className="mt-2">
        {card?.tags
          .split(",")
          .map((tag, index) => index <= 2 && <CardTag tag={tag} key={tag} />)}
      </div>
    </div>
  );
};

export default Card;
