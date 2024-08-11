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
