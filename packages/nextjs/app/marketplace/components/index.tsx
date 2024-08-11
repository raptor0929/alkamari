import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MarketPlaceTable from "./MarketPlaceTable";
import { mockDataAnnouncementsBuy, mockDataAnnouncementsSell } from "./MarketPlaceTable/data";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { GetAllAnnouncements } from "~~/repository/AnnouncementRepository";

interface IMarketPlaceProps {
  type: "buy" | "sell";
}

const MarketPlace = ({ type }: IMarketPlaceProps) => {
  const [ordersData, setOrdersData] = useState(mockDataAnnouncementsBuy);

  const router = useRouter();

  useEffect(() => {
    if (type === "buy") {
      setOrdersData(mockDataAnnouncementsBuy);
    } else {
      setOrdersData(mockDataAnnouncementsSell);
    }
  }, [type]);

  const handleTabChange = (newType: "buy" | "sell") => {
    router.push(`/marketplace?type=${newType}`);
  };

  useEffect(() => {
    const getData = async () => {
      return await GetAllAnnouncements();
    };
    getData().then(data => console.log(data));
  }, []);

  return (
    <div className="h-full">
      <div className="flex h-full flex-col m-4">
        <Tabs
          aria-label="Options"
          classNames={{
            cursor: `${type === "buy" ? "bg-success" : "bg-error"}`,
          }}
          onSelectionChange={key => handleTabChange(key as "buy" | "sell")}
        >
          <Tab key="buy" title="Buy" className="h-full">
            <Card>
              <CardBody className="p-0 m-0">
                <MarketPlaceTable ordersData={ordersData} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="sell" title="Sell">
            <Card>
              <CardBody className="p-0 m-0">
                <MarketPlaceTable ordersData={ordersData} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketPlace;
