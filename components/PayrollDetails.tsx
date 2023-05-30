"use client";
import EmployeeTotalSum from "@/app/data/employeeDataWithSum";
import DeadlineDate from "../app/functions/DeadlineData";
import {
  ArcElement,
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement);

const cadreLevelCounts = EmployeeTotalSum().reduce((counts, employee) => {
  // @ts-ignore
  counts[employee.cadrelevel] = (counts[employee.cadrelevel] || 0) + 1;
  return counts;
}, {});

const cadreLevelCountsArray = Object.entries(cadreLevelCounts).map(
  ([cadrelevel, count]) => ({
    cadrelevel,
    count,
  })
);

const resultArray: string[] = cadreLevelCountsArray.map(
  ({ cadrelevel, count }) => ` ${count}`
);

const positionCounts = EmployeeTotalSum().reduce((counts, employee) => {
  // @ts-ignore
  counts[employee.position] = (counts[employee.position] || 0) + 1;
  return counts;
}, {});

const positionCountsArray = Object.entries(positionCounts).map(
  ([position, count]) => ({
    position,
    count,
  })
);

const positionResultArray: string[] = positionCountsArray.map(
  ({ position, count }) => ` ${count}`
);

export const cadreLeveldata = {
  labels: ["Entry Level", "Professional", "Manager"],
  datasets: [
    {
      label: "No of Employee",
      data: resultArray,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const positiondata = {
  labels: [
    "Junior Developer",
    "Senior Engineer",
    "Assistant Accountant",
    "Project Manager",
    "Senior Analyst",
    "Junior Designer",
    "Senior Manager",
    "Junior Accountant",
    "Data Scientist",
    "Operations Manager",
    "Junior Analyst",
    "Senior Architect",
    "Junior Engineer",
    "Senior Consultant",
  ],
  datasets: [
    {
      label: "No of Employee",
      data: positionResultArray,
      backgroundColor: [
        "rgba(39, 55, 77, 1)",
        "rgba(39, 55, 77, 0.9)",
        "rgba(39, 55, 77, 0.8)",
        "rgba(39, 55, 77, 0.7)",
        "rgba(39, 55, 77, 0.6)",
        "rgba(39, 55, 77, 0.5)",
        "rgba(39, 55, 77, 0.4)",
        "rgba(39, 55, 77, 0.3)",
        "rgba(39, 55, 77, 0.2)",
        "rgba(39, 55, 77, 0.1)",
        "rgba(39, 55, 77, 0.05)",
        "rgba(39, 55, 77, 0.02)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PayrollDetails() {
  const employeesData = EmployeeTotalSum();
  // const deadlinedate = DeadlineDate();

  const overallSumTotal = employeesData.reduce((accumulator, employee) => {
    return accumulator + employee.sumTotal;
  }, 0);
  const formattedSumTotal = overallSumTotal.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <div className="container">
      <div className=" p-4 w-full h-full flex justify-between items-end bg-slate-200/60 rounded-md">
        <div className="flex justify-start items-end gap-4 ">
          {/* <div className=" flex justify-center w-[150px] items-center gap-2 ">
            <Pie data={cadreLeveldata} />
          </div>
          <div className=" flex justify-center w-[150px] items-center gap-2 ">
            <Pie data={positiondata} />
          </div> */}
        </div>
        <div className="flex justify-end gap-6 ">
          <div>
            <div className="text-sm text-end ">Deadline</div>
            <div className="text-xl font-bold">{DeadlineDate()}</div>
          </div>
          <div>
            <div className="text-sm text-end ">Payroll Cost</div>
            <p className="text-xl font-bold">{formattedSumTotal}</p>
          </div>
          <div>
            <div className="text-sm text-end ">Total Employee</div>
            <p className="text-xl font-bold text-end">{employeesData.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
