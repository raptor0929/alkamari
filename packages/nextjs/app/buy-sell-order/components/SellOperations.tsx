import { PaymasterMode } from "@biconomy/account";
import { Button } from "@nextui-org/react";
import { encodeFunctionData, parseAbi } from "viem";
import { useBiconomy } from "~~/context/BiconomyContext";
import { OrderStatus } from "~~/types/types";

interface IProps {
  status: OrderStatus;
  orderId: string;
  makerAddress: string;
  takerAddress: string;
  value: number;
  handleStatus: (x: string) => void;
}

const withSponsorship = {
  paymasterServiceData: { mode: PaymasterMode.SPONSORED },
};

const ALKAMARI_ESCROW_CONTRACT_ADDRESS = "0x65E277875eB98136fD54003ea668630fe89e024d";
const USDT_CONTRACT_ADDRESS = "0x7058f6D05fC49D0889a137a0A695AaE7e19D45bE";
const currency = ALKAMARI_ESCROW_CONTRACT_ADDRESS;

const SellOperation = (props: IProps) => {
  console.log({ sellerOperationProps: props });
  const { status, orderId, takerAddress, value, handleStatus } = props;
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
  const Lock = async () => {
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
    handleStatus(OrderStatus.InProgress);
  };
  const Confirm = async () => {
    console.log("Release escrow:", { orderId });

    await executeTxn(ALKAMARI_ESCROW_CONTRACT_ADDRESS, {
      abi: parseAbi(["function releaseEscrow(uint256)"]),
      functionName: "releaseEscrow",
      args: [orderId],
    });
    console.log("COMPLETED");
    handleStatus(OrderStatus.Completed);
  };
  switch (status) {
    case OrderStatus.Initialized: {
      return (
        <>
          <p>Click en Custodiar para custodiar los fondos</p>
          <Button color="primary" onClick={() => Lock()}>
            Custodiar
          </Button>
        </>
      );
    }
    case OrderStatus.InProgress: {
      return (
        <>
          <p>Espera a que el Comprador complete el pago en Bolivianos</p>
        </>
      );
    }
    case OrderStatus.Confirmation: {
      return (
        <>
          <p>
            El vendedor marco la orden como pagada. Verifica que recibiste el monto en Bolivianos. Si todo esta bien
            libera los fondos
          </p>
          <Button color="primary" onClick={() => Confirm()}>
            Liberar
          </Button>
        </>
      );
    }
    case OrderStatus.Completed: {
      return (
        <>
          <p>Tu transaccion termino exitosamente</p>
        </>
      );
    }
    case OrderStatus.Rejected: {
      return <>Rejected</>;
    }
  }
};

export default SellOperation;
