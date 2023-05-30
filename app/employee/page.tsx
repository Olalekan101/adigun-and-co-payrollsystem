"use client";
import EmployeeTotalSum from "../data/employeeDataWithSum";
import { useMemo, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

export default function EmployeePayDetails() {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const generateRandomNumber = () => {
      const min = 1;
      const max = 50;
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      // @ts-ignore
      setRandomNumber(number);
    };

    generateRandomNumber();
  }, []);
  const data = EmployeeTotalSum();
  const filteredData = () => data.filter((x) => x.id === randomNumber);
  return (
    <div className="container my-6  ">
      <div className="bg-slate-200/60 min-h-screen p-6 rounded-md flex justify-center ">
        {filteredData().map((x) => (
          <div key={x.id} className="flex flex-col items-center">
            <div>
              <div className=" flex justify-center text-6xl opacity-50 ">
                <CgProfile />
              </div>
              <div className=" flex gap-4 divide-x mt-4 ">
                <div>{x.name}</div>
                <div>{x.cadrelevel}</div>
                <div>{x.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
