import React from "react";
import ChartBar from "./ChartBar";

const Chart = ({ filteredExpenses }) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of filteredExpenses) {
    const savedDate = new Date(expense.date);
    const month = savedDate.getMonth();
    const valueFactor = expense.amount >= 100 ? 10 : 1;
    dataPoints[month].value += expense.amount / valueFactor;
  }

  return (
    <div>
      <ChartBar dataPoints={dataPoints} />
    </div>
  );
};

export default Chart;
