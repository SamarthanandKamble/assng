import React from "react";
import { useSelector } from "react-redux";
import EmptyImageGallery from "./EmptyImageGallery";
import Card from "./Card";
import SearchResultSuggestions from "./SearchResultSuggestions";
const CardGallery = () => {
  const imageGallery = useSelector((state) => state.imageGallery?.imageGallery);
  return (
    <div className="">
      <SearchResultSuggestions />
      {imageGallery.length > 0 && (
        <div className="absolute flex flex-wrap sm:w-full w-[46rem] border items-center justify-evenly content-center top-[481px] bg-white">
          {imageGallery.map((cards) => (
            <Card card={cards} key={cards.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardGallery;
