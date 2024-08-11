import { Button } from "@nextui-org/react";
import { OrderStatus } from "~~/types/types";

interface IProps {
  status: OrderStatus;
  orderId: string;
}

const SellOperation = (props: IProps) => {
  const { status, orderId } = props;
  const Lock = () => {
    console.log(orderId);
  };
  const Confirm = () => {
    console.log(orderId);
  };
  switch (status) {
    case OrderStatus.Initialized: {
      return (
        <>
          <p>Click Lock Button to lock the crypto amount</p>
          <Button color="primary" onClick={() => Lock()}>
            Lock
          </Button>
        </>
      );
    }
    case OrderStatus.InProgress: {
      return (
        <>
          <p>Wait For Buyer to complete Bank Transaction</p>
        </>
      );
    }
    case OrderStatus.Confirmation: {
      return (
        <>
          <p>Confirm you Received the expected amount of BOBs</p>
          <Button color="primary" onClick={() => Confirm()}>
            Confirm
          </Button>
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

export default SellOperation;
