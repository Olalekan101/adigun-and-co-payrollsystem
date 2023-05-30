const TotalSum = ({ earnings = {} }) => {
  const calculateTotalEarnings = (obj) => {
    return Object.values(obj).reduce((accumulator, value) => {
      if (typeof value === "object") {
        return accumulator + calculateTotalEarnings(value);
      }
      return accumulator + value;
    }, 0);
  };

  const totalSumCal = calculateTotalEarnings(earnings);

  return <span>{totalSumCal}</span>;
};

export default TotalSum;
