"use client";

import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  BiconomySmartAccountV2,
  BiconomySmartAccountV2Config,
  LightSigner,
  createSmartAccountClient,
} from "@biconomy/account";
import { ConnectedWallet, usePrivy, useWallets } from "@privy-io/react-auth";
import { arbitrumSepolia } from "viem/chains";

type BiconomyInterface = {
  smartAccount?: BiconomySmartAccountV2;
  smartAccountAddress?: string;
  sessionStorageClient?: unknown;
  updateSessionStorageClient?: (client: BiconomySmartAccountV2) => void;
};

const BiconomyContext = React.createContext<BiconomyInterface>({
  smartAccount: undefined,
  smartAccountAddress: undefined,
  sessionStorageClient: undefined,
  updateSessionStorageClient: undefined,
});

export const useBiconomy = () => {
  return useContext(BiconomyContext);
};

export function BiconomyProvider({ children }: { children: React.ReactNode }) {
  const [smartAccount, setSmartAccount] = useState<BiconomySmartAccountV2 | undefined>();
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | undefined>();
  const [sessionStorageClient, setSessionStorageClient] = useState<unknown>();
  const { wallets } = useWallets();
  const { ready, authenticated } = usePrivy();

  const createBiconomyAccountFromEOA = async (wallet: ConnectedWallet) => {
    await wallet.switchChain(arbitrumSepolia.id);
    const provider = await wallet.getEthersProvider();
    const signer = provider.getSigner();

    console.log({
      bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL,
      biconomyPaymasterApiKey: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY,
      rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
    });

    const userSmartAccount = await createSmartAccountClient({
      signer: signer as LightSigner,
      bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL,
      biconomyPaymasterApiKey: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY,
      paymasterUrl: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL,
      rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
    } as BiconomySmartAccountV2Config);

    const address = await userSmartAccount.getAccountAddress();

    setSmartAccount(userSmartAccount);
    setSmartAccountAddress(address);
  };

  useEffect(() => {
    if (!ready || !authenticated) return;
    const embeddedWallet = wallets.find(wallet => wallet.walletClientType === "privy");
    if (embeddedWallet && !smartAccount) createBiconomyAccountFromEOA(embeddedWallet);
  }, [wallets, ready, authenticated, smartAccount]);

  const updateSessionStorageClient = useCallback(
    (client: BiconomySmartAccountV2) => {
      setSessionStorageClient(client);
    },
    [setSessionStorageClient],
  );

  const contextValue = useMemo(
    () => ({
      smartAccount,
      smartAccountAddress,
      sessionStorageClient,
      updateSessionStorageClient,
    }),
    [smartAccount, smartAccountAddress, sessionStorageClient, updateSessionStorageClient],
  );

  return <BiconomyContext.Provider value={contextValue}>{children}</BiconomyContext.Provider>;
}
