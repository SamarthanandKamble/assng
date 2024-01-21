import React from "react";
import SelectedCardImage from "./SelectedCardImage";
import SelectedCardDownloadDetails from "./SelectedCardDownloadDetails";
import SelectedCardInformation from "./SelectedCardInformation";

const SelectedCardHeroSection = () => {
  return (
    <div className="flex flex-wrap border">
      <SelectedCardImage />
      <SelectedCardDownloadDetails />
      <SelectedCardInformation />
    </div>
  );
};

export default SelectedCardHeroSection;
