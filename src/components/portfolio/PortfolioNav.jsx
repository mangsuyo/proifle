import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioNav({ navItem }) {
  return (
    <Link to={`/portfolio/${navItem.title}`}>
      <li className="list-none px-[5%] py-3 ">
        <h1 className="text-[15px]">{navItem.title}</h1>
        <h2 className="font-light text-[14px] text-gray-400">{navItem.type}</h2>
      </li>
    </Link>
  );
}
