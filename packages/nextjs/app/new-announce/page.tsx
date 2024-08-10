"use client";

import React, { FormEvent } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { OrderType } from "~~/types/types";

const NewAnouncement = () => {
  const [operation, setOperation] = React.useState(OrderType.Buy);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    console.log(data);
    // ...
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-4 justify-items-center" style={{ maxWidth: "60%", margin: "0 auto" }}>
        <p className="text-center text-xl">Create New Anouncement</p>
        <Select
          label="Operation Type"
          defaultSelectedKeys={[operation]}
          onChange={e => setOperation(e.target.value as OrderType)}
        >
          {Object.values(OrderType).map(order => (
            <SelectItem key={order}>{order}</SelectItem>
          ))}
        </Select>
        <Input type="number" label={"Amount of USDT to " + operation} placeholder="0.00" />
        <Input type="number" label={"Price of USDT unit to BOB for " + operation} placeholder="0.00" />
        <Button size="md" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NewAnouncement;
