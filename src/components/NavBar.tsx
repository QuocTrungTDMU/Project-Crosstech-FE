import { useState } from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const [isMainnet, setIsMainnet] = useState<boolean>(true);
  const handleClick = () => {
    setIsMainnet(!isMainnet);
  };
  return (
    <div>
      <div className="place-items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between text-[#8C8C8C] w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <img className=" ml-20 font-heading" src={logo}></img>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-black" href="#">
                    Tapos
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#">
                    Wallet
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a className="hover:text-black" href="#">
                    Shop
                  </a>
                </li>
                <li>
                  <select className="hover:text-black text-[#CA5C3B] bg-[#EADBD7] border-none">
                    <option>More</option>
                    <option>More</option>
                    <option>More</option>
                  </select>
                </li>
              </ul>
              <div className="mx-8 shadow text-black font-bold rounded-full h-10 bottom-2 mt-4 flex p-2 bg-[#EEC5C7] relative items-center mr-20">
                <button
                  onClick={handleClick}
                  className="bg-[#EEC5C7] border-none focus:outline-none h-8 mr-4"
                >
                  Mainnet
                </button>
                <button
                  onClick={handleClick}
                  className=" bg-[#EEC5C7] border-none focus:outline-none h-8"
                >
                  Testnet
                </button>
                <span
                  className={`bg-[#CA5C3B]  shadow text-white flex items-center justify-center w-1/2 rounded-full h-9 transition-all top-[2px] absolute ${
                    isMainnet === true ? "left-[2px]" : "left-[70px]"
                  } `}
                >
                  {isMainnet === true ? "Mainnet" : "Testnet"}
                </span>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
