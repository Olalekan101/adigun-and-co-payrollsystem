"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import EmployeeTotalSum from "@/app/data/employeeDataWithSum";

type props = {
  id: number;
};

export default function PopoverComp({ id }: props) {
  const data = EmployeeTotalSum();
  const filterData = data.filter((x) => x.id === id);

  return (
    <>
      {filterData.map((x) => (
        <div key={x.id}>
          <div>{x.name}</div>
        </div>
      ))}
    </>
  );
}
