import { Button } from "./ui/button";
import EmployeePayDetails from "@/app/employee/page";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex justify-between text-sm py-6 font-bold opacity-60">
      <div className="flex divide-x ">
        <h1 className="pr-2">Adigun & Co.</h1>
        <p className="font-light pl-2">Payroll Dashboard</p>
      </div>
      <div className="flex gap-2">
        <Button className="bg-slate-200" variant={"ghost"}>
          Admin
        </Button>
        <Button>
          <Link href="/employee">Staff</Link>
        </Button>
      </div>
    </header>
  );
}
