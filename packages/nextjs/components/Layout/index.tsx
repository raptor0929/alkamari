import React, { ReactNode } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutComponent = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-white min-h-screen flex flex-col p-5">
      <HeaderComponent />
      <SidebarComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
