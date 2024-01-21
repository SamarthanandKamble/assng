import React, { useState } from "react";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchQuery } from "../utils/Redux/searchQuerySlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const searchQuery = useSelector((state) => state.searchQuery?.searchQuery);
  const handleSearchQuery = (e) => {
    e.preventDefault();
    console.log("search query:", input);
    if (input.length > 0) {
      dispatch(updateSearchQuery(input));
    }
    setInput("");
  };

  return (
    <>
      {!searchQuery && (
        <section className="absolute flex sm:flex-col items-center justify-center w-[47rem] lg:w-[841px] md:w-[750px] sm:w-[600px] h-[176px] sm:left-[50%] lg:top-[190.38px] md:top-[100.38px] sm:top-[70px] top-[250.38px] sm:transform sm:translate-x-[-50%]">
          <h1 className="lg:text-[71.25px] md:text-[50.25px] sm:text-[40px] text-[4rem] text-center sm:text-white font-bold">
            Discover over 2,000,000 free stock images
          </h1>
        </section>
      )}

      <section
        className={`absolute sm:w-full ${
          searchQuery?.length > 0
            ? "md:top-[177.56px] top-[160.56px]"
            : "lg:top-[442.16px] md:top-[300.16px] sm:top-[220.16px] top-[542.16px]"
        } flex flex-warp items-center justify-center content-center w-[47rem] mx-auto`}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="sm:bg-[#D9D9D91D] bg-black sm:w-[400px] md:w-[756.2px] w-full h-[67px] lg:h-[67.61px] sm:h-[40.61px]  rounded-[9.8px] border flex items-center justify-start relative "
          style={{
            boxShadow:
              "-3.9381771087646484px 3.9381771087646484px #FFFFFF 43% 3.9381771087646484px 3.9381771087646484px #B6B6B66E 43%",
            backdropFilter: "blur(10px)",
          }}
        >
          <label
            htmlFor="input"
            className="flex items-center justify-center w-full "
          >
            <img
              src={process.env.PUBLIC_URL + "/searchLogo.svg"}
              alt="search-logo"
              className="absolute w-[21.35px] h-[21.35px] lg:top-[23.51px] md:top-[10px] sm:top-[10px] left-[19.57px] text-[#FFFFFF]"
            />
            <span className="absolute text-3xl w-[36.48px] lg:top-[15.12px] md:-top-[3px] sm:-top-[3px] left-[61.39px] rounded-[1.78px] -rotate-[90] text-white">
              |
            </span>

            <input
              type="text"
              id="input"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="absolute text-[#FFFFFF] outline-none bg-transparent lg:top-[23.13px] sm:top-[5.13px]
               left-[81.85px] sm:text-[17.79px] text-[1.85rem]"
              required
            />
            <button
              type="submit"
              className="absolute font-semibold md:left-[685.92px] sm:left-[340.92px] left-[40rem] sm:text-[17.79px] text-3xl rounded-lg border flex items-center"
              onClick={(e) => handleSearchQuery(e)}
            >
              <span className="px-3 cursor-pointer font-semibold sm:text-[17.79px] top-[24.2px] text-white">
                GO!
              </span>
            </button>
          </label>
        </form>
      </section>

      <section className="flex items-center justify-around w-full">
        <SearchResult text={"flowers, love, forest, river"} />
      </section>
    </>
  );
};

export default HeroSection;
