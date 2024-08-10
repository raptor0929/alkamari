import React, { ReactNode } from "react";
import AppNavbar from "../Global/AppNavbar";
import FooterComponent from "./FooterComponent";
import { Divider } from "@nextui-org/react";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutComponent = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-app-background min-h-screen flex flex-col p-5">
      <div className="bg-section-bg h-full">
        <AppNavbar />
        <Divider />
        <main>{children}</main>
        <FooterComponent />
      </div>
    </div>
  );
};

export default LayoutComponent;
