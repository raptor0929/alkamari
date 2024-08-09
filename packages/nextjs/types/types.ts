export interface IAnnouncement {
  id: string;
  userId: string;
  type: OrderType;
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
  creationDate: Date;
  active: boolean;
}

export enum OrderType {
  Buy,
  Sell,
}

export enum Currency {
  USDT = 0,
  BOB = 1,
}

export enum OrderStatus {
  Initialized,
  InProgress,
  Completed,
  Rejected,
}

export type Order = {
  id: string;
  fromUserId: string;
  toUserId: string;
  orderSize: number;
  status: OrderStatus;
};

export type User = {
  id: string;
  email: string;
};
