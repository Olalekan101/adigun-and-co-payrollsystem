"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/tableHeaderLogic";

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
        className="flex justify-center items-center"
      />
    ),
    cell: ({ row }) => {
      const earnings = parseFloat(row.getValue("totalEarnings"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(earnings);

      return (
        <div className=" flex justify-center items-center text-center font-medium">
          {formatted}
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
        className="flex justify-center items-center"
      />
    ),
    cell: ({ row }) => {
      const deduction = parseFloat(row.getValue("totalDeductions"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(deduction);

      return (
        <div className=" flex justify-center items-center text-center font-medium">
          {formatted}
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
        className="flex justify-center items-center"
      />
    ),
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("sumTotal"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(total);

      return (
        <div className=" flex justify-center items-center text-center font-medium">
          {formatted}
        </div>
      );
    },
  },
];
