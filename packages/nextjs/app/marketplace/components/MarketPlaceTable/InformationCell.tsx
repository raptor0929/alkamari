import React from "react";
import { AnnouncementsData } from "../../types/types";
import { Button, Card, CardBody } from "@nextui-org/react";

const InformationCell = ({ item, handleExpand }: { item: AnnouncementsData; handleExpand: any }) => {
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex flex-col py-4 px-10">
          <div className="flex justify-between">
            <span>
              <strong>Precio:</strong> {item.price.value} {item.price.currency}
            </span>
            <span>
              <strong>Disponibles:</strong> {item.available.amount} {item.available.currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Tiempo límite:</strong> 45 Min
            </span>
            <span>
              <strong>Comisión:</strong> 0 USDT (1%)
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              <strong>Mín:</strong> {item.limits.min_limit} {item.price.currency}
            </span>
            <span>
              <strong>Máx:</strong> {item.limits.max_limit} {item.price.currency}
            </span>
          </div>
          <div className="mt-2">
            <strong>Términos y Condiciones:</strong>
            <div className="flex justify-between">
              <p className="text-sm">{item?.condition}</p>
              <div className="flex gap-2">
                <Button onPress={() => handleExpand(item.advertiser.name)}>Cancelar</Button>
                <Button
                  className={`${item.action.type === "buy" ? "bg-success" : "bg-error"}`}
                  onPress={() => handleExpand(item.advertiser.name)}
                >
                  <span className="capitalize">{item.action.type === "buy" ? "Comprar" : "Vender"}</span>
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
