"use client";

import React, { useEffect } from "react";
import SidebarComponent from "../Layout/SidebarComponent";
// import { SwitchTheme } from "../SwitchTheme";
import AccountConnect from "./PrivyConnect/AccountConnect";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { FaBell, FaCog, FaUser } from "react-icons/fa";

const AppNavbar = () => {
  const { setTheme } = useTheme();
  //TODO: Fix this, it is necessary to configure default value
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <header className="px-4 py-2 flex justify-between items-center">
      <SidebarComponent />
      <div className="flex items-center space-x-4">
        <Button className="bg-border-color" endContent={<FaBell size={20} />}></Button>
        {/* <Button className="bg-border-color" endContent={<FaGlobe size={20} />}>
          <span className="font-medium">ES</span>
        </Button> */}
        <AccountConnect />
        <Button className="p-2 bg-border-color rounded" endContent={<FaUser size={20} />}></Button>
        <Button className="p-2 bg-border-color rounded" endContent={<FaCog size={20} />}></Button>
        {/* <SwitchTheme className={`pointer-events-auto ${true ? "self-end md:self-auto" : ""}`} /> */}
      </div>
    </header>
  );
};

export default AppNavbar;
