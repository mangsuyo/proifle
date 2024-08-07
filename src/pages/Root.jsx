import React from "react";
import Nav from "../components/Nav";

const navItems = [
  { id: 0, title: "Portfolio", url: "/img/portfolio_icon.jpeg" },
  { id: 1, title: "Blog", url: "/img/blog_icon.jpeg" },
  { id: 2, title: "Github", url: "/img/github_icon.png" },
];

export default function Root() {
  return (
    <div className="flex flex-col items-center root-page">
      <div className="flex flex-col items-center parent-effect">
        <img
          src="/img/mango.png"
          alt="Mango Icon"
          className="zero-to-one w-[60px] h-[60px] rounded-xl"
        />
        <div className="title font-karla mt-10 flex flex-col items-center font-bold text-xl ">
          <h1>MangSuyo</h1>
          <h1 className="text-[14px]">Developer. Front & Back</h1>
        </div>
        <div className="location flex flex-col items-center mt-3 font-semibold text-[13px]">
          <h2>Seoul, South Korea</h2>
          <h2>Sejong Univ</h2>
        </div>
        <div className="my-8 w-[35px] border-[0.5px] border-[rgba(0,0,0,0.5)]"></div>
        <div className="flex flex-col font-karla leading-[1.4rem] text-[13px] text-gray text-center mb-14 md:mb-20 w-[350px] md:w-[450px] ">
          <p>I am studying computer engineering at Sejong Univ.</p>
          <p>I use React and Spring Boot to create web and app.</p>
          <p>
            I want to actively utilize technologies such as AI to find
            innovative solutions to social problems.
          </p>
        </div>
      </div>
      <div className="font-karla flex flex-col w-[350px] md:w-[450px] gap-2 md:gap-4">
        {navItems.map((item) => (
          <Nav key={item.id} navItem={item} />
        ))}
      </div>
    </div>
  );
}
