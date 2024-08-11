"use client";

import { useEffect, useState } from "react";
import BuyOperation from "../components/BuyOperation";
import SellOperation from "../components/SellOperations";
import { ethers } from "ethers";
import OrderChat from "~~/components/OrderChat";
import { useBiconomy } from "~~/context/BiconomyContext";
import { GetAnnounceDetails } from "~~/repository/AnnouncementRepository";
import { GetOrderDetails } from "~~/repository/OrderRepository";
import { Announcement, Order, OrderStatus, OrderType } from "~~/types/types";

const convertToUint256 = (documentId: string) => {
  console.log({ newId: ethers.utils.keccak256(ethers.utils.toUtf8Bytes(documentId)) });
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(documentId));
};

const BuySellOrder = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [order, setOrder] = useState<Order>();
  const [anounce, setAnounce] = useState<Announcement>();
  const [status, setStatus] = useState<string>(OrderStatus.Initialized);
  const { smartAccountAddress } = useBiconomy();

  const myWalletAddress = smartAccountAddress || "";

  const IsSellerPerspective = () => {
    console.log({ myWalletAddress, order });
    if (order?.fromWalletAddress == myWalletAddress && anounce?.type == OrderType.Sell) return true;
    if (order?.toWalletAddress == myWalletAddress && anounce?.type == OrderType.Buy) return true;
    return false;
  };

  const LoadOrder = async () => {
    // const currentAnonunce: Announcement = {
    //   id: "asdasda",
    //   type: OrderType.Buy,
    //   fiatUnitPice: 10.3,
    //   walletAddress: myWalletAddress,
    //   creationDate: new Date().toString(),
    // };

    // const currentOrder: Order = {
    //   id: "asdasdasda",
    //   anounceId: "asdasda",
    //   toWalletAddress: myWalletAddress,
    //   fromWalletAddress: "0x373001DEe2C98653aaFaA1B87Bb39BD96a768579",
    //   orderSize: 10.2,
    //   Fee: 1,
    //   status: OrderStatus?.InProgress,
    // };
    const currentOrder = await GetOrderDetails(id);
    const currentAnonunce = await GetAnnounceDetails(currentOrder.anounceId);
    setAnounce(currentAnonunce);
    setOrder(currentOrder);
  };

  const handleStatus = (value: string) => {
    setStatus(value);
  };

  useEffect(() => {
    LoadOrder();
  }, []);

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
          <p>{status}</p>

          <div className="col-span-4 text-center font-bold text-xl">
            {!IsSellerPerspective() ? (
              <SellOperation
                orderId={convertToUint256(order.id)}
                status={order.status}
                makerAddress={order.fromWalletAddress}
                takerAddress={order.toWalletAddress}
                value={order.orderSize * 1000000}
                handleStatus={handleStatus}
              />
            ) : (
              <BuyOperation
                orderId={convertToUint256(order.id)}
                status={order.status}
                makerAddress={order.fromWalletAddress}
                takerAddress={order.toWalletAddress}
                value={order.orderSize * 1000000}
                handleStatus={handleStatus}
              />
            )}
          </div>
        </div>
        <div style={{ maxHeight: "400px" }}>
          <OrderChat from={myWalletAddress} members={[order.fromWalletAddress, order.toWalletAddress]} />
        </div>
      </div>
    )
  );
};

export default BuySellOrder;
