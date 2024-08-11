"use client";

import React from "react";
import AdDetails from "./components/AdDetails";
import { Button, Link, Pagination, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { useWallets } from "@privy-io/react-auth";
import { GetAllAnnouncements } from "~~/repository/AnnouncementRepository";
import { Announcement, OrderType } from "~~/types/types";

const MyAdsComponent = () => {
  const rowsPerPage = 10;
  const { wallets } = useWallets();
  const myWalletAddress = wallets[0].address;
  const [page, setPage] = React.useState(1);
  const [anouncemets, setAnouncemets] = React.useState<Announcement[]>([]);
  const [operationType, setOperationType] = React.useState(OrderType.Buy);
  const [pages, setPages] = React.useState(1);

  const LoadAnouncements = async () => {
    const myAnouncemets = await GetAllAnnouncements();

    const filterdData = myAnouncemets.filter(x => x.type === operationType && x.walletAddress == myWalletAddress);
    setAnouncemets(filterdData);
    setPages(Math.ceil(filterdData.length / rowsPerPage));
    setPage(1);
  };

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return anouncemets.slice(start, end);
  }, [page, anouncemets]);

  React.useEffect(() => {
    LoadAnouncements();
  }, [operationType]);

  return (
    <>
      <div
        className="flex flex-wrap gap-4 items-center"
        style={{ maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto" }}
      >
        <Button color="primary" onClick={() => setOperationType(OrderType.Buy)}>
          Buy
        </Button>
        <Button color="secondary" onClick={() => setOperationType(OrderType.Sell)}>
          Sell
        </Button>
        <Link href="/new-announce">
          <Button color="default">New Anouncement</Button>
        </Link>
      </div>
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
          <TableColumn key="creationDate">Creation Date</TableColumn>
          <TableColumn key="type">Type</TableColumn>
          <TableColumn key="cryptoCurrency">Crypto-Currency</TableColumn>
          <TableColumn key="fiatCurrency">Fiat-Currency</TableColumn>
          <TableColumn key="cryptoAmount">Amount</TableColumn>
          <TableColumn key="fiatUnitPice">Unit Pice</TableColumn>
          <TableColumn key="active">Status</TableColumn>
        </TableHeader>
        <TableBody items={items}>{item => AdDetails(item)}</TableBody>
      </Table>
    </>
  );
};

export default MyAdsComponent;
