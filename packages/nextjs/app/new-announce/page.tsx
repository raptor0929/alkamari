"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useWallets } from "@privy-io/react-auth";
import { AddAnnouncement } from "~~/repository/AnnouncementRepository";
import { Announcement, CryptoCurrency, FiatCurrency, OrderType } from "~~/types/types";

const NewAnouncement = () => {
  const router = useRouter();
  const [operation, setOperation] = React.useState(OrderType.Buy);
  const { wallets } = useWallets();
  const myWalletAddress = wallets[0]?.address;
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const anounce: Announcement = {
      type: formData.get("type") as OrderType,
      walletAddress: myWalletAddress,
      cryptoCurrency: CryptoCurrency.USDT,
      cryptoAmount: formData.get("cryptoAmount") as unknown as number,
      fiatCurrency: FiatCurrency.BOB,
      fiatUnitPice: formData.get("fiatUnitPice") as unknown as number,
      creationDate: new Date().toString(),
      active: true,
    };

    await AddAnnouncement(anounce);
    router.back();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-4 justify-items-center" style={{ maxWidth: "60%", margin: "0 auto" }}>
        <p className="text-center text-xl">Create New Anouncement</p>
        <Select
          name="type"
          label="Operation Type"
          defaultSelectedKeys={[operation]}
          onChange={e => setOperation(e.target.value as OrderType)}
        >
          {Object.values(OrderType).map(order => (
            <SelectItem key={order}>{order}</SelectItem>
          ))}
        </Select>
        <Input name="cryptoAmount" type="number" label={"Amount of USDT to " + operation} placeholder="0.00" />
        <Input
          name="fiatUnitPice"
          type="number"
          label={"Price of USDT unit to BOB for " + operation}
          placeholder="0.00"
        />
        {/* <Input name="walletAddress" type="hidden" value={myWalletAddress}/> */}
        <Button size="md" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NewAnouncement;
