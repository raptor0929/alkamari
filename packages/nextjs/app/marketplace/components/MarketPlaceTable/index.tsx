import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AnnouncementsData } from "../../types/types";
import InformationCell from "./InformationCell";
import PaginationTable from "./PaginationTable";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const MarketPlaceTable = ({ ordersData }: { ordersData: AnnouncementsData[] }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [expandedKey, setExpandedKey] = useState<React.Key | null>(null);
  const rowsPerPage = 7;

  const pages = Math.ceil(ordersData?.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return ordersData?.slice(start, end);
  }, [page, ordersData]);

  const handleExpand = (key: React.Key) => {
    setExpandedKey(expandedKey === key ? null : key);
  };

  const handleBuySell = (key: any) => {
    router.push(`/buy-sell-order/${key}`, { scroll: false });
  };

  return (
    <Table
      bottomContent={<PaginationTable page={page} pages={pages} setPage={setPage} />}
      classNames={{
        base: "p-0 m-0",
        table: "bg-section-bg",
      }}
      removeWrapper={true}
    >
      <TableHeader>
        <TableColumn key="id" className="w-1/6">
          ID
        </TableColumn>
        <TableColumn key="date" className="w-1/6">
          Fecha
        </TableColumn>
        <TableColumn key="price" className="w-1/6">
          Precio
        </TableColumn>
        <TableColumn key="payment" className="w-1/6">
          Disponible
        </TableColumn>
        <TableColumn key="limits" className="w-1/6">
          Pago
        </TableColumn>
        {/* <TableColumn key="available" className="w-1/6">
          Activo
        </TableColumn> */}
        <TableColumn key="actions" className="w-auto">
          {""}
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {items?.map(item => {
          if (expandedKey === item?.id) {
            return (
              <TableRow key={item?.id}>
                <TableCell colSpan={6} className="bg-bg-200">
                  <InformationCell item={item} handleExpand={handleExpand} handleBuySell={handleBuySell} />
                </TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                {/* <TableCell className="hidden">{""}</TableCell> */}
              </TableRow>
            );
          } else {
            return (
              <TableRow key={item?.id}>
                <TableCell>{item?.id}</TableCell>
                <TableCell className="flex gap-4 items-center ">
                  <span className="text-sm">{/* {item?.advertiser?.transactions} {item?.creationDate} */}</span>
                </TableCell>
                <TableCell>
                  {item?.fiatUnitPice} {item?.fiatCurrency}
                </TableCell>
                <TableCell>
                  {/* <ul>{item?.payment?.methods?.map((method, index) => <li key={index}>{method}</li>)}</ul> */}
                  <span>
                    {item?.cryptoAmount} {item?.cryptoCurrency}
                  </span>
                </TableCell>
                <TableCell>
                  <span>Pago por QR</span>
                  {/* <ul>
                    <li>Max :{item?.limits?.max_limit}</li>
                    <li>min :{item?.limits?.min_limit}</li>
                  </ul> */}
                </TableCell>
                {/* <TableCell>
                  <ul>
                    <li> Cantidad: {item?.available?.amount} </li>
                    <li> Moneda: {item?.available?.currency} </li>
                    <li> Red: {item?.available?.network} </li>
                  </ul>
                </TableCell> */}
                <TableCell>
                  <Button
                    className={`${item?.type === "Buy" ? "bg-success-button" : "bg-error"}`}
                    onPress={() => handleExpand(item?.id)}
                    key="action"
                  >
                    <span className="capitalize">{item?.type === "Buy" ? "Comprar" : "Vender"}</span>
                    USD
                  </Button>
                </TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    </Table>
  );
};

export default MarketPlaceTable;
