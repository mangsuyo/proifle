import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "../index.css";

export default function Nav({ item }) {
  return (
    <div className="mouse-effect nav-effect">
      <Link
        to={`/${item.title}`}
        className="flex items-center py-[18px] px-6 rounded-xl bg-[rgba(0,0,0,0.03)]"
      >
        <img src={item.url} className="w-[22px] h-[19px]" />
        <span className="ml-6 grow">{item.title}</span>
        <span className="chevron">
          <GoChevronRight />
        </span>
      </Link>
    </div>
  );
}
