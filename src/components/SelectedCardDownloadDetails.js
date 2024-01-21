import React, { useState } from "react";
import SelectedCardDetailSection from "./SelectedCardDetailSection";
import { useSelector } from "react-redux";
import { IMAGE_RESOLUTIONS } from "../utils/constants";
const SelectedCardDownloadDetails = () => {
  const selectedCard = useSelector((state) => state.selectedCard?.selectedCard);

  const [imageSize, setImageSize] = useState(IMAGE_RESOLUTIONS);

  console.log("image preview URL:", selectedCard?.previewURL);
  const handleSelectedSize = (selectedSizeKey) => {
    setImageSize((prevState) =>
      prevState.map((size) => ({
        ...size,
        selected: size.key === selectedSizeKey,
      }))
    );
  };
  const downloadImage = () => {
    const imageUrl = selectedCard?.previewURL;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `Image.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="absolute w-[103px] h-[52px] sm:top-[103.66px] top-[30rem] sm:left-[904.55px] left-[39px]">
        <SelectedCardDetailSection text={"Download"} />
      </div>
      <ul className="absolute bg-white flex flex-col justify-center w-[275.45px] h-[163.73px] sm:top-[162px] top-[33rem] sm:left-[904px] left-[39px]">
        {imageSize.map((image) => (
          <li
            key={image.key}
            onClick={() => handleSelectedSize(image.key)}
            className="flex flex-wrap items-center justify-around h-[41.11px] w-[275.45px] border rounded-lg left-[904px] "
          >
            <span className="text-[#475467] mr-[10px] h-[22px] w-[128.84px]">
              {image.key}
            </span>
            <span className="text-[#475467] text-[12.44px] font-extrabold mr-[10px] w-[52px] h-[34px] text-center my-auto flex items-center">
              {image.resolution}
            </span>
            {image.selected && (
              <img
                src={process.env.PUBLIC_URL + "/check.svg"}
                alt="check icon"
                className="w-[14.22px] h-[14.22px] bg-[#4BC34B] rounded-full border"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="absolute w-[274.67px] h-[37.33px] sm:top-[348.52px] top-[44rem] sm:left-[904px] left-[39px] rounded-[4.44px] bg-[#4BC34B] flex items-center justify-center">
        <button
          className="text-[11.55px] font-extrabold"
          onClick={() => downloadImage()}
        >
          Download for free!
        </button>
      </div>
    </>
  );
};

export default SelectedCardDownloadDetails;
