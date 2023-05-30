"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import EmployeeTotalSum from "@/app/data/employeeDataWithSum";
import NairaFormater from "@/app/functions/NairaFormater";
type props = {
  id: number;
  isOpen: boolean;
  setIsOpen: () => void;
};

export function EmployeeModel({ id, isOpen, setIsOpen }: props) {
  const data = EmployeeTotalSum();

  const filteredData = data.filter((x) => x.id === id);

  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-sm text-center font-light leading-6 text-gray-900"
                    >
                      Employee Pay Details
                    </Dialog.Title>
                    <div className="mt-2 flex justify-center flex-col w-full ">
                      {filteredData.map((x) => (
                        <>
                          <div
                            key={x.id}
                            className="flex flex-col justify-center items-center w-full text-sm text-gray-500 "
                          >
                            <div>
                              <span className="font-bold">{x.name}</span>
                            </div>
                            <div className="space-x-2 text-xs flex justify-center divide-x-2 mt-1 ">
                              <div className="w-[50%] text-end">
                                Level: {x.cadrelevel}
                              </div>
                              <div className="w-[50%] text-start pl-3">
                                Position: {x.position}
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full gap-2 mt-2 divide-x-2">
                            {/* earnings */}
                            <div className="text-sm w-[50%]">
                              <div className="w-full bg-green-300 p-[1px] px-1 rounded-md">
                                <p>Earnings</p>
                              </div>
                              <ul className="px-3 divide-y-2 mt-1">
                                <li>
                                  <span>Basic Salary: </span>
                                  <NairaFormater
                                    amount={x.earnings.basicSalary}
                                  />
                                </li>
                                <li>
                                  <span>Overtime Pay: </span>
                                  <NairaFormater
                                    amount={x.earnings.overtimePay}
                                  />
                                </li>
                                <li>
                                  <span>Bonus: </span>
                                  <NairaFormater amount={x.earnings.bonus} />
                                </li>
                                <li>
                                  <span>Allowances:</span>
                                  <ul className="px-4 divide-y-2">
                                    <li>
                                      <span>Housing ALW:</span>
                                      <NairaFormater
                                        amount={
                                          x.earnings.allowances.housingAllowance
                                        }
                                      />
                                    </li>
                                    <li>
                                      <span>Transp ALW:</span>
                                      <NairaFormater
                                        amount={
                                          x.earnings.allowances
                                            .transportationAllowance
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
                              <div className="w-full bg-red-300 p-[1px] px-1 rounded-md">
                                <p>Deduction</p>
                              </div>
                              <ul className="px-3 divide-y-2 mt-1">
                                <li>
                                  <span>Income Tax: </span>
                                </li>
                                <NairaFormater
                                  amount={x.deductions.incomeTax}
                                />
                                <li>
                                  <span>Social Security: </span>
                                </li>
                                <NairaFormater
                                  amount={x.deductions.socialSecurity}
                                />
                                <li>
                                  <span>Health Insurance: </span>
                                </li>
                                <NairaFormater
                                  amount={x.deductions.healthInsurance}
                                />
                                <li>
                                  <span>Retirement Contributions:</span>
                                </li>
                                <NairaFormater
                                  amount={x.deductions.retirementContributions}
                                />
                                <li>
                                  <span>Loan Repayments:</span>
                                </li>
                                <NairaFormater
                                  amount={x.deductions.loanRepayments}
                                />
                                <li>
                                  <span>Other Deductions:</span>
                                </li>
                                <NairaFormater
                                  amount={x.deductions.otherDeductions}
                                />
                              </ul>
                              <div className="font-bold divide-y-2 mt-2 pl-3 ">
                                <span>Total Deduction: </span>
                                <NairaFormater amount={x.totalDeductions} />
                              </div>
                            </div>
                          </div>
                          {/* Sum Total */}
                          <div className="w-full flex justify-center mt-2 font-bold">
                            <span>Sum Total: </span>
                            <NairaFormater amount={x.sumTotal} />
                          </div>
                        </>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-center w-full">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
                        onClick={setIsOpen}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
