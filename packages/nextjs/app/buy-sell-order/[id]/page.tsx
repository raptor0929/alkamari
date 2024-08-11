"use client";

import { useEffect, useState } from "react";
import BuyOperation from "../components/BuyOperation";
import SellOperation from "../components/SellOperations";
import { useWallets } from "@privy-io/react-auth";
import OrderChat from "~~/components/OrderChat";
import { Announcement, Order, OrderStatus, OrderType } from "~~/types/types";

const BuySellOrder = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  const [order, setOrder] = useState<Order>();
  const [anounce, setAnounce] = useState<Announcement>();
  const { wallets } = useWallets();

  const myWalletAddress = wallets[0].address;
  const counterWalletAddress = (
    order?.fromWalletAddress == myWalletAddress ? order?.toWalletAddress : order?.fromWalletAddress
  ) as string;

  const IsSellerPerspective = () => {
    if (order?.fromWalletAddress == myWalletAddress && anounce?.type == OrderType.Sell) return true;
    if (order?.toWalletAddress == myWalletAddress && anounce?.type == OrderType.Buy) return true;
    return false;
  };

  const LoadOrder = async () => {
    const currentAnonunce: Announcement = {
      id: "asdasda",
      type: OrderType.Buy,
      fiatUnitPice: 10.3,
      walletAddress: "test2",
      creationDate: new Date().toString(),
    };
    const currentOrder: Order = {
      id: "asdasdasda",
      anounceId: "asdasda",
      fromWalletAddress: "test2",
      toWalletAddress: "test1",
      orderSize: 10.2,
      Fee: 1,
      status: OrderStatus?.InProgress,
    };

    // const currentOrder = await GetOrderDetails(id);
    // const currentAnonunce = await GetAnnounceDetails(currentOrder.anounceId);
    setAnounce(currentAnonunce);
    setOrder(currentOrder);
  };

  useEffect(() => {
    LoadOrder();
  }, [order]);

  return (
    order &&
    anounce && (
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-4 gap-2">
          <h1 className="col-span-4 text-center text-3xl font-bold">Order Details</h1>
          <p className="font-bold">Order ID: </p>
          <p>{order.id}</p>
          <p className="font-bold">Order Type: </p>
          <p>{anounce.type}</p>
          <p className="font-bold">Order Size (USDT): </p>
          <p>{order.orderSize}</p>
          <p className="font-bold">Unit Price (BOB): </p>
          <p>{anounce.fiatUnitPice}</p>
          <p className="font-bold">Total pay (BOB): </p>
          <p>{order.orderSize * anounce.fiatUnitPice}</p>
          <p className="font-bold">Fee (%): </p>
          <p>{order.Fee}</p>
          <p className="font-bold">Total Fee (USDT): </p>
          <p>{order.orderSize * (order.Fee / 100)}</p>
          <p className="font-bold">Status: </p>
          <p>{order.status}</p>

          <div className="col-span-4 text-center font-bold text-xl">
            {IsSellerPerspective() ? (
              <SellOperation orderId={order.id} status={order.status} />
            ) : (
              <BuyOperation orderId={order.id} status={order.status} />
            )}
          </div>
        </div>
        <div style={{ maxHeight: "400px" }}>
          <OrderChat from={myWalletAddress} to={counterWalletAddress} />
        </div>
      </div>
    )
  );
};

export default BuySellOrder;
