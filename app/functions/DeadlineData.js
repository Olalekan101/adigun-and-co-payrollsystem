"use client";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function DeadlineLogic() {
  const currentDate = new Date();
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const resultDate = new Date(
    lastDayOfMonth.getTime() - 2 * 24 * 60 * 60 * 1000
  );

  // Get the month name and day from the resultDate
  const options = { month: "long", day: "numeric" };
  const formattedResult = resultDate.toLocaleDateString(undefined, options);

  return formattedResult;
}

export default function DeadlineDate() {
  const [date, setDate] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      const dataLogic = DeadlineLogic();
      setDate(dataLogic);
      setMounted((prev) => (prev = true));
    }
  }, []);
  return (
    <>
      {mounted ? (
        date
      ) : (
        <div className="animate-spin flex justify-center items-center w-full  text-sm font-normal">
          <img src="../../public/Spin.svg" />
        </div>
      )}
    </>
  );
}
