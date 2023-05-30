import { Suspense } from "react";
import PayrollTable from "./payrollsystem/page";
import PayrollDetails from "@/components/PayrollDetails";
import { BsLightbulbFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <PayrollDetails />
      <div className="flex justify-center items-center gap-2 p-4">
        <div className="text-yellow-400">
          <BsLightbulbFill />
        </div>
        <div className="text-sm opacity-70">
          Guide: Click on the cell to get more details about the employee
          deduction and earnings.
        </div>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <PayrollTable />
    </main>
  );
}
