"use client";
import EmployeeTotalSum from "@/app/data/employeeDataWithSum";
import DeadlineDate from "../app/functions/DeadlineData";
import NairaFormater from "../app/functions/NairaFormater";
import Wordseprator from "../app/functions/WordSeprator";
import { useState } from "react";
import { motion } from "framer-motion";

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

export default function PayrollDetails() {
  const employeesData = EmployeeTotalSum();
  const [hover, setHover] = useState(false);
  const [currentpositionId, setCurrentpositionId] = useState(null);
  const [positionFull, setPositionFull] = useState(positionCountsArray);

  const handlePostionFull = (positionId: any) => {
    setPositionFull((prevItems) => {
      return prevItems.map((item) => {
        if (item.position === positionId) {
          return {
            ...item,
            clicked: !item.clicked,
          };
        }
        if (item.position === currentpositionId) {
          return {
            ...item,
            clicked: false,
          };
        }
        return item;
      });
    });
    setCurrentpositionId(positionId);
  };

  const overallSumTotal = employeesData.reduce((accumulator, employee) => {
    return accumulator + employee.sumTotal;
  }, 0);

  return (
    <div className="container">
      <div className=" p-4 w-full h-full flex justify-between items-end bg-slate-200/60 rounded-md">
        <div className="w-[50%] flex flex-col">
          <div className="font-bold text-sm py-2 opacity-60">
              Those are the numbers of employees at each level.
          </div>
          <div
            className=" flex flex-wrap w-full overflow-clip  gap-2 text-sm  "
            onMouseEnter={() => setHover((prev) => !prev)}
          >
            {cadreLevelCountsArray?.map((x) => (
              <div
                className="  text-xs cursor-pointer basis-auto flex"
                key={x.cadrelevel}
              >
                <div className="bg-slate-600 text-slate-100 px-2 py-1 rounded-md whitespace-nowrap ">
                  {x.cadrelevel}
                </div>
                <div className="bg-slate-300 text-slate-600 px-2 py-1 rounded-md">
                  {x.count}
                </div>
              </div>
            ))}
          </div>
          <div className="font-bold text-sm py-2 opacity-60">
            Those are the number of employees in each position.
          </div>
          <div
            className=" flex flex-wrap w-full overflow-clip  gap-2 text-sm  "
            onMouseEnter={() => setHover((prev) => !prev)}
          >
            {positionFull?.map((x) => (
              <div
                className="  text-xs cursor-pointer basis-auto flex"
                key={x.position}
                onMouseEnter={() => handlePostionFull(x.position)}
                onMouseLeave={() => handlePostionFull(x.position)}
              >
                <motion.div className="bg-slate-600 text-slate-100 px-2 py-1 rounded-md whitespace-nowrap ">
                  {x.clicked ? x.position : <Wordseprator text={x.position} />}
                </motion.div>
                <div className="bg-slate-300 text-slate-600 px-2 py-1 rounded-md">
                  {x.count}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end w-[50%] gap-6 ">
          <div>
            <div className="text-sm text-end ">Deadline</div>
            <div className="text-xl font-bold">{DeadlineDate()}</div>
          </div>
          <div>
            <div className="text-sm text-end ">Payroll Cost</div>
            <p className="text-xl font-bold">
              <NairaFormater amount={overallSumTotal} />
            </p>
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
