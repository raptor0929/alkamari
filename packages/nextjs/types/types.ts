export type Announcement = {
  id: string;
  walletAddress: string;
  type: OrderType;
  cryptoCurrency: CryptoCurrency;
  fiatCurrency: FiatCurrency;
  cryptoAmount: number;
  fiatUnitPice: number;
  creationDate: Date;
  active: boolean;
};

export enum OrderType {
  Buy = "Buy",
  Sell = "Sell",
}

export enum CryptoCurrency {
  USDT = "USDT",
}
export enum FiatCurrency {
  BOB = "BOB",
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
