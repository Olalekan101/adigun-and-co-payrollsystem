"use client";
import EmployeeTotalSum from "../data/employeeDataWithSum";
import { useMemo, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import NairaFormater from "../functions/NairaFormater";

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
              <div className="flex flex-col justify-center items-center w-full text-lg text-gray-500 ">
                <div>
                  <span className="font-bold">{x.name}</span>
                </div>
                <div className="space-x-2 text-sm flex justify-center divide-x-2 mt-1 whitespace-nowrap ">
                  <div className="w-[50%] text-end">Level: {x.cadrelevel}</div>
                  <div className="w-[50%] text-start pl-3">
                    Position: {x.position}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full gap-2 mt-4 divide-x-2">
                {/* earnings */}
                <div className="text-sm w-[50%]">
                  <div className="w-full text-base font-semibold bg-green-300 p-[1px] px-2 rounded-md">
                    <p>Earnings</p>
                  </div>
                  <ul className="px-3 divide-y-2 mt-1 [*_li]:flex">
                    <li>
                      <span>Basic Salary: </span>
                      <NairaFormater amount={x.earnings.basicSalary} />
                    </li>
                    <li>
                      <span>Overtime Pay: </span>
                      <NairaFormater amount={x.earnings.overtimePay} />
                    </li>
                    <li>
                      <span>Bonus: </span>
                      <NairaFormater amount={x.earnings.bonus} />
                    </li>
                    <li>
                      <span>Allowances: </span>
                      <ul className="px-4 divide-y-2">
                        <li>
                          <span>Housing ALW: </span>
                          <NairaFormater
                            amount={x.earnings.allowances.housingAllowance}
                          />
                        </li>
                        <li>
                          <span>Transp ALW: </span>
                          <NairaFormater
                            amount={
                              x.earnings.allowances.transportationAllowance
                            }
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="font-bold divide-y-2 mt-2 pl-3 ">
                    <span>Total Earning: </span>
                    <NairaFormater amount={x.totalEarnings} />
                  </div>
                </div>
                {/* deduction */}
                <div className="w-[50%] text-sm pl-2 ">
                  <div className="w-full text-base font-semibold bg-red-300 p-[1px] px-2 rounded-md">
                    <p>Deduction</p>
                  </div>
                  <ul className="px-3 divide-y-2 mt-1 [*_li]:flex [*_li]:gap-2">
                    <li>
                      <span>Income Tax: </span>
                      <NairaFormater amount={x.deductions.incomeTax} />
                    </li>
                    <li>
                      <span>Social Security: </span>
                      <NairaFormater amount={x.deductions.socialSecurity} />
                    </li>
                    <li>
                      <span>Health Insurance: </span>
                      <NairaFormater amount={x.deductions.healthInsurance} />
                    </li>
                    <li>
                      <span>Retirement Contributions: </span>
                      <NairaFormater
                        amount={x.deductions.retirementContributions}
                      />
                    </li>
                    <li>
                      <span>Loan Repayments: </span>
                      <NairaFormater amount={x.deductions.loanRepayments} />
                    </li>
                    <li>
                      <span>Other Deductions: </span>
                      <NairaFormater amount={x.deductions.otherDeductions} />
                    </li>
                  </ul>
                  <div className="font-bold divide-y-2 mt-2 pl-3 ">
                    <span>Total Deduction: </span>
                    <NairaFormater amount={x.totalDeductions} />
                  </div>
                </div>
              </div>
            </div>
            {/* Sum Total */}
            <div className="w-full flex justify-center mt-2 font-bold">
              <span>Sum Total: </span>
              <NairaFormater amount={x.sumTotal} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
