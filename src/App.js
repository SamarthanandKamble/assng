import HeroSection from "./components/HeroSection";
import CardGalleryContainer from "./components/CardGalleryContainer";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import SelectedCardContainer from "./components/SelectedCardContainer";
import { useEffect, useState } from "react";
import { WALLPAPERS } from "./utils/constants";
function App() {
  const [imageNumber, setImageNumber] = useState(0);
  const isSelectedCardOpen = useSelector(
    (state) => state.selectedCard?.selectedCardFlag
  );
  useEffect(() => {
    setImageNumber(Math.floor(Math.random() * 4) + 1);
  }, []);

  return (
    <div className={`relative `}>
      <img
        src={`${WALLPAPERS[imageNumber]?.image}`}
        alt="wallpaper"
        className=" hidden sm:block sm:w-screen sm:h-full sm:aspect-video"
      />

      <div
        className={`${
          isSelectedCardOpen ? "opacity-[50%]" : "opacity-[100%]"
        } `}
      >
        <Navbar />
        <HeroSection />
        <CardGalleryContainer />
      </div>
      <SelectedCardContainer />
    </div>
  );
}

export default App;
