import React from "react";
import Nav from "../components/Nav";

const items = [
  { id: 0, title: "Portfolio", url: "public/img/portfolio_icon.jpeg" },
  { id: 1, title: "Blog", url: "public/img/blog_icon.jpeg" },
  { id: 2, title: "Github", url: "public/img/github_icon.png" },
  { id: 3, title: "Instagram", url: "public/img/instagram_icon.jpeg" },
];
export default function Root() {
  return (
    <div className="w-screen min-h-screen flex justify-center font-madimi">
      <div className="w-full flex flex-col items-center">
        <div className="mt-20 flex flex-col items-center ">
          <img
            src="public/img/mango.png"
            className="w-[60px] h-[60px] rounded-xl"
          />
          <div className="flex flex-col items-center mt-6 font-semibold text-[18px]">
            <h1>MangSuyo</h1>
            <h1>Developer. Front Dev</h1>
          </div>
          <div className="flex flex-col items-center mt-2 font-medium text-gray-500">
            <h2>Seoul, South Korea</h2>
            <h2>Sejong Univ</h2>
          </div>
          <div className="my-8 w-[35px] border-[0.5px] border-black"></div>
          <div className="w-[400px]">
            <p className="leading-[1.2rem] text-[14px] md:text-[15px] text-gray text-center font-madimi ">
              I am studying computer engineering at Sejong University. <br /> I
              use React and Spring Boot to create web and app services. <br />I
              want to actively utilize technologies such as AI to find
              innovative solutions to social problems
            </p>
          </div>
        </div>
        <div className="w-[400px] mt-20 flex flex-col gap-4">
          {items.map((item) => (
            <Nav key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
