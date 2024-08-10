"use client";

import React, { useCallback } from "react";
import { useBiconomy } from "../../../context/BiconomyContext";
import { usePrivy } from "@privy-io/react-auth";
import { ExitIcon } from "@radix-ui/react-icons";
import { Address } from "~~/components/scaffold-eth";
import { useNetworkColor, useTargetNetwork } from "~~/hooks/scaffold-eth";

export function AccountInfoPanel() {
  const networkColor = useNetworkColor();
  const { smartAccountAddress: address } = useBiconomy();
  const { targetNetwork } = useTargetNetwork();
  console.log("address", address);
  const { logout } = usePrivy();
  const handleDisconnectWallet = useCallback(() => {
    logout();
  }, [logout]);

  if (!address) return null;

  return (
    <>
      <div className="mb-4 inline-flex items-center justify-start gap-2">
        <div className="flex flex-col items-center mr-1">
          {/* <Balance address={address} className="min-h-0 h-auto" /> */}
          <span className="text-xs" style={{ color: networkColor }}>
            {targetNetwork.name}
          </span>
        </div>
        <div className="inline-flex flex-col items-start justify-center gap-1">
          <div className="font-inter w-32 text-base font-medium text-white">
            <Address address={`0x${address.slice(2)}`} />
          </div>
        </div>
      </div>
      <hr className="h-px self-stretch border-transparent bg-zinc-400 bg-opacity-20" />
      <button
        type="button"
        aria-label="Disconnect"
        className="my-4 flex w-full items-center justify-between  text-danger"
        onClick={handleDisconnectWallet}
      >
        <span className="font-inter w-32 text-left text-base font-medium ">Disconnect</span>
        <ExitIcon className="-mr-1" />
      </button>
    </>
  );
}
