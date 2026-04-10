"use client";

import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        onMenuClick={() => {
          setOpenSidebar(true);
        }}
        openSidebar={openSidebar}
      ></Navbar>
      <div className="flex flex-1 bg-zinc-50 font-sans dark:bg-black">
        <div
          className={`sticky top-0 max-h-screen shrink-0 self-start overflow-y-auto transition-all duration-500 ease-in-out ${
            openSidebar ? "w-3/12" : "w-0"
          }`}
          style={{
            scrollbarWidth: "auto",
            msOverflowStyle: "none",
          }}
        >
          <Sidebar
            onCloseClick={() => {
              setOpenSidebar(false);
            }}
            openSidebar={openSidebar}
          ></Sidebar>
        </div>

        {/* Main content — takes remaining width */}
        <main className={` ${openSidebar ? "min-w-0" : "min-w-full"} mt-3 flex-1`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
