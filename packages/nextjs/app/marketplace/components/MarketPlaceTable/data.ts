import { UserData } from "../../types/types";

export const mockDataOrdersBuy: UserData[] = [
  {
    advertiser: {
      name: "benji",
      verification: true,
      reputation: "star",
      transactions: 329,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["MONESE", "BUNQ", "VIVID"],
    },
    limits: {
      min_limit: 649,
      max_limit: 649,
    },
    available: {
      amount: 685,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "wincharts",
      verification: true,
      reputation: "star",
      transactions: 486,
    },
    price: {
      value: 0.949,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPAinst", "Wise", "N26", "Rev"],
    },
    limits: {
      min_limit: 100,
      max_limit: 3321.5,
    },
    available: {
      amount: 3500,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "limited",
    },
  },
  {
    advertiser: {
      name: "crypto_master",
      verification: false,
      reputation: "new",
      transactions: 150,
    },
    price: {
      value: 0.95,
      currency: "EUR",
    },
    payment: {
      methods: ["PayPal", "Skrill"],
    },
    limits: {
      min_limit: 50,
      max_limit: 1000,
    },
    available: {
      amount: 1200,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "crypto_dealer",
      verification: true,
      reputation: "star",
      transactions: 654,
    },
    price: {
      value: 0.947,
      currency: "EUR",
    },
    payment: {
      methods: ["Revolut", "N26"],
    },
    limits: {
      min_limit: 500,
      max_limit: 5000,
    },
    available: {
      amount: 2000,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "usdt_king",
      verification: false,
      reputation: "trusted",
      transactions: 1032,
    },
    price: {
      value: 0.946,
      currency: "EUR",
    },
    payment: {
      methods: ["Bank Transfer"],
    },
    limits: {
      min_limit: 100,
      max_limit: 10000,
    },
    available: {
      amount: 5000,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "p2p_trader",
      verification: true,
      reputation: "star",
      transactions: 256,
    },
    price: {
      value: 0.951,
      currency: "EUR",
    },
    payment: {
      methods: ["Payoneer", "Wise"],
    },
    limits: {
      min_limit: 200,
      max_limit: 2500,
    },
    available: {
      amount: 1800,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "euro_trader",
      verification: false,
      reputation: "new",
      transactions: 98,
    },
    price: {
      value: 0.952,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPA", "Revolut"],
    },
    limits: {
      min_limit: 300,
      max_limit: 1500,
    },
    available: {
      amount: 900,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "quick_seller",
      verification: true,
      reputation: "star",
      transactions: 785,
    },
    price: {
      value: 0.947,
      currency: "EUR",
    },
    payment: {
      methods: ["Skrill", "PayPal"],
    },
    limits: {
      min_limit: 400,
      max_limit: 4500,
    },
    available: {
      amount: 2200,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "best_rate",
      verification: true,
      reputation: "star",
      transactions: 920,
    },
    price: {
      value: 0.945,
      currency: "EUR",
    },
    payment: {
      methods: ["Bank Transfer", "Revolut"],
    },
    limits: {
      min_limit: 100,
      max_limit: 3500,
    },
    available: {
      amount: 3000,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "safe_trade",
      verification: false,
      reputation: "trusted",
      transactions: 420,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPA", "Payoneer"],
    },
    limits: {
      min_limit: 50,
      max_limit: 2000,
    },
    available: {
      amount: 1200,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "pro_trader",
      verification: true,
      reputation: "star",
      transactions: 1400,
    },
    price: {
      value: 0.944,
      currency: "EUR",
    },
    payment: {
      methods: ["Wise", "N26", "PayPal"],
    },
    limits: {
      min_limit: 500,
      max_limit: 5000,
    },
    available: {
      amount: 3500,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "fast_cash",
      verification: true,
      reputation: "star",
      transactions: 600,
    },
    price: {
      value: 0.946,
      currency: "EUR",
    },
    payment: {
      methods: ["Revolut", "Skrill"],
    },
    limits: {
      min_limit: 150,
      max_limit: 2000,
    },
    available: {
      amount: 1700,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "benji",
      verification: true,
      reputation: "star",
      transactions: 329,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["MONESE", "BUNQ", "VIVID"],
    },
    limits: {
      min_limit: 649,
      max_limit: 649,
    },
    available: {
      amount: 685,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "benji",
      verification: true,
      reputation: "star",
      transactions: 329,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["MONESE", "BUNQ", "VIVID"],
    },
    limits: {
      min_limit: 649,
      max_limit: 649,
    },
    available: {
      amount: 685,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "benji",
      verification: true,
      reputation: "star",
      transactions: 329,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["MONESE", "BUNQ", "VIVID"],
    },
    limits: {
      min_limit: 649,
      max_limit: 649,
    },
    available: {
      amount: 685,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "benji",
      verification: true,
      reputation: "star",
      transactions: 329,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["MONESE", "BUNQ", "VIVID"],
    },
    limits: {
      min_limit: 649,
      max_limit: 649,
    },
    available: {
      amount: 685,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "benji",
      verification: true,
      reputation: "star",
      transactions: 329,
    },
    price: {
      value: 0.948,
      currency: "EUR",
    },
    payment: {
      methods: ["MONESE", "BUNQ", "VIVID"],
    },
    limits: {
      min_limit: 649,
      max_limit: 649,
    },
    available: {
      amount: 685,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "buy",
      status: "available",
    },
  },
];

export const mockDataOrdersSell: UserData[] = [
  {
    advertiser: {
      name: "crypto_seller",
      verification: true,
      reputation: "star",
      transactions: 450,
    },
    price: {
      value: 0.942,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPA", "Revolut"],
    },
    limits: {
      min_limit: 100,
      max_limit: 5000,
    },
    available: {
      amount: 2500,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "usd_seller",
      verification: false,
      reputation: "new",
      transactions: 200,
    },
    price: {
      value: 0.943,
      currency: "EUR",
    },
    payment: {
      methods: ["Bank Transfer", "Wise"],
    },
    limits: {
      min_limit: 50,
      max_limit: 2000,
    },
    available: {
      amount: 1500,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "fast_trader",
      verification: true,
      reputation: "trusted",
      transactions: 850,
    },
    price: {
      value: 0.944,
      currency: "EUR",
    },
    payment: {
      methods: ["PayPal", "Skrill"],
    },
    limits: {
      min_limit: 500,
      max_limit: 3000,
    },
    available: {
      amount: 1800,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "binance_trader",
      verification: true,
      reputation: "star",
      transactions: 650,
    },
    price: {
      value: 0.941,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPAinst", "N26"],
    },
    limits: {
      min_limit: 200,
      max_limit: 4500,
    },
    available: {
      amount: 2800,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "usdt_seller",
      verification: false,
      reputation: "trusted",
      transactions: 500,
    },
    price: {
      value: 0.94,
      currency: "EUR",
    },
    payment: {
      methods: ["Revolut", "Wise"],
    },
    limits: {
      min_limit: 150,
      max_limit: 3500,
    },
    available: {
      amount: 3200,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "secure_trader",
      verification: true,
      reputation: "star",
      transactions: 700,
    },
    price: {
      value: 0.939,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPA", "Revolut"],
    },
    limits: {
      min_limit: 100,
      max_limit: 2000,
    },
    available: {
      amount: 1200,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "crypto_exchange",
      verification: true,
      reputation: "star",
      transactions: 800,
    },
    price: {
      value: 0.938,
      currency: "EUR",
    },
    payment: {
      methods: ["Wise", "Skrill"],
    },
    limits: {
      min_limit: 300,
      max_limit: 4000,
    },
    available: {
      amount: 2400,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "quick_exchange",
      verification: false,
      reputation: "new",
      transactions: 100,
    },
    price: {
      value: 0.941,
      currency: "EUR",
    },
    payment: {
      methods: ["Bank Transfer", "Revolut"],
    },
    limits: {
      min_limit: 50,
      max_limit: 1500,
    },
    available: {
      amount: 1100,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
  {
    advertiser: {
      name: "trusted_seller",
      verification: true,
      reputation: "trusted",
      transactions: 500,
    },
    price: {
      value: 0.937,
      currency: "EUR",
    },
    payment: {
      methods: ["SEPA", "Payoneer"],
    },
    limits: {
      min_limit: 150,
      max_limit: 3000,
    },
    available: {
      amount: 2000,
      currency: "USDT",
      network: "BNB Chain",
    },
    action: {
      type: "sell",
      status: "available",
    },
  },
];
