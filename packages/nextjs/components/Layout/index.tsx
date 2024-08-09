import React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";

const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
