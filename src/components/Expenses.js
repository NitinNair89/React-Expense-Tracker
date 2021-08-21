import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItemUI from "./ExpenseItemUI";
import "../css/Expenses.css";

const Expenses = ({ expenses }) => {
  // Year filter state and function
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const fnYearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  // Create array of expenses based on selected filter
  const filteredExpenses = expenses.filter((exp) => {
    const savedDate = new Date(exp.date);
    const savedDateFilter = localStorage.getItem("ET_dateFilter");
    if (selectedYear === "all" || savedDateFilter === "all") {
      return expenses;
    }
    return savedDate.getFullYear().toString() === selectedYear.toString();
  });

  return (
    <>
      <ExpenseFilter
        onYearChange={fnYearChangeHandler}
        filteredExpenses={filteredExpenses}
      />
      <ul role="listbox" className="expenseItemWrapper">
        <ExpenseItemUI items={filteredExpenses} />
      </ul>
    </>
  );
};

export default Expenses;
