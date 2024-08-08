"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import MarketPlace from "~~/components/MarketPlace";

const MarketPlacePage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const pageType = type === "sell" ? "sell" : "buy";

  return <MarketPlace type={pageType} />;
};

export default MarketPlacePage;
