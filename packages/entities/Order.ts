import { OrderStatus } from "./enums"

export type Order = {
    id: string;
    anounceId: string;
    fromWalletAddress: string;
    toWalletAddress: string;
    orderSize: number;
    Fee: number;
    status: OrderStatus;
  };