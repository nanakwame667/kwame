"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LampCeiling, VenetianMask, FolderGit2 } from "lucide-react";

export default function NavbarComponent() {
  return (
    <NavigationMenu className=" border-2 bg-white border-gray-200 rounded-full p-2 h-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="flex justify-center items-center px-4 py-2 rounded-full w-full space-x-1 text-[#A3A3A3] hover:bg-accent hover:text-accent-foreground focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent">
              <LampCeiling size={16} />
              <p className="font-medium">Home</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="flex justify-center items-center px-4 py-2 rounded-full w-full space-x-1 text-[#A3A3A3] hover:bg-accent hover:text-accent-foreground focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent">
              <VenetianMask size={16} />
              <p className="font-medium">About</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className="flex justify-center items-center px-4 py-2 rounded-full w-full space-x-1 text-[#A3A3A3] hover:bg-accent hover:text-accent-foreground focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent">
              <FolderGit2 size={16} />
              <p className="font-medium">Project</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
