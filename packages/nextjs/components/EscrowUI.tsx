"use client";

import React, { useState } from "react";
//
import { PaymasterMode } from "@biconomy/account";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { encodeFunctionData, parseAbi } from "viem";
import { useBiconomy } from "~~/context/BiconomyContext";

const withSponsorship = {
  paymasterServiceData: { mode: PaymasterMode.SPONSORED },
};

const ALKAMARI_ESCROW_CONTRACT_ADDRESS = "0x65E277875eB98136fD54003ea668630fe89e024d";
const USDT_CONTRACT_ADDRESS = "0x7058f6D05fC49D0889a137a0A695AaE7e19D45bE";

const EscrowUI = () => {
  const [escrowState, setEscrowState] = useState("UNKNOWN");
  const [orderId, setOrderId] = useState("1");
  const [takerAddress, setTakerAddress] = useState("");
  const [value, setValue] = useState("10000000");
  const [currency, setCurrency] = useState("");
  const { smartAccount } = useBiconomy();

  const executeTxn = async (cAddr: string, data: any) => {
    if (!smartAccount) return;

    const tx = {
      to: cAddr,
      data: encodeFunctionData(data),
    };

    const { wait } = await smartAccount.sendTransaction(tx, {
      ...withSponsorship,
    });

    const { success, receipt, logs } = await wait();
    if (success) {
      console.log("SUCCESSFUL TRANSACTION!", receipt);
    } else {
      console.log("TRANSACTION ERROR", receipt, logs);
    }
  };

  const createEscrow = async () => {
    console.log("Creating escrow:", { orderId, takerAddress, value, currency });

    await executeTxn(USDT_CONTRACT_ADDRESS, {
      abi: parseAbi(["function approve(address,uint256)"]),
      functionName: "approve",
      args: [ALKAMARI_ESCROW_CONTRACT_ADDRESS, value],
    });
    console.log("TOKEN USDT APPROVED BY WALLET");
    console.log({ orderId, takerAddress, value, currency, maker: true, taker: true });

    await executeTxn(ALKAMARI_ESCROW_CONTRACT_ADDRESS, {
      abi: parseAbi(["function createEscrow(uint256,address,uint256,address,bool,bool)"]),
      functionName: "createEscrow",
      args: [orderId, takerAddress, value, currency, true, true],
    });
    console.log("CRYPTOS_IN_CUSTODY");
    setEscrowState("CRYPTOS_IN_CUSTODY");
  };

  const markAsPaid = async () => {
    console.log("Mark as paid:", { orderId });

    await executeTxn(ALKAMARI_ESCROW_CONTRACT_ADDRESS, {
      abi: parseAbi(["function setMarkAsPaid(uint256)"]),
      functionName: "setMarkAsPaid",
      args: [orderId],
    });
    console.log("FIATCOIN_TRANSFERED");
    setEscrowState("FIATCOIN_TRANSFERED");
  };

  const releaseEscrow = async () => {
    console.log("Release escrow:", { orderId });

    await executeTxn(ALKAMARI_ESCROW_CONTRACT_ADDRESS, {
      abi: parseAbi(["function releaseEscrow(uint256)"]),
      functionName: "releaseEscrow",
      args: [orderId],
    });
    console.log("COMPLETED");
    setEscrowState("COMPLETED");
  };

  const refundMaker = () => {
    setEscrowState("REFUND");
  };

  const cancelEscrow = () => {
    setEscrowState("CANCEL_MAKER");
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <h2 className="text-2xl font-bold">Escrow Flow Test</h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <div>
            <Input label="Order ID" id="orderId" value={orderId} onChange={e => setOrderId(e.target.value)} />
          </div>
          <div>
            <Input
              label="Take Address"
              id="takerAddress"
              value={takerAddress}
              onChange={e => setTakerAddress(e.target.value)}
            />
          </div>
          <div>
            <Input label="Value" id="value" type="number" value={value} onChange={e => setValue(e.target.value)} />
          </div>
          <div>
            <Input label="Currency" id="currency" value={currency} onChange={e => setCurrency(e.target.value)} />
          </div>
          <div className="pt-4">
            <p>
              <strong>Current State:</strong> {escrowState}
            </p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col space-y-2">
        <Button onClick={createEscrow} className="w-full">
          Create Escrow
        </Button>
        <Button onClick={markAsPaid} className="w-full">
          Mark as Paid
        </Button>
        <Button onClick={releaseEscrow} className="w-full">
          Release Escrow
        </Button>
        <Button onClick={refundMaker} className="w-full">
          Refund Maker
        </Button>
        <Button onClick={cancelEscrow} className="w-full">
          Cancel Escrow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EscrowUI;
