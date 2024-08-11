"use client";

import { BiconomyProvider } from "../context/BiconomyContext";
import { NextUIProvider } from "@nextui-org/react";
// import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { PrivyProvider } from "@privy-io/react-auth";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { arbitrumSepolia } from "viem/chains";
import { WagmiProvider } from "wagmi";
import LayoutComponent from "~~/components/Layout";
// import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
// import ChatContext from "~~/context/ChatContext";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import "~~/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextUIProvider>
          <ThemeProvider enableSystem>
            <PrivyProvider
              appId={process.env.NEXT_PUBLIC_PRIVY_ID || ""}
              config={{
                supportedChains: [arbitrumSepolia],
                embeddedWallets: {
                  createOnLogin: "users-without-wallets",
                  noPromptOnSignature: true,
                },
                loginMethods: ["email", "google", "twitter", "discord", "apple"],
              }}
            >
              <BiconomyProvider>
                {/* <ScaffoldEthAppWithProviders> */}
                <WagmiProvider config={wagmiConfig}>
                  {/* TODO: fix chat */}
                  {/* <ChatContext> */}
                  <QueryClientProvider client={queryClient}>
                    <ProgressBar />
                    <LayoutComponent>{children}</LayoutComponent>
                  </QueryClientProvider>
                  {/* </ChatContext> */}
                </WagmiProvider>

                {/* </ScaffoldEthAppWithProviders> */}
              </BiconomyProvider>
            </PrivyProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
