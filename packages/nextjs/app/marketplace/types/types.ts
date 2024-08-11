export type Advertiser = {
  name: string;
  verification: boolean;
  reputation: "star" | "new" | "trusted";
  transactions: number;
};

export type Price = {
  value: number;
  currency: string;
};

export type Payment = {
  methods: string[];
};

export type Limits = {
  min_limit: number;
  max_limit: number;
};

export type Available = {
  amount: number;
  currency: string;
  network: string;
};

export type Action = {
  type: "buy" | "sell";
  status: "available" | "limited";
};

export type AnnouncementsData = {
  announcementId: string;
  advertiser: Advertiser;
  price: Price;
  payment: Payment;
  limits: Limits;
  available: Available;
  action: Action;
  condition?: string;
};
