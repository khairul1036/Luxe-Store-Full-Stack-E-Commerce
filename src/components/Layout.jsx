"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <Navbar
        onMenuClick={() => {
          setOpenSidebar(true);
        }}
        openSidebar={openSidebar}
      ></Navbar>
      <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
        <div className="w-3/12">
          <Sidebar
            onCloseClick={() => {
              setOpenSidebar(false);
            }}
            openSidebar={openSidebar}
          ></Sidebar>
        </div>

        {/* Main content — takes remaining width */}
        <main className={`${openSidebar ? "min-w-0" : "min-w-full"} flex-1 mt-3`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
