import React from "react";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import ninja from "../../../assets/img/ninja.svg";

function Header() {
  return (
    <header className=" w-screen h-16 flex justify-between items-center md:border-b border-[#666666]/[.3] sm:h-16">
      <div className=" h-full sm:w-2/5 w-2/5 flex items-center justify-center">
        <h1 className="font-mono font-bold text-white text-2xl"><img src={ninja} className="sm:w-12" /></h1>
      </div>
      <div className=" h-full sm:w-4/5 w-1/5 flex items-center justify-center"></div>
      <div className=" h-full sm:w-2/5 w-2/5 flex items-center justify-center">
        <div className=" bg-[#191919] block  p-1.5 cursor-pointer">
          <AiOutlineMenuUnfold className="text-white text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;