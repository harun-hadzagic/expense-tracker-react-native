import { useContext, useEffect, useState } from "react";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  // const expensesContext = useContext(ExpensesContext);
  const [fetchedExpenses, setFetchedExpenses] = useState([])

  useEffect(()=>{
    const getExpenses = async ()=>{
      const expenses = await fetchExpenses()
      setFetchedExpenses(expenses)
    }

    getExpenses();
  },[])

  const recentExpenses = fetchedExpenses.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today)

  })
  return <ExpenseOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} fallbackText="No expenses in the last 7 days"/>;
};

export default RecentExpenses;
