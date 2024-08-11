import { OrderType, Currency } from "./enums"

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

