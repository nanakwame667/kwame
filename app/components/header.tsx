"use client";
import React from "react";
import NavbarComponent from "./navbar";
import github from "../../public/images/github.svg";
import linkedin from "../../public/images/linkedin.svg";
import twitter from "../../public/images/twitter.svg";
import me from "../../public/images/me.svg";
import emoji from "../../public/images/emoji.svg";
import Image from "next/image";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex flex-col h-screen items-center w-[30%]  p-8 bg-[#FCFCFC]">
      <div>
        <NavbarComponent />
      </div>
      <div className="flex flex-col justify-center items-center h-full space-y-4">
        <Image src={me} alt="me" className="rounded-full" />
        <div className="flex items-center space-x-1">
          <h1 className="font-semibold text-xl">Hey! there, I’m Kwame</h1>
          <Image src={emoji} alt="emoji" width={20} />
        </div>
        <p className="font-normal text-base text-[#6C6C6C] text-center">
          A Product Designer, UX Engineer & Design Engineer with over 5 years of
          experience building B2B and B2C solutions across Fintech, Internal
          Tools, AI, Transportation & Logistics, Healthcare, DevTools, and
          Design Systems—impacting over 1M users and 1,000+ businesses.
        </p>
        <Button className="rounded-full" size="lg">
          Download Resume
        </Button>
      </div>
      <div className="flex w-full justify-between items-center">
        <ul className="flex items-center space-x-4">
          <li>
            <Image src={github} alt="github" />
          </li>
          <li>
            <Image src={twitter} alt="github" />
          </li>
          <li>
            <Image src={linkedin} alt="github" />
          </li>
        </ul>
        <div className="flex items-center space-x-2 px-4 py-2 border rounded-full">
          <Copy size={16} />
          <p className="text-[#6C6C6C]">frimpongdarkwakwame@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
