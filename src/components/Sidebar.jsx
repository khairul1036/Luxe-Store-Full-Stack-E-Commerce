"use client";
import { SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = ({ onCloseClick, openSidebar }) => {
  return (
    <div
      className={`bg-primary-light border-primary/30 min-h-screen overflow-hidden border-r p-3 text-center shadow-sm transition-all duration-300 ease-in-out ${openSidebar ? "w-full opacity-100" : "w-0 opacity-0"}`}
    >
      <div className="flex justify-end">
        <SquareChevronLeft
          onClick={onCloseClick}
          className="text-primary-dark cursor-pointer shadow-xs"
        />
      </div>
      <h1 className="text-primary-dark text-left text-xl font-bold transition-all duration-500">
        ALL PRODUCT CATEGORY
      </h1>
      {/* product category listing  */}
      <div className="border-primary-muted shadow-primary-light text-primary-dark mt-4 flex w-4/5 items-center justify-between rounded-full border px-3 py-1.5 text-lg font-bold transition-all duration-300 ease-in-out hover:scale-105">
        <Image src="/images/washing.png" alt="" width={20} height={20} />
        <span>Hairstyle</span>
      </div>
    </div>
  );
};

export default Sidebar;
