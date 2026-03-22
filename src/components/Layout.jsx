"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <Navbar
        onMenuClick={() => {
          setOpenSidebar(true);
        }}
        openSidebar={openSidebar}
      ></Navbar>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="w-3/12">
          <Sidebar
            onCloseClick={() => {
              setOpenSidebar(false);
            }}
            openSidebar={openSidebar}
          ></Sidebar>
        </div>
        <div className="w-9/12"></div>
      </div>
    </div>
  );
};

export default Layout;
