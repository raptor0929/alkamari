"use client";

import React from "react";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useBiconomy } from "~~/context/BiconomyContext";
import { GetMyOrders } from "~~/repository/OrderRepository";
import { Order } from "~~/types/types";

const MyOrders = () => {
  const rowsPerPage = 10;
  const { smartAccountAddress } = useBiconomy();
  const [page, setPage] = React.useState(1);
  const [orders, setOrders] = React.useState<Order[]>([]);

  const [pages, setPages] = React.useState(1);

  const LoadAnouncements = async () => {
    const myOrders = await GetMyOrders(smartAccountAddress as string);
    setOrders(myOrders);
    setPages(Math.ceil(myOrders.length / rowsPerPage));
    setPage(1);
  };

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return orders.slice(start, end);
  }, [page, orders]);

  React.useEffect(() => {
    LoadAnouncements();
  }, [smartAccountAddress, orders, setOrders, setPage, setPages]);

  if (orders.length === 0) return <>No Orders Available</>;

  return (
    <>
      <h1 className="text-center">My Orders</h1>
      <Table
        aria-label="Example table with client side pagination"
        selectionMode="single"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={page => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="status">Status</TableColumn>
          <TableColumn key="fromWalletAddress">From Wallet</TableColumn>
          <TableColumn key="toWalletAddress">To Wallet</TableColumn>
          <TableColumn key="orderSize">Amount (USDT)</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item: Order) => (
            <TableRow key={item.id}>{columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default MyOrders;
