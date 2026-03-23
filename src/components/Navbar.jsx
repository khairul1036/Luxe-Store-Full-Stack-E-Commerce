import { CircleUser, MapPin, Search, ShoppingCart, SquareChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = ({ onMenuClick }) => {
  const iconClass =
    "border-primary-muted h-10 w-10 rounded-full border p-2 shadow-sm ease-in-out hover:scale-105 hover:transition-all hover:duration-500";
  return (
    <div className="bg-primary-light/20 text-primary-dark border-primary flex w-full items-center justify-between gap-2 border-b px-6 py-5 shadow-md shadow-sky-50">
      <div onClick={onMenuClick} className="cursor-pointer">
        <SquareChevronRight />
      </div>
      <Link href="/">
        <h1 className="font-playfair cursor-pointer text-3xl font-semibold">
          Luxe-{" "}
          <span className="text-secondary-dark hover:text-secondary ease-in-out hover:transition-all hover:duration-300">
            Store
          </span>
        </h1>
      </Link>
      <div className="flex flex-1 justify-center">
        <div className="relative w-1/2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your product..."
            className="border-primary-muted focus:outline-primary/50 w-full rounded-lg border p-3 text-sm"
          />
          <button className="absolute top-2.5 right-2 cursor-pointer text-sm">
            <Search />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="border-primary hover:bg-primary hover:text-primary-light cursor-pointer rounded-full border px-4 py-1.5 text-lg font-bold transition-all duration-300 hover:scale-105">
          Sign In
        </button>
        <ShoppingCart className={iconClass} />
        <MapPin className={iconClass} />
        <CircleUser className={iconClass} />
      </div>
    </div>
  );
};

export default Navbar;
