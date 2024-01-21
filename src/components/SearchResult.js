import React from "react";
import { useSelector } from "react-redux";
const SearchResult = ({ text }) => {
  const searchQuery = useSelector((state) => state.searchQuery?.searchQuery);
  return (
    <div className="sm:text-white text-black w-full  text-center">
      {searchQuery?.length > 0 ? (
        <span
          className="absolute w-[401px] h-[88px] top-[269px] sm:font-bold font-semibold text-[42.61px] sm:text-white text-black text-center 
        sm:left-[50%] sm:transform sm:translate-x-[-50%]
        "
        >
          Results: {searchQuery}
        </span>
      ) : (
        <div className="flex flex-wrap items-center justify-center content-center w-full bg-black ">
          <div
            className={`absolute ${
              searchQuery?.length > 0
                ? "sm:top-[269px]"
                : "lg:top-[539.13px] md:top-[400.13px] sm:top-[280px] top-[639.13px]"
            } sm:text-[13.34px] text-[2rem] sm:w-[271.34px] w-[47rem] sm:h-[39.14px] p-2 text-black bg-white sm:text-white sm:bg-[#D9D9D91D]
           text-center rounded-[8.9px] ml-[21rem] sm:ml-0`}
            style={{
              boxShadow:
                "-3.9381771087646484px 3.9381771087646484px #FFFFFF 43% 3.9381771087646484px 3.9381771087646484px #B6B6B66E 43%",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="font-bold mr-2 sm:text-white">Trending: </span>
            <span>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
