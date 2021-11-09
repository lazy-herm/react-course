import { useState } from "react";
import "./ExpenseGroup.css";
import ExpensesList from './ExpensesList';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

function ExpenseGroup(props) {
  const [filterYear, setExpenseFilterYear] = useState("2021");
  const getFilterYear = (filteredYear) => {
    setExpenseFilterYear(filteredYear);
  };
  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter setYear={filterYear} onYearChange={getFilterYear} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default ExpenseGroup;
