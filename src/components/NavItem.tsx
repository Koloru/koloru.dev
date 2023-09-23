"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

const NavItem = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div className="group relative flex justify-start">
        <div
          className={cn(
            `${className} cursor-pointer duration-300 ease-in-out hover:text-rose-500 text-white`,
          )}
        >
          {icon}
        </div>

        <div className="absolute left-full ml-5 mt-1 flex flex-col items-center justify-center rounded-lg  bg-white text-rose-500 font-bold px-4 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
          {/* Triangle */}
          <div className="bottom clip-path-triangle absolute -left-4 z-50 h-4 w-4 bg-white text-rose-500 font-bold"></div>
          {text}
        </div>
      </div>
    </>
  );
};

export default NavItem;
