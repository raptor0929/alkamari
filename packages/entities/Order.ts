import { OrderStatus } from "~~/types/types";

export type Order = {
    id: string;
    anounceId: string;
    fromWalletAddress: string;
    toWalletAddress: string;
    orderSize: number;
    Fee: number;
    status: OrderStatus;
  };