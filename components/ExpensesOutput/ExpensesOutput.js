import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 19.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Some apples",
    amount: 2.99,
    date: new Date("2022-12-09"),
  },
];

const ExpenseOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});
