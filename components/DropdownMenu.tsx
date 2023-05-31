"use client";
import { create } from "zustand";
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

type DropdownProps = {
  showDropValue: string;
  setDropValue: () => void;
};

export const Dropdownstate = create<DropdownProps>((set) => ({
  showDropValue: "10",
  // @ts-ignore
  setDropValue: (value) => ({ showDropValue: value.showDropValue }),
}));

export function DropdownMenuComp() {
  const [value, setValue] = useState("10");
  const valuex = Dropdownstate.setState({ showDropValue: value });

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
