import employees from "./employeeData.json";

const calculateTotalSum = () => {
  const updatedEmployees = employees.employees.map((employee) => {
    const earningsSum =
      employee.earnings.basicSalary +
      employee.earnings.overtimePay +
      employee.earnings.bonus +
      employee.earnings.allowances.housingAllowance +
      employee.earnings.allowances.transportationAllowance +
      employee.earnings.performancePay;

    const deductionsSum =
      employee.deductions.incomeTax +
      employee.deductions.socialSecurity +
      employee.deductions.healthInsurance +
      employee.deductions.retirementContributions +
      employee.deductions.loanRepayments +
      employee.deductions.otherDeductions;

    return {
      ...employee,
      totalEarnings: earningsSum,
      totalDeductions: deductionsSum,
      sumTotal: earningsSum - deductionsSum,
    };
  });

  return updatedEmployees;
};

const EmployeeTotalSum = () => {
  const updatedEmployees = calculateTotalSum();
  return updatedEmployees;
};

export default EmployeeTotalSum;
