"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const pathcheck = pathName === "/" ? true : false;

  return (
    <header className="container flex justify-between items-center text-sm py-6 font-bold ">
      <div className="flex justify-center divide-x ">
        <h1 className="pr-2">Adigun & Co.</h1>
        <p className="font-light pl-2">Payroll Dashboard</p>
      </div>
      <div className="flex gap-2">
        <Button
          className={`${
            pathcheck ? "bg-slate-50 text-slate-600" : "bg-slate-600"
          }`}
        >
          <Link href="/">Admin</Link>
        </Button>
        <Button
          className={`${
            pathcheck ? "bg-slate-600" : "bg-slate-50 text-slate-600"
          }`}
        >
          <Link href="/employee">Staff</Link>
        </Button>
      </div>
    </header>
  );
}
