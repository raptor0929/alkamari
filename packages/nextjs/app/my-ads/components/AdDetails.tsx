import React from "react";
import { Chip, TableCell, TableRow } from "@nextui-org/react";
import { Announcement } from "~~/types/types";

const AdDetails = (data: Announcement) => {
  return (
    <TableRow key={data.id} onClick={() => console.log(data.id)}>
      <TableCell>{data.creationDate.toString()}</TableCell>
      <TableCell>{data.type}</TableCell>
      <TableCell>{data.cryptoCurrency}</TableCell>
      <TableCell>{data.fiatCurrency}</TableCell>
      <TableCell>{data.cryptoAmount}</TableCell>
      <TableCell>{data.fiatUnitPice}</TableCell>
      <TableCell>
        <Chip color={data.active ? "success" : "danger"}>{data.active ? "Active" : "InActive"}</Chip>
      </TableCell>
    </TableRow>
  );
};
export default AdDetails;
