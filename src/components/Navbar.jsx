import { CircleUser, MapPin, Search, ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  const iconClass =
    "border-primary-muted h-10 w-10 rounded-full border p-2 shadow-sm ease-in-out hover:scale-105 hover:transition-all hover:duration-500";
  return (
    <div className="bg-primary-light text-primary-dark flex w-full items-center justify-between gap-5 px-6 py-5 shadow-sky-50">
      <h1 className="font-playfair text-3xl font-semibold">
        Luxe-{" "}
        <span className="text-secondary-dark hover:text-secondary ease-in-out hover:transition-all hover:duration-300">
          Store
        </span>
      </h1>
      <div className="flex flex-1">
        <div className="relative w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your product..."
            className="border-primary-muted w-full rounded-lg border p-3 text-sm"
          />
          <button className="absolute top-2.5 right-2 cursor-pointer text-sm">
            <Search />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ShoppingCart className={iconClass} />
        <MapPin className={iconClass} />
        <CircleUser className={iconClass} />
      </div>
    </div>
  );
};

export default Navbar;
