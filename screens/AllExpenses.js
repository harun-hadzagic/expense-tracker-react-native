import { useContext } from "react";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const exoensesContext = useContext(ExpensesContext)
  return <ExpenseOutput expensesPeriod={"Total"} expenses={exoensesContext.expenses} fallbackText="No available expenses"/>;
};

export default AllExpenses;
