"use client";
import React from "react";
import { Avatar, Badge, Chip } from "@heroui/react";
import { CheckIcon, MsgIcon, MenuIcon } from "./Icons";

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between p-8">
      <Chip variant="flat" size="md" className="flex lg:hidden">
        <MenuIcon />
      </Chip>
      <Badge
        placement="bottom-right"
        isOneChar
        size="md"
        content={<CheckIcon />}
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Avatar src="/images/portrait.png" size="lg" />
      </Badge>
      <Chip variant="flat" size="md">
        <MsgIcon />
      </Chip>
    </div>
  );
};

export default Header;
