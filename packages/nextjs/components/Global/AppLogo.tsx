import React from "react";
import { Image } from "@nextui-org/react";

const AppLogo = () => {
  return (
    <div className="flex items-center">
      <span className="text-4xl font-caveat">Alka</span>
      <span className="text-button-hover text-4xl font-caveat">mari</span>
      <Image isBlurred width={50} src="/logoAlka.svg" alt="NextUI Album Cover" className="inline" />
    </div>
  );
};

export default AppLogo;
