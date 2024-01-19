import React from "react";
import heroImg from "../assets/images/image-mockups.png";
import Button from "./button";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-Very-Light-Gray  overflow-hidden md:gap-20 gap-10">
      {/* text */}
      <div className="flex flex-col md:mt-[180px] md:text-left text-center md:pl-20 pl-5 md:max-w-[40%] max-w-full ">
        <h1 className="font-[400] leading-[1.3] md:text-[44px] text-4xl	max-w-full ">
          Next generation digital banking
        </h1>
        <p className="font-[300] text-base mt-[10px] leading-7 md:max-w-[400px] max-w-full text-Grayish-Blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button className="mt-10 md:mx-[5px] mx-auto md:mb-[0px] mb-[100px] " />
      </div>

      {/* image */}

      <div className="-mt-20 overflow-hidden sm:bg-hero-pattern bg-hero-pattern-mb bg-no-repeat md:max-w-[90%] bg-cover">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Intro;
