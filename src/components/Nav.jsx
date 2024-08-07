import React from "react";
import { useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "../index.css";

export default function Nav({ navItem }) {
  const navigate = useNavigate();
  const { url, title } = navItem;

  const handleNavClick = (navTitle) => {
    switch (navTitle) {
      case "Blog":
        window.open("https://velog.io/@mayo3610/posts");
        break;
      case "Github":
        window.open("https://github.com/mangsuyo?tab=repositories");
        break;
      case "Portfolio":
        navigate("/portfolio");
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="mouse-effect nav-effect"
      onClick={() => handleNavClick(title)}
    >
      <h2 className="flex items-center py-[18px] px-6 rounded-xl bg-[rgba(0,0,0,0.03)]">
        <img src={url} alt={title} className="w-[22px] h-[19px]" />
        <span className="ml-6 grow">{title}</span>
        <span className="chevron">
          <GoChevronRight />
        </span>
      </h2>
    </div>
  );
}
