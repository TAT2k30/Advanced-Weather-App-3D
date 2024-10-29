import { Link } from "react-router-dom";
import { HeaderProps } from "../../../rules/props/HeaderProps";

function Header({ lightMode, setLightMode, currentBodyLightMode, currentTextLightMode, currentShadowLightMode }: HeaderProps) {

  return (
    <header className={`flex ${currentShadowLightMode} py-4 px-4 sticky top-0 sm:px-10 ${currentBodyLightMode} font-[sans-serif] min-h-[70px] tracking-wide z-50 transition-all duration-500`}>
      <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
        <Link
          to={"/"}
          className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <b className={`text-xl ${currentTextLightMode}`}>
            Planet Empires
          </b>
        </Link>

        <div id="collapseMenu"
          className={`max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
          <button id="toggleClose" className={`lg:hidden fixed top-2 right-4 z-[100] rounded-full ${lightMode ? "bg-white" : "bg-gray-800"} p-3`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 ${lightMode ? "fill-black" : "fill-white"}`} viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul className={`lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white ${lightMode ? "bg-white" : "bg-commonBlack"} max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transition-all duration-500`}>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
              </a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' className={`${currentTextLightMode} block font-semibold text-[15px]`}>Home</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Team</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Feature</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Blog</a>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-3 flex items-center gap-2'>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={lightMode}
                  onChange={() => setLightMode(!lightMode)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-slate-900 rounded-full peer dark:bg-commonBlue peer-checked:bg-commonBlack transition duration-300 ease-in-out">
                  <div className={`absolute w-6 h-6 bg-white rounded-full top-0.5 left-0.5 ${lightMode ? "" : "translate-x-7"} transition-transform duration-300 ease-in-out`}></div>
                </div>
              </label>
            </li>

          </ul>
        </div>

        <div className='flex items-center ml-auto space-x-6'>
          <button className='font-semibold text-[15px] border-none outline-none'><a href='javascript:void(0)'
            className='text-[#007bff] hover:underline'>Login</a></button>
          <button
            className='px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-white hover:text-[#007bff]'>Sign
            up</button>

          <button className='lg:hidden'
            onClick={() => {
                
            }}>
            <svg className="w-6 h-6" aria-hidden="true" fill={lightMode ? "#000" : "#fff"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
