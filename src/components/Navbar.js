import React, { useState } from "react";

const Navbar = () => {
  const [sideBarOpen, setSIdeBarOpen] = useState(false);
  const openSideBar = () => {
    setSIdeBarOpen(!sideBarOpen);
  };

  return (
    <section
      className="absolute flex flex-wrap items-center justify-between w-[47rem] sm:w-full md:w-full lg:w-[1007.48px] xl:w-[1217.48px] h-[67.69px] lg:top-[39.19px] sm:top-0  sm:rounded-[8.91px] sm:bg-[#D9D9D91D] sm:left-1/2 sm:transform sm:-translate-x-1/2 bg-[#F5F5F5]"
      style={{
        boxShadow:
          "-3.9381771087646484px 3.9381771087646484px #FFFFFF 43% 3.9381771087646484px 3.9381771087646484px #B6B6B66E 43%",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="">
        <span className="font-semibold sm:text-[17.81px] text-4xl p-2 sm:p-0 sm:text-white sm:left-[39.4px] sm:pl-10">
          Home Page
        </span>
      </div>
      <span className="flex text-4xl sm:hidden mr-4" onClick={openSideBar}>
        X
      </span>
      <ul
        className={`sm:relative absolute ${
          sideBarOpen ? "flex" : "hidden"
        } sm:flex sm:flex-row sm:gap-4 sm:items-center sm:text-[#FFFFFF] flex-col left-0 top-14 sm:top-0`}
      >
        <li className="font-semibold sm:text-[17.81px] text-4xl p-2 sm:p-0">
          Login
        </li>
        <li className="border font-semibold sm:text-[17.81px] rounded-[8.9px] mr-10 text-4xl sm:p-0">
          Create Account
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
