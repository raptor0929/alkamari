"use client";

// import Link from "next/link";
import type { NextPage } from "next";
import EscrowUI from "~~/components/EscrowUI";

// import { useAccount } from "wagmi";

// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  // return <>Cripto Wallet</>;
  return <EscrowUI />;
};

export default Home;
