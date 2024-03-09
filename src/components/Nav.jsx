import React from "react";

export default function Nav({ item }) {
  return (
    <div className="flex py-[18px] px-6  rounded-xl bg-[rgba(0,0,0,0.03)] hover:bg-[rgba(0,0,0,0.1)]">
      <img src={item.url} className="w-[22px] h-[19px]" />
      <span className="ml-6 font-semibold">{item.title}</span>
    </div>
  );
}
