import React, { ReactNode } from "react";
import cata from "../../assets/img/cata.jpg";


function Page() {
  return (
    <div className="w-screen bg-black h-screen flex items-center justify-center">
      <img src={cata} alt="cata" className="" />
    </div>
  );
}

export default Page;