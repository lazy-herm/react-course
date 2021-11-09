import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 class="expense-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul class="expenses-list">
      {props.items.map((exp) => {
        return <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />;
      })}
    </ul>
  );
};

export default ExpensesList;
