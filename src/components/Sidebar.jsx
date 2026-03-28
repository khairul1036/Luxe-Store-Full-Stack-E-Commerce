"use client";
import { ChessQueen, SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = ({ onCloseClick, openSidebar }) => {
  const AllCategory = [
    {
      id: 1,
      slug: "womens-clothing",
      label: "Women's Clothing",
      icon: "👗",
    },
    {
      id: 2,
      slug: "mens-clothing",
      label: "Men's Clothing",
      icon: "👔",
    },
    {
      id: 3,
      slug: "handbags-purses",
      label: "Handbags & Purses",
      icon: "👜",
    },
    {
      id: 4,
      slug: "shoes-footwear",
      label: "Shoes & Footwear",
      icon: "👠",
    },
    {
      id: 5,
      slug: "jewelry",
      label: "Jewelry",
      icon: "💍",
    },
    {
      id: 6,
      slug: "watches",
      label: "Watches",
      icon: "⌚",
    },
    {
      id: 7,
      slug: "sunglasses-eyewear",
      label: "Sunglasses & Eyewear",
      icon: "🕶️",
    },
    {
      id: 8,
      slug: "scarves-wraps",
      label: "Scarves & Wraps",
      icon: "🧣",
    },
    {
      id: 9,
      slug: "belts-wallets",
      label: "Belts & Wallets",
      icon: "👛",
    },
    {
      id: 10,
      slug: "activewear",
      label: "Activewear",
      icon: "🏃",
    },
    {
      id: 11,
      slug: "ethnic-traditional",
      label: "Ethnic & Traditional",
      icon: "🥻",
    },
    {
      id: 12,
      slug: "kids-fashion",
      label: "Kids' Fashion",
      icon: "🧒",
    },
    {
      id: 13,
      slug: "hats-caps",
      label: "Hats & Caps",
      icon: "🧢",
    },
    {
      id: 14,
      slug: "lingerie-innerwear",
      label: "Lingerie & Innerwear",
      icon: "🩱",
    },
    {
      id: 15,
      slug: "beauty-fragrance",
      label: "Beauty & Fragrance",
      icon: "🌸",
    },
  ];
  return (
    <div
      className={`bg-primary-light border-primary/30 min-h-screen overflow-hidden border-r text-center shadow-sm transition-all duration-300 ease-in-out ${openSidebar ? "w-full p-5 opacity-100" : "w-0 opacity-0"}`}
    >
      <div className="flex justify-end">
        <SquareChevronLeft
          onClick={onCloseClick}
          className="text-primary-dark cursor-pointer shadow-xs"
        />
      </div>
      <h1 className="text-primary-dark text-left text-2xl font-bold transition-all duration-500">
        ALL PRODUCT CATEGORY
      </h1>
      {/* product category listing  */}

      {AllCategory.map((category) => (
        <div
          key={category.id}
          className="border-primary-muted shadow-primary-light text-primary-dark mt-5 flex w-5/6 cursor-pointer items-center justify-between rounded-full border px-4 py-1.5 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105"
        >
          {/* <ChessQueen className="text-2xl" /> */}
          <span>{category.icon}</span>
          <span>{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
