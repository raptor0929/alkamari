import React from "react";
import { UserData } from "../../types/types";
import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const MarketPlaceTable = ({ ordersData }: { ordersData: UserData[] }) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 7;

  const pages = Math.ceil(ordersData.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return ordersData.slice(start, end);
  }, [page, ordersData]);

  return (
    <Table
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={page => setPage(page)}
            classNames={{
              cursor:
                "bg-border-color text-black shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 font-bold",
            }}
          />
        </div>
      }
      classNames={{
        base: "p-0 m-0",
        table: "",
      }}
      removeWrapper={true}
    >
      <TableHeader>
        <TableColumn key="name" style={{ width: "200px" }}>
          NAME
        </TableColumn>
        <TableColumn key="transactions" style={{ width: "150px" }}>
          TRANSACTIONS
        </TableColumn>
        <TableColumn key="status" style={{ width: "100px" }}>
          STATUS
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {items.map(item => (
          <TableRow key={item.advertiser.name}>
            <TableCell style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {item.advertiser.name}
            </TableCell>
            <TableCell style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {item.advertiser.transactions}
            </TableCell>
            <TableCell style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {item.action.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MarketPlaceTable;
