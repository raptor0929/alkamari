import React, { useState } from "react";
import { AnnouncementsData } from "../../types/types";
import InformationCell from "./InformationCell";
import PaginationTable from "./PaginationTable";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";

const MarketPlaceTable = ({ ordersData }: { ordersData: AnnouncementsData[] }) => {
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
    setExpandedKey(expandedKey === key ? null : key); // Toggle the accordion
  };

  return (
    <Table
      bottomContent={<PaginationTable page={page} pages={pages} setPage={setPage} />}
      classNames={{
        base: "p-0 m-0",
      }}
      removeWrapper={true}
    >
      <TableHeader>
        <TableColumn key="announcement" className="w-2/6">
          Anunciante
        </TableColumn>
        <TableColumn key="price" className="w-1/6">
          Precio
        </TableColumn>
        <TableColumn key="payment" className="w-1/6">
          Pago
        </TableColumn>
        <TableColumn key="limits" className="w-1/6">
          Limites
        </TableColumn>
        <TableColumn key="available" className="w-1/6">
          Disponibles
        </TableColumn>
        <TableColumn key="actions" className="w-auto">
          {""}
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {items?.map(item => {
          if (expandedKey === item.advertiser.name) {
            return (
              <TableRow key={item.announcementId}>
                <TableCell colSpan={6} className="bg-bg-200">
                  <InformationCell item={item} handleExpand={handleExpand} />
                </TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
                <TableCell className="hidden">{""}</TableCell>
              </TableRow>
            );
          } else {
            return (
              <TableRow key={item.announcementId}>
                <TableCell>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <span className="text-lg flex gap-2 items-center">
                        {item.advertiser.name}
                        {item.advertiser.verification && <FaCheckCircle className="text-button-bg" />}
                      </span>
                    </li>
                    <li>
                      <span className="text-sm">{item.advertiser.transactions} Transacciones</span>
                    </li>
                  </ul>
                </TableCell>
                <TableCell>
                  {item.price.value} {item.price.currency}
                </TableCell>
                <TableCell>
                  <ul>{item?.payment?.methods?.map((method, index) => <li key={index}>{method}</li>)}</ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Max :{item.limits.max_limit}</li>
                    <li>min :{item.limits.min_limit}</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li> Cantidad: {item.available.amount} </li>
                    <li> Moneda: {item.available.currency} </li>
                    <li> Red: {item.available.network} </li>
                  </ul>
                </TableCell>
                <TableCell>
                  <Button
                    className={`${item.action.type === "buy" ? "bg-success-button" : "bg-error"}`}
                    onPress={() => handleExpand(item.advertiser.name)}
                    key="action"
                  >
                    <span className="capitalize">{item.action.type === "buy" ? "Comprar" : "Vender"}</span>
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
