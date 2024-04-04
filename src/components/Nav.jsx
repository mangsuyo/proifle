import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "../index.css";

export default function Nav({ navItem, handleNavClick }) {
  const navigate = useNavigate();
  const route = navItem.title.toLowerCase();
  const { url, title } = navItem;
  console.log(route);
  const handleNavRoute = () => {
    if (route == "portfolio") {
      navigate("/portfolio");
    }
    if (route == "instagram") {
      navigate("/instagram");
    }
  };
  return (
    <div
      className="mouse-effect nav-effect"
      onClick={() => handleNavClick(title)}
    >
      <h2
        onClick={handleNavRoute}
        className="flex items-center py-[18px] px-6 rounded-xl bg-[rgba(0,0,0,0.03)]"
      >
        <img src={url} className="w-[22px] h-[19px]" />
        <span className="ml-6 grow">{title}</span>
        <span className="chevron">
          <GoChevronRight />
        </span>
      </h2>
    </div>
  );
}
