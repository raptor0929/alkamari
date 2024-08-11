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
          <p>Presiona Custodiar para custodiar los fondos</p>
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
