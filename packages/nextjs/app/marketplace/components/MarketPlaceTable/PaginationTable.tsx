import React from "react";
import { Pagination } from "@nextui-org/react";

const PaginationTable = ({ page, pages, setPage }: any) => {
  return (
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
  );
};

export default PaginationTable;
