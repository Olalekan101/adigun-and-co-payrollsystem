export default function NairaFormater({ amount }) {
  const formatAmount = (num) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(num);
  };

  return <span>{formatAmount(amount)}</span>;
}
