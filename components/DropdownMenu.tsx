"use client";
import { DropdownState } from "@/app/states/State";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

// type DropdownProps = {
//   value1: string;
//   value2: string;
//   value3: string;
//   value: string;
//   setValue: React.Dispatch<React.SetStateAction<string>>;
// };

export function DropdownMenuComp() {
  const [value, setValue] = useState("");
  const { setShow10, setShow30, setShow50, showValue } = DropdownState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Show {value !== "" ? value : "10"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Table Size</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="10">Show 10</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="30">Show 30</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="50">Show 50</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
