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

const BuyOperation = (props: IProps) => {
  console.log({ buyOperationProps: props });
  const { status, orderId, handleStatus } = props;
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
  const ConfirmPay = async () => {
    console.log("Mark as paid:", { orderId });

    await executeTxn(ALKAMARI_ESCROW_CONTRACT_ADDRESS, {
      abi: parseAbi(["function setMarkAsPaid(uint256)"]),
      functionName: "setMarkAsPaid",
      args: [orderId],
    });
    console.log("FIATCOIN_TRANSFERED");
    handleStatus(OrderStatus.Confirmation);
  };
  switch (status) {
    case OrderStatus.Initialized: {
      return (
        <>
          <p>Esperando que el Vendedor ponga los fondos en custodia.</p>
        </>
      );
    }
    case OrderStatus.InProgress: {
      return (
        <>
          <p>Paga el monto indicado en Bolivianos y luego haz click en Marcar pagado</p>
          <>
            <Button color="primary" onClick={() => ConfirmPay()}>
              Marcar pagado
            </Button>
          </>
        </>
      );
    }
    case OrderStatus.Confirmation: {
      return (
        <>
          <p>Esperando a que el Vendedor confirme la recepcion del pago</p>
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

export default BuyOperation;
