import React, { ReactNode } from "react";
import PageAll from "../../components/partials/PageAll";
import Header from "../../components/partials/Header";
import Typing from "react-type-animation";
import { CarouselSlider } from "../../components/Carousel";


// import icons
import { AiFillLinkedin, AiFillFacebook, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

//import svg
import htmlsvg from "../../assets/img/icons/html.svg";
import csssvg from "../../assets/img/icons/css.svg";
import jssvg from "../../assets/img/icons/js.svg";
import reactsvg from "../../assets/img/icons/react.svg";
import typescriptsvg from "../../assets/img/icons/ts.svg";
import node from "../../assets/img/icons/node.svg";
import dockersvg from "../../assets/img/icons/docker.svg";
import gitsvg from "../../assets/img/icons/git.svg";


function Page() {
  return (
    <PageAll>
      <div className="sm:w-full 
                      sm:h-screen 
                      top-all 
                      before:left-48 
                      after:right-48 
                      bg-top 
                      bg-contain 
                      bg-no-repeat 
                      relative
                      bg-right ">

        <Header />
        <div className=" w-full flex" style={{ height: "calc(100vh - 4rem)" }}>
          <div className=" sm:w-1/5 w-1/5 flex items-end">
            <div className="w-auto list-social relative -left-6 sm:left-16 md:left-2">
              <ul className="list-none ml-11 mb-11">
                <li className=""><a href="https://www.linkedin.com/in/quenede-abreu-928693203/"><AiFillLinkedin className="text-white text-2xl mb-5 hover:text-grey-opacity transition-all duration-500" /></a></li>
                <li><a href="https://www.facebook.com/quenede.abreu/"><AiFillFacebook className="text-white text-2xl mb-5 hover:text-grey-opacity transition-all duration-500" /></a></li>
                <li><a href="mailto:quenede.in@gmail.com"><SiGmail className="text-white text-2xl mb-5 hover:text-grey-opacity transition-all duration-500" /></a></li>
                <li><a href="https://github.com/QuenedeAbreu"><AiFillGithub className="text-white text-2xl hover:text-grey-opacity transition-all duration-500" /></a></li>
              </ul>
            </div>
          </div>
          <div className=" sm:w-4/5 w-4/5 flex items-center">
            <div className=" sm:w-3/4 sm:h-2/4  infos">
              <div className=" sm:w-full sm:h-[20%] flex items-end">
                <h2 className="text-white font-overpass sm:font-normal sm:text-xl uppercase im relative">I AM QUENEDE ABREU</h2>
              </div>
              <div className=" sm:w-full sm:h-[40%] flex items-center">

                <h1 className="uppercase text-white font-oswald sm:font-extrabold sm:text-6xl ">
                  <Typing sequence={[
                    'full stack developer',
                    5000,
                    'react js',
                    2000,
                    'node js',
                    2000,
                  ]} repeat={Infinity} />
                </h1>

              </div>
              <div className=" sm:w-full sm:h-[20%] flex items-center ">
                <img src={htmlsvg} className="w-7 mr-2" />
                <img src={csssvg} className="w-7 mr-2" />
                <img src={jssvg} className="w-7 mr-2" />
                <img src={reactsvg} className="w-7 mr-2" />
                <img src={typescriptsvg} className="w-7 mr-2" />
                <img src={node} className="w-7 mr-2" />
                <img src={dockersvg} className="w-7 mr-2" />
                <img src={gitsvg} className="w-7" />
              </div>
              <div className=" sm:w-full sm:h-[20%] flex items-end ">
                <a href="https://api.whatsapp.com/send?phone=5568999655360&text=Oi%20Quenede!%20Queria%20fazer%20um%20or%C3%A7amento." className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold group">
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-16 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-grey-opacity transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center font-oswald"> <AiOutlineWhatsApp className="mr-3" />CONTACT ME</span>
                  <span className="absolute inset-0 border border-grey-opacity"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-1/5 w-1/5"></div>

        </div>
        <div className="sm:w-full sm:h-screen bg-orange-400 flex justify-center">
          <div className="sm:w-10/12 bg-black flex justify-center items-center">
            <CarouselSlider />
          </div>
        </div>
      </div>
    </PageAll>
  )
}

export default Page;