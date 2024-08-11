export type Announcement = {
  id: string;
  walletAddress: string;
  type: OrderType;
  cryptoCurrency?: CryptoCurrency;
  fiatCurrency?: FiatCurrency;
  cryptoAmount?: number;
  fiatUnitPice: number;
  creationDate?: Date;
  active?: boolean;
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
  Initialized = "Initialized",
  InProgress = "InProgress",
  Confirmation = "Confirmation",
  Completed = "Completed",
  Rejected = "Rejected",
}

export type Order = {
  id: string;
  anounceId: string;
  fromWalletAddress: string;
  toWalletAddress: string;
  orderSize: number;
  Fee: number;
  status: OrderStatus;
};

export type User = {
  id: string;
  email: string;
};
