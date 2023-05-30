import { EmployeeDetailsProps, columns } from "./columns";
import { DataTable } from "./data-table";
import EmployeeTotalSum from "../data/employeeDataWithSum";

async function getData(): Promise<EmployeeDetailsProps[]> {
  const data = EmployeeTotalSum();
  return data;
}

export default async function PayrollTable() {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto py-5">
        <div>
          <div></div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
