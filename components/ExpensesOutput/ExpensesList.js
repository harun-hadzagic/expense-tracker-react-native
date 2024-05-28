import { FlatList, Text } from "react-native"

const ExpensesList = ({expenses}) =>{

    const renderExpenseItem = (itemData)=>{
        return <Text>{itemData.item.description}</Text>
    }

    return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=> item.id}/>
}

export default ExpensesList