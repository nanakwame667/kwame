"use client";
import Image from "next/image";
import verification from "../../public/images/verification.svg";
import msg from "../../public/images/msg.svg";
import menu from "../../public/images/menu.svg";
const CheckIcon = () => {
  return <Image src={verification} alt="img" />;
};
const MsgIcon = () => {
  return <Image src={msg} alt="img" width={18} />;
};

const MenuIcon = () => {
  return <Image src={menu} alt="img" width={18} />;
};

export { CheckIcon, MsgIcon, MenuIcon };
