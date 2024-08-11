import React from "react";
import { AnnouncementsData } from "../../types/types";
import { Button, Card, CardBody } from "@nextui-org/react";

const InformationCell = ({
  item,
  handleExpand,
  handleBuySell,
}: {
  item: AnnouncementsData;
  handleExpand: any;
  handleBuySell: any;
}) => {
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex flex-col py-4 px-10">
          <div className="flex justify-between">
            <span>
              <strong>Precio:</strong> {item?.fiatUnitPice} {item?.fiatCurrency}
            </span>
            <span>
              <strong>Disponibles:</strong> {item?.cryptoAmount} {item?.cryptoCurrency}
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Tiempo límite:</strong> 15 Min
            </span>
            <span>
              <strong>Comisión:</strong> (1%)
            </span>
          </div>
          {/* <div className="flex justify-between">
            <span>
              <strong>Mín:</strong> {item?.limits?.min_limit} {item?.price?.currency}
            </span>
            <span>
              <strong>Máx:</strong> {item?.limits?.max_limit} {item?.price?.currency}
            </span>
          </div> */}
          <div className="mt-2">
            <strong>ID:</strong>
            <div className="flex justify-between">
              <p className="text-sm">{item?.id}</p>
              <div className="flex gap-2">
                <Button onPress={() => handleExpand(item.id)}>Cancelar</Button>
                <Button
                  className={`${item?.type === "Buy" ? "bg-success-button" : "bg-error"}`}
                  onPress={() => {
                    // handleExpand(item.announcementId);
                    handleBuySell(item?.id);
                  }}
                >
                  <span className="capitalize">{item?.type === "Buy" ? "Comprar" : "Vender"}</span>
                  USD
                </Button>
              </div>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default InformationCell;
