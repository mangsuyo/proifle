import React from "react";
import Nav from "../components/Nav";

const items = [
  { id: 0, title: "Portfolio", url: "/img/portfolio_icon.jpeg" },
  { id: 1, title: "Blog", url: "/img/blog_icon.jpeg" },
  { id: 2, title: "Github", url: "/img/github_icon.png" },
  { id: 3, title: "Instagram", url: "/img/instagram_icon.jpeg" },
];
export default function Root() {
  return (
    <div className="w-screen min-h-screen flex justify-center px-[7%] md:px-0 ">
      <div className="py-28 flex flex-col items-center root-page">
        <div className="flex flex-col items-center parent-effect">
          <img
            src="/img/mango.png"
            className="zero-to-one w-[60px] h-[60px] rounded-xl"
          />
          <div className="title font-karla mt-12 flex flex-col items-center font-bold text-xl ">
            <h1>MangSuyo</h1>
            <h1>Developer. Front Dev</h1>
          </div>
          <div className="location flex flex-col items-center mt-3 font-bold text-[13px]">
            <h2>Seoul, South Korea</h2>
            <h2>Sejong Univ</h2>
          </div>
          <div className=" my-8 w-[35px] border-[0.5px] border-[rgba(0,0,0,0.5)]"></div>
          <p className="font-karla  leading-[1.2rem] text-[12px] text-gray text-center font-semibold md:w-[400px] ">
            I am studying computer engineering at Sejong Univ. <br /> I use
            React and Spring Boot to create web and app <br />I want to actively
            utilize technologies such as AI to find innovative solutions to
            social problems
          </p>
        </div>
        <div className="font-karla w-full mt-20 flex flex-col gap-3">
          {items.map((item) => (
            <Nav key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
