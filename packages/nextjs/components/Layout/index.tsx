import React, { ReactNode } from "react";
import AppNavbar from "../Global/AppNavbar";
import FooterComponent from "./FooterComponent";
import { Divider } from "@nextui-org/react";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutComponent = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-app-background min-h-screen flex flex-col p-5 h-screen">
      <div className="bg-section-bg h-14">
        <AppNavbar />
      </div>
      <Divider />
      <main className="h-full bg-section-bg">{children}</main>
      <Divider />
      <div className="h-14 bg-section-bg">
        <FooterComponent />
      </div>
    </div>
  );
};

export default LayoutComponent;
