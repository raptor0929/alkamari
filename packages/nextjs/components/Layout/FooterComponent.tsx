import React from "react";
import { SiEthereum } from "react-icons/si";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white text-center">
      <div className="flex justify-center items-center">
        <SiEthereum className="text-blue-500 mx-1 text-2xl" />
        <p className="mr-2 text-lg font-caveat">Desarrollado para la Hackathon Ethereum Bolivia 2024 🫶 ❤️</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
