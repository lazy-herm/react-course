import { useState } from "react";
import "./ExpenseGroup.css";
import ExpenseItem from "./ExpenseItem";
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
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredExpenses.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          );
        })
      )}
    </div>
  );
}

export default ExpenseGroup;
