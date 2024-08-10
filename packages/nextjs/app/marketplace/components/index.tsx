import React from "react";
import MarketPlaceTable from "./MarketPlaceTable";

interface IMarketPlaceProps {
  type: "buy" | "sell";
}

const MarketPlace = ({ type }: IMarketPlaceProps) => {
  console.log(type);
  return (
    <div className="h-full">
      <MarketPlaceTable />
    </div>
  );
};

export default MarketPlace;
