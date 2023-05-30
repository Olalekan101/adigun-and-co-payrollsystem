"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/tableHeaderLogic";
import NairaFormater from "../functions/NairaFormater";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EmployeeDetailsProps = {
  id: number;
  name: string;
  cadrelevel: string;
  position: string;
  totalEarnings: number;
  totalDeductions: number;
};

export const columns: ColumnDef<EmployeeDetailsProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "cadrelevel",
    header: () => <div className="">Level</div>,
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "totalEarnings",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Earning"
        className="flex justify-center items-center bg-green-200 rounded-md"
      />
    ),
    cell: ({ row }) => {
      const earnings = parseFloat(row.getValue("totalEarnings"));

      return (
        <div className=" flex justify-center items-center text-center font-medium bg-green-200 p-2 rounded-md">
          <NairaFormater amount={earnings} />
        </div>
      );
    },
  },
  {
    accessorKey: "totalDeductions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Deduction"
        className="flex justify-center items-center text-center bg-red-200 rounded-md"
      />
    ),
    cell: ({ row }) => {
      const deduction = parseFloat(row.getValue("totalDeductions"));

      return (
        <div className=" flex justify-center items-center text-center font-medium bg-red-200 p-2 rounded-md">
          <NairaFormater amount={deduction} />
        </div>
      );
    },
  },
  {
    accessorKey: "sumTotal",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Total"
        className="flex justify-center items-center text-center font-bold"
      />
    ),
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("sumTotal"));

      return (
        <div className=" flex justify-center items-center text-center font-bold">
          <NairaFormater amount={total} />
        </div>
      );
    },
  },
];
