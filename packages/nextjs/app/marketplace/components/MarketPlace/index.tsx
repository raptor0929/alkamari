import React from "react";
import HeaderTable from "./Header";
import PaginationTable from "./Pagination";
import MarketPlaceTable from "./Table";

interface IMarketPlaceProps {
  type: "buy" | "sell";
}

const MarketPlace = ({ type }: IMarketPlaceProps) => {
  return (
    <div>
      <h1>{type === "buy" ? "Buy Items" : "Sell Items"}</h1>
      <HeaderTable />
      <MarketPlaceTable />
      <PaginationTable />
    </div>
  );
};

export default MarketPlace;
