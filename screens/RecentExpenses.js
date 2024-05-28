import { Image, Text, View } from "react-native";
import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpenseOutput expensesPeriod={"Last 7 days"} />;
};

export default RecentExpenses;
