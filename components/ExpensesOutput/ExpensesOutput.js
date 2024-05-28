import { View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

const ExpenseOutput = ({expenses, expensesPeriod}) =>{

    return <View>
        <ExpensesSummary expenses={expenses} expensesSummary={expensesPeriod}/>
        <ExpensesList />
    </View>

}

export default ExpenseOutput