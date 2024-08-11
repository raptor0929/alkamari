"use client";

import React from "react";
import { useBiconomy } from "../../../context/BiconomyContext";
import { AccountInfoPanel } from "./AccountInfoPanel";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Address } from "~~/components/scaffold-eth";

export function AccountDropdown() {
  const { smartAccountAddress: address } = useBiconomy();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className=" p-2 ">
          {address && (
            <div className="flex items-center gap-2">
              <Address address={`0x${address.slice(2)}`} />
            </div>
          )}
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={40}
          className="z-20 -mt-9 rounded-lg bg-border-color bg-opacity-90 pl-6 pr-12 pb-2 pt-4 shadow backdrop-blur-2xl"
        >
          <AccountInfoPanel />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
