// import { AnnouncementsData } from "../../types/types";

// export const mockDataAnnouncementsBuy: AnnouncementsData[] = [
//   {
//     announcementId: "buy-001",
//     advertiser: {
//       name: "benji",
//       verification: true,
//       reputation: "star",
//       transactions: 329,
//     },
//     price: {
//       value: 0.948,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Unión", "BUNQ", "VIVID"],
//     },
//     limits: {
//       min_limit: 649,
//       max_limit: 649,
//     },
//     available: {
//       amount: 685,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Prefer contact via WhatsApp before making a purchase.",
//   },
//   {
//     announcementId: "buy-002",
//     advertiser: {
//       name: "wincharts",
//       verification: true,
//       reputation: "star",
//       transactions: 486,
//     },
//     price: {
//       value: 0.949,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["BancoSol", "Wise", "N26", "Rev"],
//     },
//     limits: {
//       min_limit: 100,
//       max_limit: 3321.5,
//     },
//     available: {
//       amount: 3500,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "limited",
//     },
//     condition: "Please confirm availability before transferring funds.",
//   },
//   {
//     announcementId: "buy-003",
//     advertiser: {
//       name: "crypto_master",
//       verification: false,
//       reputation: "new",
//       transactions: 150,
//     },
//     price: {
//       value: 0.95,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Fassil", "Skrill"],
//     },
//     limits: {
//       min_limit: 50,
//       max_limit: 1000,
//     },
//     available: {
//       amount: 1200,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Transfers only between 9 AM to 5 PM on weekdays.",
//   },
//   {
//     announcementId: "buy-004",
//     advertiser: {
//       name: "crypto_dealer",
//       verification: true,
//       reputation: "star",
//       transactions: 654,
//     },
//     price: {
//       value: 0.947,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Mercantil Santa Cruz", "N26"],
//     },
//     limits: {
//       min_limit: 500,
//       max_limit: 5000,
//     },
//     available: {
//       amount: 2000,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Please contact me before placing an order.",
//   },
//   {
//     announcementId: "buy-005",
//     advertiser: {
//       name: "usdt_king",
//       verification: false,
//       reputation: "trusted",
//       transactions: 1032,
//     },
//     price: {
//       value: 0.946,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Económico", "Bank Transfer"],
//     },
//     limits: {
//       min_limit: 100,
//       max_limit: 10000,
//     },
//     available: {
//       amount: 5000,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Quick transactions are preferred. Please be prompt.",
//   },
//   {
//     announcementId: "buy-006",
//     advertiser: {
//       name: "p2p_trader",
//       verification: true,
//       reputation: "star",
//       transactions: 256,
//     },
//     price: {
//       value: 0.951,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Payoneer", "Wise", "Banco Ganadero"],
//     },
//     limits: {
//       min_limit: 200,
//       max_limit: 2500,
//     },
//     available: {
//       amount: 1800,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Payment confirmation is required before completing the trade.",
//   },
//   {
//     announcementId: "buy-009",
//     advertiser: {
//       name: "benji",
//       verification: true,
//       reputation: "star",
//       transactions: 329,
//     },
//     price: {
//       value: 0.948,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Unión", "BUNQ", "VIVID"],
//     },
//     limits: {
//       min_limit: 649,
//       max_limit: 649,
//     },
//     available: {
//       amount: 685,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Prefer contact via WhatsApp before making a purchase.",
//   },
//   {
//     announcementId: "buy-011",
//     advertiser: {
//       name: "benji",
//       verification: true,
//       reputation: "star",
//       transactions: 329,
//     },
//     price: {
//       value: 0.948,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Unión", "BUNQ", "VIVID"],
//     },
//     limits: {
//       min_limit: 649,
//       max_limit: 649,
//     },
//     available: {
//       amount: 685,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Prefer contact via WhatsApp before making a purchase.",
//   },
//   {
//     announcementId: "buy-019",
//     advertiser: {
//       name: "benji",
//       verification: true,
//       reputation: "star",
//       transactions: 329,
//     },
//     price: {
//       value: 0.948,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Unión", "BUNQ", "VIVID"],
//     },
//     limits: {
//       min_limit: 649,
//       max_limit: 649,
//     },
//     available: {
//       amount: 685,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Prefer contact via WhatsApp before making a purchase.",
//   },
//   {
//     announcementId: "buy-021",
//     advertiser: {
//       name: "benji",
//       verification: true,
//       reputation: "star",
//       transactions: 329,
//     },
//     price: {
//       value: 0.948,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Unión", "BUNQ", "VIVID"],
//     },
//     limits: {
//       min_limit: 649,
//       max_limit: 649,
//     },
//     available: {
//       amount: 685,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "buy",
//       status: "available",
//     },
//     condition: "Prefer contact via WhatsApp before making a purchase.",
//   },
// ];

// export const mockDataAnnouncementsSell: AnnouncementsData[] = [
//   {
//     announcementId: "sell-001",
//     advertiser: {
//       name: "crypto_seller",
//       verification: true,
//       reputation: "star",
//       transactions: 450,
//     },
//     price: {
//       value: 0.942,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["SEPA", "Revolut", "Banco Ganadero"],
//     },
//     limits: {
//       min_limit: 100,
//       max_limit: 5000,
//     },
//     available: {
//       amount: 2500,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "sell",
//       status: "available",
//     },
//     condition: "Immediate payment confirmation required upon sale.",
//   },
//   {
//     announcementId: "sell-002",
//     advertiser: {
//       name: "usd_seller",
//       verification: false,
//       reputation: "new",
//       transactions: 200,
//     },
//     price: {
//       value: 0.943,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["Banco Económico", "Wise"],
//     },
//     limits: {
//       min_limit: 50,
//       max_limit: 2000,
//     },
//     available: {
//       amount: 1500,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "sell",
//       status: "available",
//     },
//     condition: "Please notify me once the payment is made.",
//   },
//   {
//     announcementId: "sell-003",
//     advertiser: {
//       name: "fast_trader",
//       verification: true,
//       reputation: "trusted",
//       transactions: 850,
//     },
//     price: {
//       value: 0.944,
//       currency: "BOB",
//     },
//     payment: {
//       methods: ["PayPal", "Skrill", "Banco Mercantil Santa Cruz"],
//     },
//     limits: {
//       min_limit: 500,
//       max_limit: 3000,
//     },
//     available: {
//       amount: 1800,
//       currency: "USDT",
//       network: "BNB Chain",
//     },
//     action: {
//       type: "sell",
//       status: "available",
//     },
//     condition: "Quick and secure trades preferred.",
//   },
// ];
