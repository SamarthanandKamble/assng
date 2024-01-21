import React from "react";
import { useSelector } from "react-redux";

const SearchResultSuggestions = () => {
  const imageGallery = useSelector((state) => state.imageGallery?.imageGallery);
  console.log("imageGallery:", imageGallery);
  if (imageGallery.length <= 0) {
    return;
  }
  return (
    <div className="absolute flex flex-wrap items-center justify-start sm:w-full w-[47rem]  h-[101.21px] top-[381.75px] bg-[#F5F5F5]">
      <span className="absolute sm:h-[44.39px] left-[33.97px] text-center flex flex-wrap items-center">
        {imageGallery?.length > 0 &&
          imageGallery?.map((image, index) => (
            <>
              {index <= 2 &&
                image.tags.split(",").map(
                  (item, i) =>
                    index <= 2 &&
                    i <= 1 && (
                      <span
                        key={item}
                        className="border border-[#767676] w-[151.14px] h-[42.48px] my-auto flex items-center justify-evenly mr-2 font-semibold text-[#767676] sm:text-[13.74px] text-[1.87rem]"
                      >
                        {item}
                      </span>
                    )
                )}
            </>
          ))}
      </span>
    </div>
  );
};

export default SearchResultSuggestions;
