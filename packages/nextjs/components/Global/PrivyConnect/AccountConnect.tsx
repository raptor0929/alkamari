"use client";

import React from "react";
import { AccountDropdown } from "./AccountDropdown";
import { AccountInfoPanel } from "./AccountInfoPanel";
import { Button } from "@nextui-org/react";
import { usePrivy } from "@privy-io/react-auth";
import { arbitrumSepolia } from "viem/chains";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

/**
 * AccountConnect
 *  - Connects to the wallet
 *  - Disconnects from the wallet
 *  - Displays the wallet network
 */
const AccountConnect = () => {
  const { targetNetwork } = useTargetNetwork();
  const chainId = targetNetwork.id;
  const { ready, authenticated, login, logout } = usePrivy();

  const handleStart = () => {
    if (!authenticated) login();
  };

  return (
    <div
      className="flex flex-grow"
      {...(!ready &&
        authenticated && {
          "aria-hidden": true,
          style: {
            opacity: 0,
            pointerEvents: "none",
            userSelect: "none",
          },
        })}
    >
      {(() => {
        if (!authenticated) {
          return (
            <Button className="font-urbanist text-black bg-border-color" onClick={handleStart}>
              Launch
            </Button>
          );
        }

        if (ready && authenticated && chainId !== arbitrumSepolia.id) {
          return (
            <button onClick={logout} type="button">
              Wrong network
            </button>
          );
        }

        return (
          <>
            <div className="flex flex-grow flex-col md:hidden">
              <AccountInfoPanel />
            </div>
            <div className="flex md:block">
              <AccountDropdown />
            </div>
          </>
        );
      })()}
    </div>
  );
};

export default AccountConnect;
