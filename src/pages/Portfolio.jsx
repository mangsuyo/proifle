import React from "react";
import { useState } from "react";
import { PiListThin } from "react-icons/pi";
import PortfolioNav from "../components/portfolio/PortfolioNav";

export default function Portfolio() {
  const [isNavBarClicked, setisNavBarClicked] = useState(false);

  const handleToggleNavBarVisibility = (event) => {
    setisNavBarClicked((prev) => !prev);
  };

  const portfolios = [
    {
      title: "Borrow Here",
      type: "Web. Front",
    },
    {
      title: "Clone Youtube",
      type: "Web. Front",
    },
  ];
  return (
    <div className={`w-full font-karla`}>
      <aside className="h-[120vh] border-2 ">
        <header className="sticky top-5 bg-[rgba(0,0,0,0.1)] px-[5%]">
          {!isNavBarClicked && (
            <PiListThin
              onClick={handleToggleNavBarVisibility}
              className="text-3xl"
            />
          )}
        </header>
        {isNavBarClicked && (
          <>
            <div
              onClick={handleToggleNavBarVisibility}
              className="absolute w-full h-full top-0 left-0 bg-[rgba(42,41,41,0.75)]"
            ></div>
            <div className="absolute w-[85%] h-full top-[0] left-[0] bg-white">
              <div className="font-semibold px-[5%] py-[5%]">
                <h1>MangSuyo</h1>
                <h1 className="mb-6 text-[15px] font-light text-gray-400">
                  Developer. Front Dev
                </h1>
                <span className="font-normal">3</span>
                <span className="font-light ml-1">works</span>
              </div>
              <div className="mt-4 w-full h-[0.1px] bg-gray-400 "></div>
              <nav className="mt-3">
                {portfolios.map((item) => (
                  <PortfolioNav navItem={item} />
                ))}
              </nav>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
