export type Announcement = {
  id?: string;
  walletAddress: string;
  type: OrderType;
  cryptoCurrency?: CryptoCurrency.USDT;
  fiatCurrency?: FiatCurrency.BOB;
  cryptoAmount?: number;
  fiatUnitPice: number;
  creationDate: string;
  active?: true;
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
  Initialized = "Initialized", // ACTIVE 1
  InProgress = "InProgress", // CRYPTOS_IN_CUSTODY 2
  Confirmation = "Confirmation", // FIATCOIN_TRANSFERED 3
  Completed = "Completed", // COMPLETED 4
  Rejected = "Rejected",
}

export type Order = {
  id?: string;
  anounceId: string;
  fromWalletAddress: string;
  toWalletAddress: string;
  orderSize: number;
  Fee: number;
  status: OrderStatus;
  correlationId: number;
  documentId?: string;
};

export type User = {
  id: string;
  email: string;
};
