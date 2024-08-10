import React from "react";
import HeaderTable from "./Header";
import PaginationTable from "./Pagination";
import MarketPlaceTable from "./Table";

interface IMarketPlaceProps {
  type: "buy" | "sell";
}

const MarketPlace = ({ type }: IMarketPlaceProps) => {
  console.log(type);
  return (
    <div>
      <HeaderTable />
      <MarketPlaceTable />
      <PaginationTable />
    </div>
  );
};

export default MarketPlace;
