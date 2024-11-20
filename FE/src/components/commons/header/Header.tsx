import { Link, useLocation } from "react-router-dom";
import { HeaderProps } from "../../../rules/props/pages/HeaderProps";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";

function Header({ isLigtMode, setIsLightMode, currentBodyLightMode, currentTextLightMode, currentShadowLightMode }: HeaderProps) {
  let currentRoute = useLocation();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleCloseSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <header className={`flex ${currentShadowLightMode} py-4 px-4 sticky top-0 sm:px-10 ${currentBodyLightMode} font-[sans-serif] min-h-[70px] tracking-wide z-50 transition-all duration-500`}>
      <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
        <Link
          to={"/"}
          className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <b className={`text-xl ${currentTextLightMode} transition-all duration-500`}>
            3D Weather Application
          </b>
        </Link>

        <div
          className={`max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>

          <button className='lg:hidden' onClick={toggleSideNav}>
            <svg className="w-6 h-6" aria-hidden="true" fill={isLigtMode ? "#000" : "#fff"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>



          <ul className={`lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white ${isLigtMode ? "bg-white" : "bg-commonBlack"} max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transition-all duration-500`}>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' /></a>
            </li>
            {/* Các nút được điều chỉnh */}
            <li className={`max-lg:border-b max-lg:py-3 px-3 w-full ${currentRoute.pathname === "/" ? "border-b-3 border-red-200" : ""}`}>
              <Link to={"/"} className={`${currentTextLightMode} ${isLigtMode ? "hover:text-commonHoverBlack hover:text-xl" : "hover:text-commonHoverBlue hover:text-xl"} block font-semibold text-[15px] w-full text-center py-3 bg-transparent transition-all`}>
                Home
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3 w-full'>
              <Link to={"/weather"} className={`${currentTextLightMode} ${isLigtMode ? "hover:text-commonHoverBlack hover:text-xl" : "hover:text-commonHoverBlue hover:text-xl"} block font-semibold text-[15px] w-full text-center py-3 bg-transparent transition-all`}>
                Weather
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3 w-full'>
              <Link to={"/testing"} className={`${currentTextLightMode} ${isLigtMode ? "hover:text-commonHoverBlack hover:text-xl" : "hover:text-commonHoverBlue hover:text-xl"} block font-semibold text-[15px] w-full text-center py-3 bg-transparent transition-all`}>
                Testing
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-0 w-full flex items-center gap-2'>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLigtMode}
                  onChange={() => setIsLightMode!(!isLigtMode)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-slate-900 rounded-full peer dark:bg-commonBlue peer-checked:bg-commonBlack transition duration-300 ease-in-out">
                  <div className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 ${isLigtMode ? "" : "translate-x-7"} transition-transform duration-300 ease-in-out`}></div>
                </div>
              </label>
            </li>
          </ul>

        </div>

        <div className='flex items-center ml-auto space-x-6'>
          <Link
            to={"/login"} className={`font-semibold text-[15px] border-none outline-none ${currentTextLightMode} transition-all duration-300`}>
            Login
          </Link>
          <Link
            to={"/register"}
            className={`px-4 py-2 text-sm rounded-sm font-bold ${currentTextLightMode} border-2 ${isLigtMode ? "border-commonBlack hover:text-white hover:bg-commonBlack" : "border-commonBlue hover:bg-white hover:text-commonBlue hover:border-white"} transition-all ease-in-out duration-300`}>Sign
            up</Link>

          {/* Nút để mở Side Nav */}
          <button className={`lg:hidden ${currentTextLightMode}`} onClick={toggleSideNav}>
            <svg className="w-6 h-6" aria-hidden="true" fill={isLigtMode ? "#191B1D" : "#007bff"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Side Nav */}
      {isSideNavOpen && (
        <SideNav isSideNavOpen={isSideNavOpen} handleCloseSideNav={setIsSideNavOpen}></SideNav>
      )}
    </header>
  );
}

export default Header;
