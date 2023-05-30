import { Suspense } from "react";
import PayrollTable from "./payrollsystem/page";
import PayrollDetails from "@/components/PayrollDetails";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PayrollDetails />
      {/* @ts-expect-error Async Server Component */}
      <PayrollTable />
    </main>
  );
}
