import { Button } from "@nextui-org/react";
import { OrderStatus } from "~~/types/types";

interface IProps {
  status: OrderStatus;
  orderId: string;
}

const BuyOperation = (props: IProps) => {
  const { status, orderId } = props;
  const ConfirmPay = () => {
    console.log(orderId);
  };
  switch (status) {
    case OrderStatus.Initialized: {
      return (
        <>
          <p>Waiting for Seller to lock the cryptos</p>
        </>
      );
    }
    case OrderStatus.InProgress: {
      return (
        <>
          <p>Pay the ammount required for the transaction and click confirm button</p>
          <>
            <Button color="primary" onClick={() => ConfirmPay()}>
              Confirm
            </Button>
          </>
        </>
      );
    }
    case OrderStatus.Confirmation: {
      return (
        <>
          <p>Waiting For Seller to Confirm the Pay</p>
        </>
      );
    }
    case OrderStatus.Completed: {
      return (
        <>
          <p>Your Transcation completed successfully</p>
        </>
      );
    }
    case OrderStatus.Rejected: {
      return <>Rejected</>;
    }
  }
};

export default BuyOperation;
