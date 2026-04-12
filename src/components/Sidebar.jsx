"use client";
import { useAllCategory } from "@/app/(public)/hooks/useAllCategory";
import { ChessQueen, ChevronRight, SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = ({ onCloseClick, openSidebar }) => {
  const { categories, loading, error } = useAllCategory();
  return (
    <div
      className={`bg-primary-light border-primary/30 h-full overflow-y-auto border-r text-center shadow-sm transition-all duration-300 ease-in-out ${openSidebar ? "w-full p-5 opacity-100" : "w-0 opacity-0"}`}
    >
      <div className="flex justify-end">
        <SquareChevronLeft
          onClick={onCloseClick}
          className="text-primary-dark cursor-pointer shadow-xs"
        />
      </div>
      <h1 className="text-primary-dark text-left text-lg font-bold transition-all duration-500 lg:text-xl 2xl:text-2xl">
        ALL PRODUCT CATEGORY
      </h1>
      {/* product category listing  */}

      {categories.map((category) => (
        <div
          key={category.id}
          className="border-primary-muted shadow-primary-light text-primary-dark mt-5 flex w-[90%] cursor-pointer items-center justify-between rounded-full border px-4 py-2.5 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105"
        >
          {/* <ChessQueen className="text-2xl" /> */}
          <span>{category.icon}</span>
          <span>{category.label}</span>
          <span>
            <ChevronRight />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
